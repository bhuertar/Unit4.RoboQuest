// Setting up connection to db with prisma
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// faker package
const { faker } = require('@faker-js/faker');

const createUser = async() => {
  for(let i = 0; i < 3; i++) {
    await prisma.user.create({
      data: {
        username: faker.internet.userName(),
        password: faker.internet.password()
      }
    })
  }
}

const createRobot = async() => {
  for(let i = 0; i < 9; i++) {
    await prisma.robot.create({
      data: {
        name: faker.vehicle.manufacturer(),
        color: faker.color.human(),
        userId: (i % 3) + 1
      }
    })
  }

}


const main = async () => {
  await createUser();
  await createRobot();

};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
