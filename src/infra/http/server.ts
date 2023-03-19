import 'dotenv/config';
import { apiConfig } from '@infra/config/environment';
import { connect } from '@infra/repositories/prismaRepository';
import { setupApplication } from './app';

async function bootstrap() {
  try {
    await connect()
    const app = await setupApplication();

    await app.listen({
      port: apiConfig.PORT,
    })
  } catch (error) {
    console.error(error)
  }
}

bootstrap()
