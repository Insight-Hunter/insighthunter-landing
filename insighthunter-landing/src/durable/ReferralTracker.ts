export class ReferralTracker {
  state: DurableObjectState;
  env: any;

  constructor(state: DurableObjectState, env: any) {
    this.state = state;
    this.env = env;
  }

  async fetch(request: Request) {
    const url = new URL(request.url);
    const action = url.pathname;

    if (action === '/track') {
      const clicks = (await this.state.storage.get<number>('clicks')) || 0;
      await this.state.storage.put('clicks', clicks + 1);
      return new Response(JSON.stringify({ clicks: clicks + 1 }), { status: 200 });
    }

    return new Response('Not found', { status: 404 });
  }
}
