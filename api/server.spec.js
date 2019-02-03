const request = require('supertest');
const server = require('../api/server');

/* --------------------- Authentication -------------------- */
describe('Authentication', function() {
	it('should return 401 if not logged in /items', function(done) {
		request(server)
			.get('/api/items')
			.set('Accept', 'application/json')
			.expect(401, done);
	});

	it('should return 401 on a failed login', function(done) {
		request(server)
			.post('/api/staff/login')
			.send({ email: 'jdoe@abc.com', password: 'Ff!738FJ*' })
			.set('Accept', 'application/json')
			.expect(401, done);
	});

	it('should validate with a jwt on signup', function(done) {
		request(server)
			.post('/api/staff/register')
			.send({ name: 'Jane Doe', email: 'jdoe@abc.com', password: 'Ff!738FJ*' })
			.end(function(err, res) {
				let token = res.body.token;
				request(server)
					.get('/api/items')
					.set('Authorization', token)
					// checking its validated
					.expect(200)
					.end(function(err, res) {
						//making sure token is there
						expect(typeof token).toBe('string');
						//adding new staff
						request(server)
							.post('/api/staff')
							.send({ name: 'Jane Doe' })
							.end(function(err, res) {
								if (err) return done(err);
								done();
							});
					});
			});
	});

	it('should validate with a jwt on login', function(done) {
		request(server)
			.post('/api/staff/login')
			.send({ email: 'jdoe@abc.com', password: 'Ff!738FJ*' })
			.end(function(err, res) {
				let token = res.body.token;
				request(server)
					.get('/api/staff')
					.set('Authorization', token)
					// checking its validated
					.expect(200)
					.end(function(err, res) {
						//making sure token is there
						expect(typeof token).toBe('string');
						if (err) return done(err);
						done();
					});
			});
	});
});

/* --------------------- Item Endpoints -------------------- */

describe('/inventory CRUD', function() {
	it('should create an item', function(done) {
		request(server)
			.post('/api/items')
			.send({ name: 'corn', amount: 3, unit: 'lb(s)', categoryID: 1 })
			.set('Accept', 'application/json')
			.expect(201, done);
	});

	it('should return 400 error if missing name/amount/unit of item', function(done) {
		request(server)
			.post('/api/items')
			.send({ name: '', amount: null, unit: 'lbs', categoryID: 1 })
			.set('Accept', 'application/json')
			.expect(400, done);
	});

	it('should update an item in /items/:id', function(done) {
		request(server)
			.put('/api/items/1')
			.send({ name: 'yams', amount: 1, unit: 'lb', categoryID: 1 })
			.expect(200)
			.end(function(err, res) {
				expect(typeof res).toBe('object');
				if (err) return done(err);
				done();
			});
	});

	it('should return 400 error if missing  name/amount/unit in update', function(done) {
		request(server)
			.put('/api/items/1')
			.send({ name: '', amount: 5, unit: '', categoryID: null })
			.expect(400, done);
	});

	it('should return 200 if logged in /items', function(done) {
		request(server)
			.post('/api/staff/login')
			.send({ email: 'jdoe@abc.com', password: 'Ff!738FJ*' })
			.end(function(err, res) {
				let token = res.body.token;
				request(server)
					.get('/api/items')
					.set('Authorization', token)
					.expect(200, done);
			});
	});

	it('should return 200 if logged in /items/:id', function(done) {
		request(server)
			.post('/api/staff/login')
			.send({ email: 'jdoe@abc.com', password: 'Ff!738FJ*' })
			.end(function(err, res) {
				let token = res.body.token;
				request(server)
					.get('/api/items/1')
					.set('Authorization', token)
					.expect(200, done);
			});
	});

	it('should delete an item', function(done) {
		request(server)
			.del('/api/items/1')
			.expect(200, done);
	});

	it('should respond with 404 no item found to delete', function(done) {
		request(server)
			.del('/api/items/100')
			.expect(404, done);
	});
});

/* --------------------- Category Endpoints -------------------- */

describe('/categories CRUD', function() {
	it('should create a category', function(done) {
		request(server)
			.post('/api/categories')
			.send({ name: 'sauces' })
			.set('Accept', 'application/json')
			.expect(201, done);
	});

	it('should return 400 error if missing name of the category', function(done) {
		request(server)
			.post('/api/categories')
			.send({ name: '' })
			.set('Accept', 'application/json')
			.expect(400, done);
	});

	it('should update an item in /categories/:id', function(done) {
		request(server)
			.put('/api/categories/1')
			.send({ name: 'vegetables' })
			.expect(200)
			.end(function(err, res) {
				expect(typeof res).toBe('object');
				if (err) return done(err);
				done();
			});
	});

	it('should return 400 error if missing  name update', function(done) {
		request(server)
			.put('/api/categories/1')
			.send({ name: '' })
			.expect(400, done);
	});

	it('should return 200 if logged in /categories', function(done) {
		request(server)
			.post('/api/staff/login')
			.send({ email: 'jdoe@abc.com', password: 'Ff!738FJ*' })
			.end(function(err, res) {
				let token = res.body.token;
				request(server)
					.get('/api/categories')
					.set('Authorization', token)
					.expect(200, done);
			});
	});

	it('should return 200 if logged in /categories/:id', function(done) {
		request(server)
			.post('/api/staff/login')
			.send({ email: 'jdoe@abc.com', password: 'Ff!738FJ*' })
			.end(function(err, res) {
				let token = res.body.token;
				request(server)
					.get('/api/categories/1')
					.set('Authorization', token)
					.expect(200, done);
			});
	});

	it('should delete a category', function(done) {
		request(server)
			.del('/api/categories/1')
			.expect(200, done);
	});

	it('should respond with 404 no category found to delete', function(done) {
		request(server)
			.del('/api/categories/20')
			.expect(404, done);
	});
});
