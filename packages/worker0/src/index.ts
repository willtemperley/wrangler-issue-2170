/**
 */
export interface Env {
  mockAuth: Fetcher;
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {

    const response = await env.mockAuth.fetch(request.clone());
    // const authJson = await response.json()

    if (response.status !== 200) {
        return response;
    }

    //Issue only appears if request body is read
    const json = await request.json()
    return Response.json({body: json})
  },
};
