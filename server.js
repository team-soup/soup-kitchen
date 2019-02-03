const express = require('express');
const cors = require('cors');
//const port = 3333;

const server = express();
server.use(express.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let stock = [
  {
    id: 0,
    name: 'apples',
    quantity: 100,
    unit: 'oz',
    imageUrl: "https://i.imgur.com/pMfBRRt.jpg"
  },
  {
    id: 1,
    name: 'bananas',
    quantity: 200,
    unit: 'oz',
    imageUrl: "https://i.imgur.com/9ny4c0E.jpg"
  },
  {
    id: 2,
    name: 'potatoes',
    quantity: 10,
    unit: 'lb(s)',
    imageUrl: "https://i.imgur.com/47fHnED.jpg"
  },
  {
    id: 3,
    name: 'carrots',
    quantity: 13,
    unit: 'lb(s)',
    imageUrl: "https://i.imgur.com/RTZ0qFP.jpg"
  },
  {
    id: 4,
    name: 'eggs',
    quantity: 31,
    unit: 'dozen',
    imageUrl: "https://i.imgur.com/bQYFZjw.jpg"
  },
  {
    id: 5,
    name: 'broccoli',
    quantity: 30,
    unit: 'oz',
    imageUrl: "https://i.imgur.com/dRF2mfc.jpg"
  },
];

server.get('/items', (req, res) => {
  res.json(stock);
});
let itemId = 6;

server.post('/items', (req, res) => {
  const { name, quantity, unit } = req.body;
  const newItem = { name, quantity, unit, id: itemId };
  if (!name || !quantity || !unit) {
    return sendUserError(
      'Name/quantity/unit are all required fields.',
      res
    );
  }
  const findItemByName = item => {
    return item.name === name;
  };
  if (items.find(findItemByName)) {
    return sendUserError(
      `${name} already exists.`,
      res
    );
  }

  items.push(newItem);
  itemId++;
  res.json(items);
});

server.put('/items/:id', (req, res) => {
  const { id } = req.params;
  const { name, quantity, unit } = req.body;
  const findItemById = item => {
    return item.id == id;
  };
  const foundItem = items.find(findItemById);
  if (!foundItem) {
    return sendUserError('No item found by that ID', res);
  } else {
    if (name) foundItem.name = name;
    if (quantity) foundItem.quantity = quantity;
    if (unit) foundItem.unit = unit;
    res.json(items);
  }
});

server.delete('/items/:id', (req, res) => {
  const { id } = req.params;
  const foundItem = items.find(item => item.id == id);

  if (foundItem) {
    const itemRemoved = { ...foundItem };
    items = items.filter(item => item.id != id);
    res.status(200).json(items);
  } else {
    sendUserError('No item by that ID exists.', res);
  }
});

// server.listen(port, err => {
//   if (err) console.log(err);
//   console.log(`server is listening on port ${port}`);
// });

server.use(express.static(path.join(__dirname, 'client/build')));

server.get('/', (req, res) => {
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });

const port = process.env.PORT || 3333;
server.listen(port);
console.log(`Listening on ${port}`);