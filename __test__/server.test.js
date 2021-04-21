'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const mockRequest = supertest(server);

describe('WEB SERVER:', () => {

  it('should respond with a 404 on a bad route', async () => {
    return mockRequest.get('/no-thing').then(data => {
      expect(data.status).toBe(404);
    });
  });

  it('should respond with a 404 on a bad method', async () => {
    return mockRequest.post('/person?name=chris').then(data => {
      expect(data.status).toBe(404);
    });
  });

  it('should respond with a 500 if no name in the query string', () => {
    return mockRequest.get('/person').then(data => {
      expect(data.status).toBe(500);
      expect(data.text).toBe('name query needed for this route');
    });
  });

  it('should respond with a 200 if the name is in the query string', () => {
    return mockRequest.get('/person?name=chris').then(data => {
      expect(data.status).toBe(200);
      expect(data.body.name).toBe('chris');
    });
  });
  
});
