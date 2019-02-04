const express = require('express');
const router = express.Router();
const responseStatus = require('../config/responseStatuses');
const { protects, emptyCheck } = require('../middleware/authMiddleware');
const db = require('../database/helpers/categoriesHelper');

//Create
//create a new category
router.post('/', emptyCheck, (req, res, next) => {
	const { body } = req;
	db.addCategory(body)
		.then((id) => {
			return res.status(responseStatus.created).json({ categoryID: id });
		})
		.catch((err) => {
			console.log(err);
			next(responseStatus.serverError);
		});
});

//Read
//get all categories
router.get('/', protects, (req, res, next) => {
	db.getCategories()
		.then((categories) => {
			return res
				.status(responseStatus.successful)
				.json({ categories, decodedToken: req.decodedToken });
		})
		.catch((err) => {
			console.log(err);
			next(responseStatus.serverError);
		});
});

//Read
//get all items for a category
router.get('/:id', protects, (req, res, next) => {
	const { id } = req.params;
	db.getCategories(id)
		.then((category) => {
			res
				.status(responseStatus.successful)
				.json({ category, decodedToken: req.decodedToken });
		})
		.catch((err) => {
			if (TypeError) {
				next(responseStatus.notFound);
			} else {
				next(responseStatus.serverError);
			}
		});
});

//Update
//update a specific category
router.put('/:id', emptyCheck, (req, res, next) => {
	const { id } = req.params;
	const { body } = req;
	db.updateCategory(id, body)
		.then((count) => {
			if (count === 1) {
				res.status(responseStatus.successful).json({ updatedRecords: count });
			} else {
				next(responseStatus.notFound);
			}
		})
		.catch((err) => {
			console.log(err);
			next(responseStatus.serverError);
		});
});

//Delete
//delete a specific category
router.delete('/:id', (req, res, next) => {
	const { id } = req.params;
	db.deleteCategory(id)
		.then((count) => {
			if (count === 1) {
				res.status(responseStatus.successful).json({ deletedRecords: count });
			} else {
				next(responseStatus.notFound);
			}
		})
		.catch((err) => {
			console.log(err);
			next(responseStatus.serverError);
		});
});

module.exports = router;
