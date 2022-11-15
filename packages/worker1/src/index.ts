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
    
    if (response.status !== 200) {
        return response;
    }

    // const json = await request.json()
    return Response.json({body: "test"})
  },
};
