const jwt = require('jsonwebtoken');
require('dotenv').config();
// require('custom-env').env('staging')
const responseStatus = require('../config/responseStatuses');

module.exports = {
	protects: (req, res, next) => {
		const token = req.headers.authorization;
		if (token) {
			jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
				if (err) {
					//token is invalid
					next(responseStatus.forbiddenAccess);
				} else {
					//token is valid
					req.decodedToken = decodedToken;
					next();
				}
			});
		} else {
			next(responseStatus.badCredentials);
		}
	},

	emptyCheck: (req, res, next) => {
		const { body } = req;
		for (key in body) {
			if (body[key] === '') {
				next(responseStatus.badRequest);
			}
		}
		next()
	},

	generateToken: (user) => {
		const payload = {
			email: user.email
		};
		const secret = process.env.JWT_SECRET;
		const options = {
			expiresIn: '1h',
			jwtid: '12345'
		};
		return jwt.sign(payload, secret, options);
	}
};
