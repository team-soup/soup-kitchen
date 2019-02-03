const responseStatus = require('../config/responseStatuses');

function errorHandler(error, req, res, next) {
	switch (error) {
		case responseStatus.badRequest:
			res
				.status(responseStatus.badRequest)
				.json({ message: 'Input fields cannot be blank.', error });
			break;
		case responseStatus.notFound:
			res
				.status(responseStatus.notFound)
				.json({ message: 'This page does not exist.', error });
			break;
		case responseStatus.serverError:
			res.status(responseStatus.serverError).json({
				message: `The request could not be completed. Please try again.`,
				error
			});

			break;
		case responseStatus.badCredentials:
			res
				.status(responseStatus.badCredentials)
				.json({ message: 'Incorrect credentials. Please try again.', error });
		case responseStatus.forbiddenAccess:
			res.status(responseStatus.forbiddenAccess).json({
				message: 'You are not authorized to view this content.',
				error
			});
		default:
			console.log(error);
			res.json({ error: error });
	}
	next();
}

module.exports = errorHandler;
