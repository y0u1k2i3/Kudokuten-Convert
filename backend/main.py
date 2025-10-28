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
allowed_origin = os.getenv("ALLOWED_ORIGIN")

if allowed_origin:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=[allowed_origin.strip()],
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
