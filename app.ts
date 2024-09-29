import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const preference = await prisma.userPreference.create({
  //   data: {emailUpdates: true}
  // });
  
  // const user = await prisma.user.update({
  //   where: {email: 'belajash1@gmail.com'},
  //   data: {
  //     // userPreference: {connect: {id: 2}}
  //     userPreference: {disconnect: true},
  //   }
  // });
  
  // const user = await prisma.user.create({
  //   data: {
  //     // name, age, email
  //     userPreference: {connect: {id: 1}},
  //   }
  // });
  
  // console.log(preference);
  // console.log(user);
}

main()
  .catch(e => console.error(e.message))
  .finally(async () => await prisma.$disconnect());