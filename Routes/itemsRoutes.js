const express = require('express');
const router = express.Router();
const responseStatus = require('../config/responseStatuses');
const { protects, emptyCheck } = require('../middleware/authMiddleware');
const db = require('../database/helpers/itemsHelper');

const url = require('url');

//browser will look like /categories/1
// can do on front end
// let url = window.location.href
// let id = url.substring(url.lastIndexOf('/') + 1);
// then pass in object to axios like { ... categoryID: id}

//Create
//create a new item for a category
router.post('/', emptyCheck, (req, res, next) => {
	const { body } = req;

	db.addItem(body)
		.then((id) => {
			return res.status(responseStatus.created).json({ itemID: id });
		})
		.catch((err) => {
			console.log(err);
			next(responseStatus.serverError);
		});
});
//Read
//get all items
router.get('/', protects, (req, res, next) => {
	db.getItems()
		.then((items) => {
			return res
				.status(responseStatus.successful)
				.json({ items, decodedToken: req.decodedToken });
		})
		.catch((err) => {
			console.log(err);
			next(responseStatus.serverError);
		});
});

//Read
//get a specific item
router.get('/:id', protects, (req, res, next) => {
	const { id } = req.params;
	db.getItems(id)
		.then((item) => {
			res
				.status(responseStatus.successful)
				.json({ item, decodedToken: req.decodedToken });
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
//update an items string name or amount
router.put('/:id', emptyCheck, (req, res, next) => {
	const { id } = req.params;
	const { body } = req;
	db.updateItem(id, body)
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
//delete an item
router.delete('/:id', (req, res, next) => {
	const { id } = req.params;
	db.deleteItem(id)
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
