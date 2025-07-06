from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()  # インスタンス作成

# CORS設定
# origins = [
#     "http://localhost:3000",
# ]


class Text(BaseModel):
    text: str


# 文字列を全角に変換するエンドポイント
@router.post("/zenkaku")
async def convert_to_zenkaku(payload: Text):
    zenkaku_text = payload.text.replace(",", "、").replace(".", "。")
    zenkaku_text = zenkaku_text.replace("，", "、").replace("．", "。")
    return {"converted": zenkaku_text}


# 文字列を半角に変換するエンドポイント
@router.post("/hankaku")
async def convert_to_hankaku(payload: Text):
    hankaku_text = payload.text.replace("、", "，").replace("。", "．")
    return {"converted": hankaku_text}
