const faker = require('faker')

const createFakeStaff = () => ({
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  email: faker.internet.email(),
  password: faker.internet.password()
})


exports.seed = async function(knex, Promise) {
  const fakeStaff = [];
  const desiredFakeStaff = 20;
  for(let i = 0; i < desiredFakeStaff; i++){
    fakeStaff.push(createFakeStaff())
  }
  await knex("staff")
  .insert(fakeStaff)
 
};
