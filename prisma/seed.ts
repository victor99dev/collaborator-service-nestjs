import { PrismaClient } from '@prisma/client';
import { Departments, Groups } from './data';

const prisma = new PrismaClient();

async function main() {
  await prisma.departments.createMany({
    data: Departments,
  });

  await prisma.groups.createMany({
    data: Groups,
  });

  await prisma.collaborators.create({
    data: {
      name: 'Bruce Wayne',
      contact: {
        create: {
          email: 'brce@gmail.com',
          telephone: '+0000000000000',
          social_network: '@bruceTech',
        },
      },
      age: '40',
      department_id: 'd8b18986-156c-44f9-b10f-a195b6a8ae43',
      group_id: '73add944-22bb-46a8-8b45-010aa9ce634e',
      address: {
        create: {
          street_address: 'street_address',
          number: '1010',
          city: 'city',
          state: 'state',
          country: 'contry',
        },
      },
      document: {
        create: {
          document_type: 'cpf',
          date_of_issue: new Date(),
          number: '00000000000',
        },
      },
      login: 'bruce.wayne',
      password: '2156r3r23',
      description: 'description',
      active: true,
      created_at: new Date(),
      updated_at: new Date(),
    },
  });
}

main()
  .catch((e) => {
    console.error(e), process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
