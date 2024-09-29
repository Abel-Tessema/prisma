import {PrismaClient} from "@prisma/client";

// const prisma = new PrismaClient({log: ['query']});
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Abel Tessema",
  //     age: 22,
  //     email: "abelxotessema@gmail.com",
  //     userPreference: {create: {emailUpdates: true}}
  //   },
  //   // include: {userPreference: true},
  //   select: {name: true, userPreference: {select: {emailUpdates: true}}}
  // });
  
  const users = await prisma.user.createMany({
    data: [
      {
        name: "Abel Tessema",
        age: 22,
        email: "abelxotessema@gmail.com",
        // userPreference: {create: {emailUpdates: true}} // You can't do nested entries for performance reasons with createMany()
      },
      {
        name: "Bela Jash",
        age: 22,
        email: "belajash@gmail.com",
      },
    ],
    skipDuplicates: true,
  });
  
  // console.log(user);
  console.log(users); // users only returns count, most likely for performance reasons.
}

main()
  .catch(e => console.error(e.message))
  .finally(async () => await prisma.$disconnect());