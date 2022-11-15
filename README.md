# Reproducing https://github.com/cloudflare/wrangler2/issues/2170

`npm run dev` executes the `turbo run dev --parallel` script.

This starts multiple wrangler processes in parallel (workers mock-auth, worker0 and worker1 in ./packages)

Four curl commands demonstrate the problem:
[curl-worker0-local](curl-worker0-local)
curl-worker0-remote - hangs (request to auth gets cancelled)
curl-worker1-local - works
curl-worker1-remote - works