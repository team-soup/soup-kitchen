const faker = require('faker')

const createFakeStaff = () => ({
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  email: faker.internet.email(),
  password: faker.internet.password(),
  role: 'staff'
})
const createFakeVolunteers = () => ({
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  email: faker.internet.email(),
  password: faker.internet.password(),
  role: 'volunteer'
})
const createFakeAdmin = () => ({
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  email: faker.internet.email(),
  password: faker.internet.password(),
  role: 'admin'
})


exports.seed = async function(knex, Promise) {
  const fakeUsers = []
  const desiredStaff = 10;
  const desiredAdmins = 5;
  const desiredVolunteers = 15;

  for(let i = 0; i < desiredAdmins; i++){
    fakeUsers.push(createFakeAdmin())
  }
  for(let i = 0; i < desiredStaff; i++){
    fakeUsers.push(createFakeStaff())
  }
  for(let i = 0; i < desiredVolunteers; i++){
    fakeUsers.push(createFakeVolunteers())
  }
  await knex("users")
  .insert(fakeUsers)
 
};
