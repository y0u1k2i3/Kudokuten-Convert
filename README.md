# リアルタイム句読点変換ツール (Kudokuten-Convert)

[![Vercel](https://img.shields.io/badge/Deployment-Vercel-black?logo=vercel)](https://kudokuten-convert.vercel.app) [![Render](https://img.shields.io/badge/Deployment-Render-2bbc8a?logo=render)](RENDER_BACKEND_URL_HERE)

## 概要

テキストエリア内の句読点（全角の「、。」と半角の「, .」）をリアルタイムで相互変換する Web アプリです。

ライブデモ（フロントエンド）: https://kudokuten-convert.vercel.app

## 主な機能

- 全角/半角句読点の相互変換（リアルタイムプレビュー）

## 技術スタック

- フロントエンド: React, Vite, JSX
- バックエンド: Python, FastAPI, Uvicorn / Gunicorn
- インフラ/デプロイ: Vercel (frontend), Render (backend), Docker

## ローカルで動かす（Docker を使ったデモ）

### コンテナをビルド & 起動

```sh
cd docker
docker compose up --build -d
```

### ローカルホストで確認

- フロント: http://localhost/
- バック: http://localhost:8000/

### コンテナを停止

```sh
docker compose down
```

## 今後の追加機能

- クリップボードへのコピー、入力履歴の簡易管理
