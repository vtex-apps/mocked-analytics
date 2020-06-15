import { getRandomNumber } from '../utils/randomNumber'

export async function getLiveUsers(ctx: Context): Promise<LiveUsersProduct[]> {
  let liveUsers: LiveUsersProduct[] = []
  let productsQdt = getRandomNumber(1, 10)
  for (productsQdt; productsQdt > 0; productsQdt--) {
    liveUsers.push({
      slug: Math.floor(Math.random() * (2000 - 1000 + 1) + 1000).toString(),
      liveUsers: Math.floor(Math.random() * (10 - 1 + 1) + 1),
    })
  }
  ctx.status = 200
  ctx.body = liveUsers
  return liveUsers
}

export interface LiveUsersProduct {
  slug: string
  liveUsers: number
}