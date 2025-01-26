import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUsersService = async () => {
  return await prisma.user.findMany();
};

export const createUserService = async (data: {
  name: string;
  email: string;
}) => {
  return await prisma.user.create({ data });
};
