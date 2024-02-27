User Authentication API
This is a simple Node.js Express application providing endpoints for user 
authentication operations.

Endpoints:
POST /login: Logs in a user with provided username and password. Returns 
a success message upon successful login or an error message for invalid 
credentials.

POST /create-account: Creates a new user account with a unique username 
and password. Returns a success message upon successful account creation
or an error message if the username already exists.

POST /logout: Logs out the user. (Placeholder endpoint, no actual logout 
logic implemented)

DELETE /delete-account: Deletes a user account based on provided username
and password. Returns a success message upon successful deletion or an error message for invalid credentials.

PUT /update-password: Updates the password of a user. Returns a success
message upon successful password update or an error message for invalid
credentials.

PUT /update-username: Updates the username of a user. Returns a success
message upon successful username update or an error message if the new
username already exists or for invalid credentials.

Usage:
Clone the repository.
Install dependencies using npm install.
Run the server using node server.js.
Access the endpoints using HTTP requests


