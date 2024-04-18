/* 
To run
In terminal: 
    (if not already) npm install node-rsa    
    node encrypting_algorithm.js

*/

// import JSEncrypt library
const NodeRSA = require('node-rsa');

// Generate a new RSA key pair
const key = new NodeRSA({ b: 2048 }); // 2048-bit key size

// Get public and private keys
const publicKey = key.exportKey('public');
const privateKey = key.exportKey('private');



// USER INPUT EXAMPLE
// Example encryption and decription -- user input 
const readline = require('readline');

// Create interface for reading input from the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function that encrypts user password
function encryptPassword(userPassword) {
    // Encrypt the password with the public key
    const encryptedMessage = key.encrypt(userPassword, 'base64');
    console.log('\nEncrypted Password:', encryptedMessage);
    return encryptedMessage;
}

// Function that decrypts user password
function decryptPassword(encryptedPassword) {
    // Decrypt the encrypted message with the private key
    const decryptedMessage = key.decrypt(encryptedPassword, 'utf8');
    console.log('\nDecrypted Password:', decryptedMessage);
}
  
// Prompts user to enter their password
rl.question('Please enter your password: ', (userPassword) => {
    // Call functions with the user's password
    const password = encryptPassword(userPassword);
    decryptPassword(password);
    // Close the readline interface
    rl.close();
});