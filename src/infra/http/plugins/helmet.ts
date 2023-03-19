import { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';
import fastifyHelmet from '@fastify/helmet';

const plugin: FastifyPluginAsync = async (fastify, options): Promise<void> => {
  fastify.register(fastifyHelmet, {
    ...options,
  });
};

export const helmetPlugin = fp(plugin);
