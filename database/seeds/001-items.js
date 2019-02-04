
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {name: 'butter', amount: '1', unit: 'lb', categoryID:4},
        {name: 'milk', amount: '1', unit: 'gal', categoryID:4},
        {name: 'yogurt', amount: '64', unit: 'oz', categoryID:4},
        {name: 'eggs', amount: '3', unit: 'dozen', categoryID:5},
        {name: 'cheese', amount: '5', unit: 'lbs', categoryID:4},
        {name: 'carrots', amount: '2', unit: 'lbs', categoryID:1},
        {name: 'broccoli', amount: '3', unit: 'lbs', categoryID:1},
        {name: 'potatoes', amount: '10', unit: 'lbs', categoryID:1},
        {name: 'onions', amount: '1', unit: 'lb', categoryID:1},
        {name: 'garlic powder', amount: '3', unit: 'oz', categoryID:9},
        {name: 'beans', amount: '12', unit: 'cans', categoryID:2},
        {name: 'bread', amount: '3', unit: 'loaves', categoryID:8},
        {name: 'rice', amount: '20', unit: 'lbs', categoryID:8},
        {name: 'spaghetti', amount: '5', unit: 'lbs', categoryID:8},
        {name: 'bacon', amount: '3', unit: 'lbs', categoryID:5},
        {name: 'chicken', amount: '10', unit: 'lbs', categoryID:5},
        {name: 'ground beef', amount: '15', unit: 'lbs', categoryID:5},
        {name: 'bananas', amount: '2', unit: 'lbs', categoryID:2},
        {name: 'blueberries', amount: '12', unit: 'oz', categoryID:2},
        {name: 'grapes', amount: '3', unit: 'lbs', categoryID:2},
        {name: 'strawberries', amount: '1', unit: 'lb', categoryID:2},
        {name: 'salt', amount: '10', unit: 'oz', categoryID:9},
        {name: 'pepper', amount: '2', unit: 'oz', categoryID:9},
        {name: 'plates', amount: '50', unit: '', categoryID:7},
        {name: 'forks', amount: '50', unit: '', categoryID:3},
        {name: 'knives', amount: '50', unit: '', categoryID:3},
        {name: 'bowls', amount: '50', unit: '', categoryID:7},
        {name: 'spoons', amount: '50', unit: '', categoryID:3},
        {name: 'cups', amount: '50', unit: '', categoryID:7},
        {name: 'orange juice', amount: '64', unit: 'oz', categoryID:6},
        {name: 'apple juice', amount: '64', unit: 'oz', categoryID:6},

      ]);
    });
};
