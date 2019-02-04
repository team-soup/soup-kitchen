## MVP
- CRUD for users
* user: name, email, password, id, roles
* email trigger to show when inventory low

- CRUD for inventory
* food item: name, id, count, foreign key(id    in categories)
* category (name, autoID)
- edit and delete category
* call to api to update count
- Message when 0 
* delete function

- Auth System(JWT)
- API deployment - Herokku
- Unit testing

## Stretch
- Routes/Middleware
- Pair programming w/ UI
- Knex migrations/seeding
- Restricted endpoints by role(admin/volunteer)
- integrated/ end to end testing
- continuous deployment
- dynamically loaded secrets
- alternate logins(fb, google, etc.)

* Pitch: A simple soup kitchen management software that allows inventory tracking and easy user sign up. 

* MVP: Users can login and view their inventory for their soup kitchen. User can create, read, update and delete items in their inventory. 

* Stretch Goal: Add a 'volunteer' sign up section where users can login and see kitchens in need of volunteers to help serve those in need.


## Work Order

- database
- testing
- endpoints