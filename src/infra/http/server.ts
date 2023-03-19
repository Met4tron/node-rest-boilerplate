import { apiConfig } from '@infra/config/environment';
import { setupApplication } from './app';

async function bootstrap() {
  try {
    const app = await setupApplication();

    await app.listen({
      port: apiConfig.PORT,
    })
  } catch (error) {
    console.error(error)
  }
}

bootstrap()
