# soup-kitchen-backend

# Instructions

To get the API up and running run:

```console
    yarn reload
```

All API requests are made to: ***http://localhost:8000***

# MVP

## Register

a **POST** request to */api/staff/register* will create a new user and return an object including an authentication token:

{

    decodedToken: 'aKafj1Dg2kLD434So',
    id: 1,
    email: 'jdoe@abc.com',
    message: 'Registration successful.'

}

the **POST** request must include the following:

- *name*
- *email*
- *password*
- *role*


## Login

a **POST** request to */api/staff/login* will login the user and return an object with an authentication token:

{

    decodedToken: 'aKafj1Dg2kLD434So',
    id: 1,
    email: 'jdoe@abc.com',
    message: 'User logged in successfully.'

}

the **POST** request must include the following:

- *email*
- *password*


## Items

a **GET** request to */api/items* will return an object with all items in the inventory:

{

    decodedToken: 'aKafj1Dg2kLD434So',
    items:[
        {id: 1, name: 'strawberries', amount: 1, unit: 'lb', imageURL: '', categoryID: 1},
        {id: 2, name: 'blueberries', amount: 20, unit: 'oz', imageURL: '', categoryID: 1},
        {id: 3, name: 'carrots', amount: 1.5, unit: 'lbs', imageURL: '', categoryID: 2},
        {id: 4, name: 'broccoli', amount: 1, unit: 'lb', imageURL: '', categoryID: 2}
    ]

}    

***Note:*** the user must be logged in to view this page. They can have any role.

----------------------------------------------------
a **POST** request to */api/items* will return the itemID of the added item:

{

    itemID: 5

}

the **POST** request must include the following:

- *name*
- *amount* (**as an integer**)
- *categoryID* (**as an integer**)
- ( *unit* && *imageURL* are optional )



----------------------------------------------------
a **GET** request to */api/items/:id* will return an object including the item with the associated ID:

{

    decodedToken: 'aKafj1Dg2kLD434So',
    item:{
        id: 1,
        name: 'strawberries',
        amount: 1, 
        unit: 'lb',
        imageURL: '',
        categoryID: 1
    }

}    

***Note:*** the user must be logged in to view this page. They can have any role.

----------------------------------------------------
a **DELETE** request to */api/items/:id* will return an object with a count of 1 if successful:

{

    deletedRecords: 1

}

----------------------------------------------------
a **PUT** request to */api/items/:id* will return an object with a count of 1 if successful:

{

    updatedRecords: 1

}

the **PUT** request must include the following:

- *name*
- *amount* (**as an integer**)
- *categoryID* (**as an integer**)
- ( *unit* && *imageURL* are optional )



# Stretch

## Categories

a **GET** request to */api/categories* will return a list of all the categories:

}

    decodedToken: 'aKafj1Dg2kLD434So',
    categories: [
        {
            id: 1,
            name: 'fruits',
            inventory: [
                {id: 1, name: 'strawberries', amount: 1, unit: 'lb', imageURL: '', categoryID: 1},
                {id: 2, name: 'blueberries', amount: 20, unit: 'oz', imageURL: '', categoryID: 1},
            ]
        }
        {
            id: 2,
            name: 'vegetables',
            items: [
                {id: 3, name: 'carrots', amount: 1.5, unit: 'lbs', imageURL: '', categoryID: 2},
                {id: 4, name: 'broccoli', amount: 1, unit: 'lb', imageURL: '', categoryID: 2}
            ]
        }
    ]

}

***Note:*** the user must be logged in to view this page. They can have any role.

----------------------------------------------------
a **POST** request to */api/categories* will return the categoryID of the new category:

{

    categoryID: 5

}

the **POST** request must include the following:
- *name*

------------------------------------------------------
a **GET** request to */api/categories/:id* will return an object with the category associated the ID:
{

    decodedToken: 'aKafj1Dg2kLD434So',
    category: {
        id: 2,
        name: 'vegetables',
        items: [
            {id: 3, name: 'carrots', amount: 1.5, unit: 'lbs', imageURL: '', categoryID: 2},
            {id: 4, name: 'broccoli', amount: 1, unit: 'lb', imageURL: '', categoryID: 2}
        ]
    }

}

***Note:*** the user must be logged in to view this page. They can have any role.

------------------------------------------------------
a **PUT** request to */api/categories/:id* will return an object with a count of 1 if successful:

{

    updatedRecords: 1

}

the **PUT** request must include the following:
- *name*

------------------------------------------------------
a **DELETE** request to */api/categories/:id* will return an object with a count of 1 if successful:

{

    deletedRecords: 1

}

***Note***: This will delete the category and **ALL** items associated with the category!

-------------------------------------------------------
## Staff

a **GET** request to */api/staff* will return a list of all staff members:
{

    decodedToken: 'aKafj1Dg2kLD434So',
    staff: [
        {
            id: 1,
            name: 'John Smith ',
            email: 'jsmith@abc.com',
            role: 'admin'
        },
        {
            id: 2,
            name: 'Jane Doe',
            email: 'jdoe@abc.com',
            role: 'staff'
        },
        {
            id: 3,
            name: 'Jill Doe',
            email: 'jdoe@abc.com',
            role: 'volunteer'
        }
    ]

} 

***Note:*** the user must be logged in and be an **admin** or **staff** to view this page.

----------------------------------------------------
a **GET** request to */api/staff/:id* will return an object with the staff member associated the ID:
{

    decodedToken: 'aKafj1Dg2kLD434So',
    staff: {
        id: 1,
        name: 'John Smith ',
        email: 'jsmith@abc.com'
    }

}


***Note:*** the user must be logged in and be an **admin** or **staff** to view this page.

------------------------------------------------------
a **PUT** request to */api/staff/:id* will return an object with a count of 1 if successful:

{

    updatedRecords: 1

}

the **PUT** request must include the following:
- *name*
- *email*
- *role*

------------------------------------------------------
a **DELETE** request to */api/staff/:id* will return an object with a count of 1 if successful:

{

    deletedRecords: 1

}

***Note:*** All **errors** will come back as an object like so: 

- ex. Missing input on login

{

    message: "Input cannot be blank.",
    error: 400

}
