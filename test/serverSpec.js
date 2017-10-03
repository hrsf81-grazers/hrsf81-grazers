const expect = require('chai').expect;
const server = require('../server/server.js');
const supertest = require('supertest');

const request = supertest.agent(server);

describe('Server Spec', function() {
  describe('GET /', function () {
    it('should return the content of index.html', function (done) {
      // TODO: change once server is more fully fleshed out
      request
        .get('/')
        .expect(200, /Grazer/, done);
    });
  });
});
