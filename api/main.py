from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from convert.convert import router as convert_router


app = FastAPI()  # インスタンスを作成

# COR設定
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ルーターを登録
app.include_router(convert_router)
