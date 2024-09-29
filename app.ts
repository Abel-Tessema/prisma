import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const user = await prisma.user.findUnique({
    // where: {email: 'belajash@gmail.com'}
    // We can optionally include or select specific fields here.
    // where: {name_age: {name: 'Bela Jash', age: 22}} // name_age is a composite unique key.
    // where: {name_age: {name: 'Bela Jash', age: 23}}
    // where: {name: 'Bela Jash'} // Not allowed because name isn't unique.
  // });
  
  // const user = await prisma.user.findFirst({
  //   where: {name: 'Bela Jash'}
  // });
  
  const user = await prisma.user.findMany({
    where: {name: 'Bela Jash'},
    // distinct: 'name'
    distinct: ['name', 'age'],
    take: 2,
    skip: 1,
    // orderBy: {age: 'asc'},
    orderBy: [{age: 'asc'}, {name: 'desc'}],
  });
  
  console.log(user);
}

main()
  .catch(e => console.error(e.message))
  .finally(async () => await prisma.$disconnect());