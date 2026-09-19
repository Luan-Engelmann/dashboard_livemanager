# Live Manager

## Como executar o projeto localmente

### 1. Backend (FastAPI)
Abra um terminal na pasta `backend`:
```bash
cd backend
python -m venv venv
# Ative o ambiente virtual
# No Windows: venv\Scripts\activate
# No Linux/Mac: source venv/bin/activate

pip install -r requirements.txt
uvicorn main:app --reload
```
A API estará rodando em `http://localhost:8000`.

### 2. Frontend (React)
Abra outro terminal na pasta `frontend`:
```bash
cd frontend
npm install
npm run dev
```
O frontend estará rodando em `http://localhost:5173`.
