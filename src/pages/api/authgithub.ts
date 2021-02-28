import { NowRequest, NowResponse } from '@vercel/node'

export default (request: NowRequest, response: NowResponse) => {
  const { user } = request.body
  console.log(user)

  return response.json(user)
}
