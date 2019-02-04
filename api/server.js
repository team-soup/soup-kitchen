const express = require('express');
const configureMiddleware = require('../middleware/globalMiddleware');
const errorHandler = require('../middleware/errorMiddleware');
const server = express();
const categoriesRoutes = require('../Routes/categoriesRoutes');
const userRoutes = require('../Routes/userRoutes');
const itemsRoutes = require('../Routes/itemsRoutes');

configureMiddleware(server);

server.use('/api/categories', categoriesRoutes);
server.use('/api/staff', userRoutes);
server.use('/api/items', itemsRoutes);
server.use(errorHandler);

module.exports = server;
