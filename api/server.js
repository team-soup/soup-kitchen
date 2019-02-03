const express = require('express');
const configureMiddleware = require('../middleware/globalMiddleware');
const errorHandler = require('../middleware/errorMiddleware');
const server = express();
const categoriesRoutes = require('../Routes/categoriesRoutes');
const staffRoutes = require('../Routes/staffRoutes');
const itemsRoutes = require('../Routes/itemsRoutes');

configureMiddleware(server);

server.use('/api/categories', categoriesRoutes);
server.use('/api/staff', staffRoutes);
server.use('/api/items', itemsRoutes);
server.use(errorHandler);

module.exports = server;
