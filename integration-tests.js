
//https://www.toptal.com/nodejs/nodejs-guide-integration-tests 

//Example integration test:

const express = require('express') 
const request = require('supertest-as-promised'); 

const app = express(); 
request(app).get("/recipes").then(res => assert()); 