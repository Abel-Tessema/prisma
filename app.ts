import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const user = await prisma.user.delete({
  //   where: {email: 'abelxotessema@gmail.com'}
  // });
  
  // const users = await prisma.user.deleteMany({
  //   where: {age: {gt: 20}}
  // });
  
  // const users = await prisma.user.deleteMany();
}

main()
  .catch(e => console.error(e.message))
  .finally(async () => await prisma.$disconnect());