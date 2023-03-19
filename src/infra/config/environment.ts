import * as Env from 'env-var';

export const apiConfig = {
  PORT: Env.get('PORT').default(3000).asPortNumber()
}