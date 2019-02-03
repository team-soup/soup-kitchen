const helmet = require('helmet');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

module.exports = (server) => {
	server.use(helmet());
	server.use(express.json());
	server.use(morgan('short'));
	server.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
};
