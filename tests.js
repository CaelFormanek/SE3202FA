const request = require('supertest');
const app = require('./server'); 

describe('User Authentication Endpoints', () => {
  it('should authenticate a user successfully with valid credentials', async () => {
    const res = await request(app)
      .post('/login')
      .send({ username: 'user', password: 'pass' });
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Login successful');
  });

  it('should return an error for invalid credentials during login', async () => {
    const res = await request(app)
      .post('/login')
      .send({ username: 'invaliduser', password: 'invalidpass' });
    expect(res.statusCode).toEqual(401);
    expect(res.body.error).toEqual('Invalid username or password');
  });

  it('should create a new user account successfully', async () => {
    const res = await request(app)
      .post('/create-account')
      .send({ username: 'newuser', password: 'newpass' });
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Account created successfully');
  });

  it('should return an error for existing username during account creation', async () => {
    const res = await request(app)
      .post('/create-account')
      .send({ username: 'user', password: 'pass' });
    expect(res.statusCode).toEqual(400);
    expect(res.body.error).toEqual('Username already exists');
  });

  it('should update the user password successfully', async () => {
    const res = await request(app)
      .put('/update-password')
      .send({ username: 'user', password: 'pass', newPassword: 'newpass' });
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Password updated successfully');
  });

  it('should update the username successfully', async () => {
    const res = await request(app)
      .put('/update-username')
      .send({ username: 'user', password: 'newpass', newUsername: 'newusername' });
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Username updated successfully');
  });

  it('should delete a user account successfully', async () => {
    const res = await request(app)
      .delete('/delete-account')
      .send({ username: 'newusername', password: 'newpass' });
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Account deleted successfully');
  });

  it('should return an error for invalid credentials during account deletion', async () => {
    const res = await request(app)
      .delete('/delete-account')
      .send({ username: 'invaliduser', password: 'invalidpass' });
    expect(res.statusCode).toEqual(401);
    expect(res.body.error).toEqual('Invalid username or password');
  });
});
