from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

class LoginData(BaseModel):
    username: str
    password: str

@router.post('/login')
def login(data: LoginData):
    # Mock temporário para testes do frontend
    if data.username == 'admin' and data.password == 'admin':
        return {'access_token': 'fake-jwt-token-12345', 'token_type': 'bearer'}
    raise HTTPException(status_code=400, detail='Usuário ou senha incorretos')
