# Build

## Development

```
npm run build-dev
```

## Production

```
npm run build-dev
```

# Publish

## Development

```
aws s3 rm s3://magpi-web-dev/ --recursive
aws s3 cp ./dist/web s3://magpi-web-dev/ --recursive
```
