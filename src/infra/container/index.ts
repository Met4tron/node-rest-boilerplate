import * as Awilix from 'awilix';
import { prismaService } from '@infra/repositories/prismaRepository';

const container = Awilix.createContainer({
  injectionMode: Awilix.InjectionMode.PROXY,
});

container.register({
  // Providers
  // Repositories
  prismaRepository: Awilix.asValue(prismaService),
});

export default container;
