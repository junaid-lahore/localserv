from fastapi import APIRouter

router = APIRouter()

@router.get("/health")
def check_api_health():
    """A simple endpoint to confirm the API is running."""
    return {"status": "ok"}
