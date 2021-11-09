import { HttpPostClient, HttpPostParams } from 'data/protocols/http/http-post-client'

// Mock da classe HttpClient
export class HttpPostClientSpy implements HttpPostClient {
  url?: string

  async post (params: HttpPostParams): Promise<void> {
    this.url = params.url
    return Promise.resolve()
  }
}
