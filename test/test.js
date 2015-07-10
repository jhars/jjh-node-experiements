var request = require('request')
  , expect = require('chai').expect



describe('local:300 should hav success 200', function() {
 it('status 200', function (done) {
     request('http://localhost:3000/users', function(err, res, body) {
       expect(res.statusCode).to.equal(200);
       // expect(res.statusCode).to.equal(300);
       // console.log(err, res, body);
       done();
    })
  })
});

describe('check for jhars string', function() {
 it('status 200', function (done) {
     request('http://localhost:3000/users/1', function(err, res, body) {
       // expect(res.statusCode).to.equal(200);
       expect(body).to.have.string('jhars');
       // expect(res.statusCode).to.equal(300);
       console.log(body);
       done();
    })
  })
});



//--------------------POST TESTS-------------------------//

describe('post user to JSON', function() {
  it('test to see if word dummy is added', function(done) {
   request.post('http://localhost:3000/users', {form:{ id:"33", username: 'HunterS.Thompson', firstname: "dummy", lastname:" dun person", age: 34 }}, function(err, res, body) {
        expect(body).to.have.string("HunterS.Thompson");
        //expect(res.statusCode).to.equal(200);
        // console.log();//fail
        // expect(body).to.have.string('word');// 
        // expect().to.equal(300);
      done();
       
    });
  });
});


describe('POST request to /users', function(){
  it('should allow us to post to the api', function(done){
    request.post('http://localhost:3000/users', function(err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});


//--------------------PUT TESTS-------------------------//


describe('PUT request to 3000/users', function(){
  it('should allow us to post to the api', function(done){
    request.put('http://localhost:3000/users/1', {form:{ id:"1", username: 'jhars', firstname: "Hunter", lastname:"S. Thomspon", age: 34 }}, function(err, res, body) {
      // expect(res.statusCode).to.equal(200);
      expect(body).to.have.string("Hunter");
      done();
    });
  });
});


// describe('test of first and last', function() {
//   it('tests to see if Hunter S. Thompson was put into JHAR or success-200', function(done) {
//    request.put('http://localhost:3000/users', {form:{ id:"1", username: 'jhars', firstname: "Hunter", lastname:"S. Thomspon", age: 34 }}, function(err, res, body) {
//         expect(body).to.have.string("Hunter");
//         //expect(res.statusCode).to.equal(200);
//         // console.log();//fail
//         // expect(body).to.have.string('word');// 
//         // expect().to.equal(300);
//       done();
       
//     });
//   });
// });