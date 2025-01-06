const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const database = new PrismaClient();

async function main() {
  try {
    const hashedPassword = await bcrypt.hash('yourPassword', 10); // Replace 'yourPassword' with the desired password

    await database.user.createMany({
      data: {
        email: 'admin@christsvictoriousarmy.org',
        password: hashedPassword,
      },
    });

    console.log('Success');
  } catch (error) {
    console.log('Error seeding the database categories', error);
  } finally {
    await database.$disconnect();
  }
}

main();
