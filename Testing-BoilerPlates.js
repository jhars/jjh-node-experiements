var request = require('request')
var expect = require ('chai').expect

// DESCRIBE WHAT WE ARE TESTING
  // SAY WHAT BEHAVIOR 'IT' AUGHT TO HAVE
    // SEND THE REQUEST
      // USE CHAI-EXPECT TO EXPECT THE STATUS RESULT
      // CHECK FALSE VALUE TO SEE IF WE CAN MAKE TEST FAIL
      // CALL DONE();

describe('Google.com', function() {
  it('should have a HTTP of 200 - success', function(done) {
    request('https://google.com/', function(err, res, body) {
      expect(res.statusCode).to.equal(200)
      // expect(res.statusCode).to.equal(300)
      done();
    })
  })
});

describe('homepage of google', function(done){
	it("should have a title 'Google'", function(done){
		request('https://google.com/', function(err, res, body) {
			var $ = cheerio.load(body)
			var title = $('title').text()
			//body = {"users": [{name: "blb", age: "12"}]}
			//expect($('title').text()).to.equal("Google"))
			expect(title).to.equal("Broogle");
			done();
		})
	})
})