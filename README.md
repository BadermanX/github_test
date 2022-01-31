# Running the Example
For demo purposes I have included the build folder in the repository, to regenerate it run:
`npm run build` *(optional)*

To run the server:
`npm start`

then go to:
`http://localhost:3000/`

# CRUD endpoints
Get Favorites
`GET: http://localhost:3000/crud/get_fav`

Add Favorites
`POST: http://localhost:3000/crud/add_fav`
`BODY: {"id": 1, "name": "test3"}`

Edit Favorites
`PATCH: http://localhost:3000/crud/edit_fav`
`BODY: {"id": 1, "name": "test4"}`

Delete Favorites
`DELETE: http://localhost:3000/crud/delete_fav`
`BODY: {"id": 1}`
