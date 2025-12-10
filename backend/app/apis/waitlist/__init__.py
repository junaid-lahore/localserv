from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel, EmailStr
from typing import Literal, Optional
import databutton as db
import datetime
import re
import firebase_admin
from firebase_admin import credentials, firestore
import json

router = APIRouter()

class WaitlistSubmission(BaseModel):
    fullName: str
    email: EmailStr
    userType: Literal['consumer', 'business']
    city: str
    state: str
    industry: Optional[str] = None
    serviceInterest: Optional[str] = None

class WaitlistResponse(BaseModel):
    message: str
    submissionId: str

def sanitize_storage_key_component(component: str) -> str:
    """Sanitize component of a storage key to allow alphanumeric and ._- symbols."""
    return re.sub(r'[^a-zA-Z0-9._-]', '', component)

@router.post("/waitlist/subscribe", response_model=WaitlistResponse, status_code=status.HTTP_201_CREATED)
def subscribe_to_waitlist(submission: WaitlistSubmission):
    """
    Receives a waitlist submission, validates it, stores it in Firestore, 
    and sends an email notification.
    """
    print(f"Received waitlist submission for: {submission.email}")

    # Basic validation for conditional fields
    if submission.userType == 'business' and not submission.industry:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail="Industry is required for business users."
        )
    if submission.userType == 'consumer' and not submission.serviceInterest:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail="Service interest is required for consumer users."
        )

    # Initialize Firebase Admin SDK if not already initialized
    if not firebase_admin._apps:
        try:
            service_account_info_str = db.secrets.get("FIREBASE_SERVICE_ACCOUNT_KEY")
            if not service_account_info_str:
                print("Error: FIREBASE_SERVICE_ACCOUNT_KEY secret not found.")
                raise HTTPException(
                    status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                    detail="Firebase Admin SDK not configured. Secret not found."
                )
            service_account_info = json.loads(service_account_info_str)
            cred = credentials.Certificate(service_account_info)
            firebase_admin.initialize_app(cred)
            print("Firebase Admin SDK initialized successfully.")
        except json.JSONDecodeError as e:
            print(f"Error decoding FIREBASE_SERVICE_ACCOUNT_KEY: {str(e)}")
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail=f"Invalid Firebase service account key format: {str(e)}"
            ) from e
        except ValueError as e: # Specific error for malformed cert
            print(f"Error initializing Firebase Admin SDK (ValueError): {str(e)}")
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail=f"Error initializing Firebase Admin SDK: {str(e)}"
            ) from e
        except Exception as e:
            print(f"Error initializing Firebase Admin SDK: {str(e)}")
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail=f"Could not initialize Firebase Admin SDK: {str(e)}"
            ) from e

    try:
        firestore_db = firestore.client()
        # Create a new document in the 'waitlist' collection
        doc_ref = firestore_db.collection('waitlist').add(submission.model_dump())
        # doc_ref is a tuple (timestamp, DocumentReference) in some SDK versions,
        # but add() returns a DocumentReference directly or a tuple containing it.
        # We are interested in the ID of the created document.
        submission_id = doc_ref[1].id if isinstance(doc_ref, tuple) else doc_ref.id
        print(f"Successfully stored submission {submission_id} in Firestore for {submission.email}.")

        # Prepare email content
        email_subject = f"New Waitlist Submission: {submission.email}"
        
        html_body_parts = [
            "<h3>New Waitlist Submission:</h3>",
            f"<p><strong>Full Name:</strong> {submission.fullName}</p>",
            f"<p><strong>Email:</strong> {submission.email}</p>",
            f"<p><strong>User Type:</strong> {submission.userType}</p>",
            f"<p><strong>City:</strong> {submission.city}</p>",
            f"<p><strong>State:</strong> {submission.state}</p>"
        ]
        if submission.userType == 'business' and submission.industry:
            html_body_parts.append(f"<p><strong>Industry:</strong> {submission.industry}</p>")
        if submission.userType == 'consumer' and submission.serviceInterest:
            html_body_parts.append(f"<p><strong>Service Interest:</strong> {submission.serviceInterest}</p>")
        email_content_html = "".join(html_body_parts)

        text_body_parts = [
            "New Waitlist Submission:",
            f"Full Name: {submission.fullName}",
            f"Email: {submission.email}",
            f"User Type: {submission.userType}",
            f"City: {submission.city}",
            f"State: {submission.state}"
        ]
        if submission.userType == 'business' and submission.industry:
            text_body_parts.append(f"Industry: {submission.industry}")
        if submission.userType == 'consumer' and submission.serviceInterest:
            text_body_parts.append(f"Service Interest: {submission.serviceInterest}")
        email_content_text = "\n".join(text_body_parts)
        
        try:
            db.notify.email(
                to="isaiah@ibsolutions.ai",
                subject=email_subject,
                content_html=email_content_html,
                content_text=email_content_text
            )
            print(f"Successfully sent waitlist notification email for {submission.email} to isaiah@ibsolutions.ai")
        except Exception as email_exc:
            # Log error, but don't fail the entire request because email failed.
            print(f"Error sending email notification for {submission.email}: {str(email_exc)}")

        return WaitlistResponse(message="Successfully subscribed to waitlist!", submissionId=submission_id)

    except Exception as e:
        print(f"Error during Firestore operation or email preparation for {submission.email}: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Could not process submission for {submission.email} due to an internal server error."
        ) from e
