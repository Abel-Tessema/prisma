import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const user = await prisma.user.update({
  //   where: {email: 'belajash@gmail.com'},
  //   data: {email: 'belajash1@gmail.com'},
  //   // include, select
  // });
  // const users = await prisma.user.updateMany({
  //   where: {age: 22},
  //   data: {age: 23},
  //   // no include and update
  // });
  const user = await prisma.user.update({
    where: {email: 'belajash1@gmail.com'},
    // data: {age: {increment: 1}},
    data: {age: {decrement: 1}},
    // include, select
  });
  
  console.log(user);
  // console.log(users);
  // console.log(await prisma.user.findMany());
}

main()
  .catch(e => console.error(e.message))
  .finally(async () => await prisma.$disconnect());