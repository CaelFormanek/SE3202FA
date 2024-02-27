const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; 

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Dummy user data 
const users = [
  { id: 1, username: 'user', password: 'pass' },
  { id: 2, username: 'user2', password: 'password2' },
];

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  // Dummy authentication
  const user = users.find(u => u.username === username && u.password === password);
  
  if (user) {
    // If user is found, return a success message or token
    res.json({ message: 'Login successful' });
  } else {
    // If user is not found, return an error message
    res.status(401).json({ error: 'Invalid username or password' });
  }
});


// Create account endpoint
app.post('/create-account', (req, res) => {
  const { username, password } = req.body;

  // Check if username already exists
  const existingUser = users.find(u => u.username === username);
  if (existingUser) {
    res.status(400).json({ error: 'Username already exists' });
    return;
  }

  // Generate a unique ID for the new user
  const id = users.length + 1;

  // Create the new user object
  const newUser = { id, username, password };

  // Add the new user to the users array
  users.push(newUser);

  res.json({ message: 'Account created successfully' });
});

// Logout endpoint
app.post('/logout', (req, res) => {
  // Perform any necessary logout logic here
  res.json({ message: 'Logout successful' });
});

// Delete account endpoint
app.delete('/delete-account', (req, res) => {
  const { username, password } = req.body;

  // Find the user to delete
  const userIndex = users.findIndex(u => u.username === username && u.password === password);

  if (userIndex !== -1) {
    // Remove the user from the users array
    users.splice(userIndex, 1);
    res.json({ message: 'Account deleted successfully' });
  } else {
    res.status(401).json({ error: 'Invalid username or password' });
  }
});
// Update password endpoint
app.put('/update-password', (req, res) => {
  const { username, password, newPassword } = req.body;

  // Find the user to update
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // Update the user's password
    user.password = newPassword;
    res.json({ message: 'Password updated successfully' });
  } else {
    res.status(401).json({ error: 'Invalid username or password' });
  }
});

// Update username endpoint
app.put('/update-username', (req, res) => {
  const { username, password, newUsername } = req.body;

  // Find the user to update
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // Check if new username already exists
    const existingUser = users.find(u => u.username === newUsername);
    if (existingUser) {
      res.status(400).json({ error: 'Username already exists' });
      return;
    }

    // Update the user's username
    user.username = newUsername;
    res.json({ message: 'Username updated successfully' });
  } else {
    res.status(401).json({ error: 'Invalid username or password' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});