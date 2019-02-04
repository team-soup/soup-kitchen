
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {name: 'vegetables'},
        {name: 'fruit'},
        {name: 'utensils'},
        {name: 'dairy'},
        {name: 'proteins'},
        {name: 'beverages'},
        {name: 'dishware'},
        {name: 'grains'},
        {name: 'spices'},
      ]);
    });
};
