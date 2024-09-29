import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.findMany({
    where: {
      // userPreference: {
      //   // emailUpdates: true,
      //   emailUpdates: false,
      // }
      writtenPosts: {
        every: {title: 'Test'} // none, some
      }
    },
  });
  const post = await prisma.post.findMany({
    where: {
      author: { // isNot
        is: {age: 22}
      }
    }
  });
  
  // console.log(user);
  console.log(post);
}

main()
  .catch(e => console.error(e.message))
  .finally(async () => await prisma.$disconnect());