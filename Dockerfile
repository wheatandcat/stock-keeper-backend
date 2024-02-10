# ステージ1: 依存関係のインストールとビルド
FROM node:18 AS builder
WORKDIR /usr/src/app

# pnpmのインストール
RUN npm install -g pnpm

# package.jsonとpnpm-lock.yamlをコピー
COPY package.json pnpm-lock.yaml ./

# 依存関係のインストール
RUN pnpm install

# アプリケーションのソースコードをコピー
COPY . .

RUN npx prisma generate

# アプリケーションのビルド
RUN pnpm run build

# ステージ2: 本番環境用イメージの作成
FROM node:18-alpine AS production
WORKDIR /usr/src/app

# 環境変数 NODE_ENV を production に設定
ENV NODE_ENV=production

# pnpmのインストール
RUN npm install -g pnpm

# package.jsonとpnpm-lock.yamlをコピー
COPY package.json pnpm-lock.yaml ./

# 本番依存関係のみをインストール
RUN pnpm install --prod

# ビルドしたファイルをコピー
COPY --from=builder /usr/src/app/dist ./dist

# アプリケーションがリッスンするポート番号
EXPOSE 8080

CMD ["node", "dist/src/main"]
