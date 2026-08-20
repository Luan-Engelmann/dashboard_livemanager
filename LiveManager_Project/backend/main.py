from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import auth

app = FastAPI(title='Live Manager API')

# Configuração de CORS para permitir que o React converse com a API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # O endereço do seu frontend no Vite
    allow_credentials=True,
    allow_methods=["*"],  # Permite todos os métodos (GET, POST, OPTIONS, etc)
    allow_headers=["*"],  # Permite todos os cabeçalhos
)

# Estrutura modular, facilitando a expansão
app.include_router(auth.router, prefix='/api/auth', tags=['Authentication'])

@app.get('/')
def read_root():
    return {'message': 'Live Manager API is rodando!'}