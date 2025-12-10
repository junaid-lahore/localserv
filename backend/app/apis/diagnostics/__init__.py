from fastapi import APIRouter, HTTPException
import os

router = APIRouter()

@router.get("/diag/requirements")
def get_requirements_content():
    """Reads and returns the content of requirements.txt."""
    try:
        req_path = "/app/src/requirements.txt"
        if os.path.exists(req_path):
            with open(req_path, "r") as f:
                content = f.read()
            return {"status": "success", "content": content}
        else:
            return {"status": "error", "message": "requirements.txt not found at /app/src/requirements.txt"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
