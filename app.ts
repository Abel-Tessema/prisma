import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.findMany({
    where: {
      // name: {equals: 'Bela Jash'},
      // name: {not: 'Bela Jash'},
      // name: {in: ['Bela Jash', 'Abel Tessema']},
      // name: {notIn: ['Bela Jash', 'Abel Tessema']},
      // age: {lt: 25}, // gt, gte, lte
      // name: 'Bela Jash',
      // email: {contains: '@gmail.com'},
      // email: {endsWith: '@gmail.com'},
      // email: {startsWith: 'a'},
      // AND: [
      //   // {email: {endsWith: '.com'}},
      //   // {name: {startsWith: 'b'}},
      //   {email: {startsWith: 'a'}},
      //   {email: {endsWith: '.com'}},
      // ]
      // OR: [
      //   {email: {startsWith: 'abel'}},
      //   {age: {gt: 10}},
      // ],
      // NOT: [],
      NOT: {email: {startsWith: 'abel'}},
    },
  });
  
  console.log(user);
}

main()
  .catch(e => console.error(e.message))
  .finally(async () => await prisma.$disconnect());