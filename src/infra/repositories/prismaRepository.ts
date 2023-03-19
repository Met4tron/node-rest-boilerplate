import { PrismaClient } from '@prisma/client';

export const prismaService: PrismaClient = new PrismaClient({
  log: [],
});

export const connect = () => prismaService.$connect();

process.on('SIGTERM', async () => {
  await prismaService.$disconnect();
});
