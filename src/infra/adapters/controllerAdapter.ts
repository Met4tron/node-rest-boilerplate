import { FastifyReply, FastifyRequest } from 'fastify';

export const controllerAdapter = async (controller: any) => {
  return async (req: FastifyRequest, reply: FastifyReply) => {
    const request = {
      body: req.body,
      params: req.params,
      headers: req.headers,
      query: req.query,
    };

    const httpResponse = await controller.handle(request);

    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      reply.status(httpResponse.statusCode).send(httpResponse.body);
    } else {
      reply.status(httpResponse.statusCode).send({
        error: httpResponse.body.message,
      });
    }
  };
};
