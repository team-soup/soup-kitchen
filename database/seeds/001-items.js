// import images from '../helpers/images'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {name: 'butter', amount: '1', unit: 'lb', imageURL: 'images.butter', categoryID:4},
        {name: 'milk', amount: '1', unit: 'gal', imageURL: 'images.milk', categoryID:4},
        {name: 'yogurt', amount: '64', unit: 'oz', imageURL: 'images.yogurt', categoryID:4},
        {name: 'eggs', amount: '3', unit: 'dozen', imageURL: 'images.eggs', categoryID:5},
        {name: 'cheese', amount: '5', unit: 'lbs', imageURL: 'images.cheese', categoryID:4},
        {name: 'carrots', amount: '2', unit: 'lbs', imageURL: 'images.carrots', categoryID:1},
        {name: 'broccoli', amount: '3', unit: 'lbs', imageURL: 'images.broccoli', categoryID:1},
        {name: 'potatoes', amount: '10', unit: 'lbs', imageURL: 'images.potatoes', categoryID:1},
        {name: 'garlic powder', amount: '3', unit: 'oz', imageURL: 'images.dishIcon', categoryID:9},
        {name: 'beans', amount: '12', unit: 'cans', imageURL: 'images.beans', categoryID:2},
        {name: 'bread', amount: '3', unit: 'loaves', imageURL: 'images.bread', categoryID:8},
        {name: 'rice', amount: '20', unit: 'lbs', imageURL: 'images.rice', categoryID:8},
        {name: 'spaghetti', amount: '5', unit: 'lbs', imageURL: 'images.dishIcon', categoryID:8},
        {name: 'bacon', amount: '3', unit: 'lbs', imageURL: 'images.bacon', categoryID:5},
        {name: 'chicken', amount: '10', unit: 'lbs', imageURL: 'images.dishIcon', categoryID:5},
        {name: 'ground beef', amount: '15', unit: 'lbs', imageURL: 'images.dishIcon', categoryID:5},
        {name: 'bananas', amount: '2', unit: 'lbs', imageURL: 'images.bananas', categoryID:2},
        {name: 'blueberries', amount: '12', unit: 'oz', imageURL: 'images.blueberries', categoryID:2},
        {name: 'grapes', amount: '3', unit: 'lbs', imageURL: 'images.grapes', categoryID:2},
        {name: 'strawberries', amount: '1', unit: 'lb', imageURL: 'images.strawberries', categoryID:2},
        {name: 'salt', amount: '10', unit: 'oz', imageURL: 'images.dishIcon', categoryID:9},
        {name: 'pepper', amount: '2', unit: 'oz', imageURL: 'images.dishIcon', categoryID:9},
        {name: 'plates', amount: '50', unit: '', imageURL: 'images.dishIcon', categoryID:7},
        {name: 'forks', amount: '50', unit: '', imageURL: 'images.dishIcon', categoryID:3},
        {name: 'knives', amount: '50', unit: '', imageURL: 'images.dishIcon', categoryID:3},
        {name: 'bowls', amount: '50', unit: '', imageURL: 'images.dishIcon', categoryID:7},
        {name: 'spoons', amount: '50', unit: '', imageURL: 'images.dishIcon', categoryID:3},
        {name: 'cups', amount: '50', unit: '', imageURL: 'images.dishIcon', categoryID:7},
        {name: 'orange juice', amount: '64', unit: 'oz', imageURL: 'images.dishIcon', categoryID:6},
        {name: 'apple juice', amount: '64', unit: 'oz', imageURL: 'images.dishIcon', categoryID:6},
      ]);
    });
};
