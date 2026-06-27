# mon-API

> Provisioned via **Koffi IDP** — golden path `node`.

_Test de deployement_

## Endpoints
- `GET /` — service info
- `GET /health` — liveness probe

## Run locally
```bash
npm install
npm start          # http://localhost:3000
npm test
```

## Docker
```bash
docker build -t mon-API . && docker run -p 3000:3000 mon-API
```