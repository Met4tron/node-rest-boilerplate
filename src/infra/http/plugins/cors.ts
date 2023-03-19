import { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';
import fastifyCors from '@fastify/cors';

const plugin: FastifyPluginAsync = async (fastify, options): Promise<void> => {
  fastify.register(fastifyCors, {
    ...options,
  });
};

export const corsPlugin = fp(plugin);
