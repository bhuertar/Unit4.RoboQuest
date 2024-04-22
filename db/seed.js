// Setting up connection to db with prisma
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// faker package
const { faker } = require('@faker-js/faker');

const createUser = async() => {
  const userOne = await prisma.user.create({
    data: {
      username: faker.internet.userName(),
      password: faker.internet.password()
    }
  })

  const userTwo = await prisma.user.create({
    data: {
      username: faker.internet.userName(),
      password: faker.internet.password()
    }
  })

  const userThree = await prisma.user.create({
    data: {
      username: faker.internet.userName(),
      password: faker.internet.password()
    }
  })
}

const createRobot = async() => {
  const robotOne = await prisma.robot.create({
    data: {
      name: faker.vehicle.manufacturer(),
      color: faker.color.human(),
      userId: 1
    }
  })

  const robotTwo = await prisma.robot.create({
    data: {
      name: faker.vehicle.manufacturer(),
      color: faker.color.human(),
      userId: 2
    }
  })

  const robotThree = await prisma.robot.create({
    data: {
      name: faker.vehicle.manufacturer(),
      color: faker.color.human(),
      userId: 3
    }
  })

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
