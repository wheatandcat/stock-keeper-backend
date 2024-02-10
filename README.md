# stock-keeper-backend

## ローカル起動

```shell
pnpm run start:dev
```

## Resolver生成

```shell
npx nest g res
```

## GraphQL Code Gen

```shell
pnpm codegen
```

## Prisma

```shell
pnpm db:push
```

## デプロイ

### pack

```shell
pack build gcr.io/our-project-id/stock-keeper-backend --builder gcr.io/buildpacks/builder:google-22
```

### Docker

```shell
docker push gcr.io/your-project-id/stock-keeper-backend

 gcloud builds submit --pack image=asia.gcr.io/stock-keeper-review/stock-keeper-backend:latest
```

### Cloud Run

```shell
gcloud run deploy your-service-name \
  --image gcr.io/your-project-id/stock-keeper-backend \
  --platform managed \
  --region asia-northeast1 \
  --command="yarn start" \
  --source . \
  --allow-unauthenticated

gcloud run deploy stock-keeper-backend \
  --image gcr.io/stock-keeper-review/stock-keeper-backend \
  --region asia-northeast1 \
  --allow-unauthenticated

gcloud run deploy stock-keeper-backend --image gcr.io/stock-keeper-review/stock-keeper-backend --platform managed  \
  --region asia-northeast1 \
  --allow-unauthenticated

gcloud run deploy stock-keeper-backend \
    --image=asia.gcr.io/stock-keeper-review/stock-keeper-backend:latest \
     --platform managed \
    --region=asia-northeast1 \
    --allow-unauthenticated


gcloud run deploy stock-keeper-backend \
  --region asia-northeast1 \
  --allow-unauthenticated \
  --source .
```
