# Reproducing https://github.com/cloudflare/wrangler2/issues/2170

`npm run dev` executes the `turbo run dev --parallel` script.

workers mock-auth, worker0 and worker1 in ./packages run as `wrangler dev --local`

Four curl commands demonstrate the problem:

[curl-worker0-local](curl-worker0-local) Works.

[curl-worker0-remote](curl-worker0-remote) Hangs - request to mockAuth gets cancelled in the logs.

[curl-worker1-local](curl-worker1-local) Works.

[curl-worker1-remote](curl-worker1-remote) Works.