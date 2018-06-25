
const Request = require('request');

describe('Server', () => {

  let server;
  beforeAll(() => {
    server = require('../server'); // start listening on our server
  });

  afterAll(() => {
    server.close();  // shut down the server when we're finished testing
  });

  describe('GET /', () => {
    const data = {}
    beforeAll( (done) => {
      // Make request to server
      Request.get('http://localhost:3000/', (error, response, body) => {
        data.status = response.statusCode;
        data.body = body;
        done(); // don't start tests until this done method is called
      });
    });

    it('returns a status 200', () => {
      expect( data.status ).toBe( 200 );
    });

    it('should return the correct body', () => {
      expect( data.body ).toBe('Hello World!')
    });


  }); // GET /

  describe('GET /flights JSON', () => {
    const data = {}
    beforeAll( (done) => {
      // Make request to server
      Request.get('http://localhost:3000/flights', (error, response, body) => {
        data.status = response.statusCode;
        data.body = body;
        data.data = JSON.parse( body );
        done(); // don't start tests until this done method is called
      });
    });

    it('returns a status 200', () => {
      expect( data.status ).toBe( 200 );
    });

    it('returns a valid JSON result with the correct length', () => {
      // console.log(data.body, results);
      expect( data.data.length ).toBe( 3 );
    });

    it('should return the correct list of flights', () => {
      expect( data.data[0].number ).toBe( '123' );
    });


  });


});
