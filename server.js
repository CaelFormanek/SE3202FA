const express = require('express');
const cors = require('cors') 

const app = express();
const port = 3000; 

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

let corsOptions = { 
  origin : ['http://localhost:3000', 'http://localhost:3001'] 
} 

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dev:dev@cluster0.f8wrnuy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect();
const users = client.db('users').collection('users'); 

// Login endpoint
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  const user = await users.findOne({
    'username': username,
    'password': password
  })
  
  if (user) {
    // If user is found, return a success message or token
    res.status(200).json({ message: 'Login successful' });
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