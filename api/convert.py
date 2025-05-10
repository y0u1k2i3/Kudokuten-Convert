from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()  # インスタンスを作成

# CORS設定
# origins = [
#     "http://localhost:3000",
# ]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Text(BaseModel):
    text: str


# 文字列を全角に変換するエンドポイント
@app.post("/zenkaku")
async def convert_to_zenkaku(text: Text):
    zenkaku_text = text.replace(",", "、").replace(".", "。")
    zenkaku_text = zenkaku_text.replace("，", "、").replace("．", "。")
    return {"converted": zenkaku_text}


# 文字列を半角に変換するエンドポイント
@app.post("/hankaku")
async def convert_to_hankaku(text: Text):
    hankaku_text = text.replace("、", "，").replace("。", "．")
    return {"converted": hankaku_text}
