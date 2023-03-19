import * as Env from 'env-var';

export const apiConfig = {
  PORT: Env.get('PORT').default(3000).asPortNumber()
}

export const dbConfig = {
  URL: Env.get('DATABASE_URL').required().asString(),
};