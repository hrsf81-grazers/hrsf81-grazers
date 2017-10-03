const expect = require('chai').expect;
const server = require('../server/server.js');
const supertest = require('supertest');

const request = supertest.agent(server);

describe('Server Spec', function() {
  describe('GET /', function () {
    it('should return the content of index.html', function (done) {
      // just assume that if it contains an <input> tag its index.html
      request
        .get('/')
        .expect(200, /Event HUD/, done);
    });
  });
});
