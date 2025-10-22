import os

from convert.convert import router as convert_router
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="句読点変換API",
    description="全角・半角句読点を相互に変換するAPI",
    version="1.0.0",
)  # インスタンスを作成

# CORS設定 - 本番環境用に制限
# 環境変数 ALLOWED_ORIGINS で許可するオリジンを指定可能
allowed_origins_str = os.getenv(
    "ALLOWED_ORIGINS",
    "http://localhost:5173,https://your-app.vercel.app",  # デフォルト値（後で変更）
)
allowed_origins = [origin.strip() for origin in allowed_origins_str.split(",")]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ルーターを登録
app.include_router(convert_router)


# ヘルスチェックエンドポイント
@app.get("/")
async def root():
    return {"message": "句読点変換API", "status": "ok", "version": "1.0.0"}


@app.get("/health")
async def health_check():
    return {"status": "healthy"}
