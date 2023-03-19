import { Controller } from '@domain/infra/http/controller';
import { Request } from '@domain/infra/http/request';
import { FastifyReply, FastifyRequest } from 'fastify';

export const controllerAdapter = async (controller: Controller) => {
  return async (req: FastifyRequest, reply: FastifyReply) => {
    const request: Request = {
      body: req.body,
      params: req.params,
      headers: req.headers,
      query: req.query,
    };

    const httpResponse = await controller.handle(request);

    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      return reply.status(httpResponse.statusCode).send(httpResponse.body);
    } else {
      return reply.status(httpResponse.statusCode).send({
        error: httpResponse.body.message,
      });
    }
  };
};
