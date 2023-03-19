import fastify, { FastifyInstance } from 'fastify';
import { corsPlugin, helmetPlugin } from './plugins';

const app = fastify({
  logger: true,
});

export const setupApplication = async (): Promise<FastifyInstance> => {
  app.register(corsPlugin);
  app.register(helmetPlugin);

  await app.ready()
  return app;
};
