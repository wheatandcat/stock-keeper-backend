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
