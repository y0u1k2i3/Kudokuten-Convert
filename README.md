# リアルタイム句読点変換ツール

## 概要

句読点をリアルタイムで変換する Web アプリケーションです。
全角（、。）と半角（，．）の句読点を相互に変換できます。

## 技術スタック

- **フロントエンド**: React + Vite
- **バックエンド**: FastAPI (Python)
- **デプロイ**: Vercel (フロントエンド) + Render (バックエンド)

## ローカル開発

### 前提条件

- Node.js 20 以上
- Python 3.11 以上

### フロントエンド

```bash
npm install
npm run dev
```

ブラウザで http://localhost:5173 を開く

### バックエンド

```bash
cd api
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

API ドキュメント: http://localhost:8000/docs

## 環境変数

### フロントエンド (Vercel)

```
VITE_API_URL=https://your-backend-app.onrender.com
```

### バックエンド (Render)

```
ALLOWED_ORIGINS=http://localhost:5173,https://your-app.vercel.app
```

## デプロイ

### Vercel (フロントエンド)

1. GitHub リポジトリと連携
2. 環境変数 `VITE_API_URL` を設定
3. 自動デプロイ

### Render (バックエンド)

- **Root Directory**: `api`
- **Build Command**: `pip install -r requirements.txt`
- **Start Command**: `gunicorn -k uvicorn.workers.UvicornWorker main:app --bind 0.0.0.0:$PORT --workers 2`
- 環境変数 `ALLOWED_ORIGINS` を設定
