/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  it('Throws an error so it fails', function() {
    // throw new Error('Delete me!');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num % 2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
    
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(isTrue == false) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var should = chai.should;
 
  it("should throw error if card is not MasterCard", function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it("should throw error if card is not MasterCard", function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it("should throw error if card is not MasterCard", function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  it('has a prefix of 6011 and a length of 16', function(){
    detectNetwork('6011123456781234').should.equal('Discover');
  })
  it('has a prefix of 6011 and a length of 19', function(){
    detectNetwork('6011000011110000111').should.equal('Discover');
  });
    it('has a prefix of 6011 and a length of 19', function(){
    detectNetwork('6491000011110000111').should.equal('Discover');
  });
    it('has a prefix of 65 and a length of 16', function(){
    detectNetwork('6591000011110000').should.equal('Discover');
  });
    it('has a prefix of 65 and a length of 19', function(){
    detectNetwork('6591000011110000111').should.equal('Discover');
  });
    it('should be Discover for len 16', function(){
      for(var i = 644; i<=649; i++){
        detectNetwork(i.toString() + '1000011110000').should.equal('Discover');
      }
    });
    it('should be Discover for len 19', function(){
      for(var i = 644; i<=648; i++){
        detectNetwork(i.toString() + '1000011110000111').should.equal('Discover');
      }
    });
});

describe('Maestro', function() {
  it('prefix 5018 len 12', function(){
    detectNetwork('501800001111').should.equal('Maestro');
  });
  it('prefix 5020 len 13', function(){
    detectNetwork('5020111100001').should.equal('Maestro');
  });
  it('pre 5038 len 14', function(){
    detectNetwork('50380000111100').should.equal('Maestro');
  });
  it('pre 6304 len 19', function(){
    detectNetwork('6304000011110000111').should.equal('Maestro');
  })

  it('pre 5018, len 12-19', function(){
    for(var j = 0; j <4; j++){
      for(var i = 1; i <= 10000000; i*=10){
        detectNetwork(Number((['5018', '5020', '5038', '6304'][j] + "56789012")*i).toString()).should.equal('Maestro');
      }
    }
  });
});

describe('should support China UnionPay', function(){
  it('624 - 626 16 - 19', function(){
    for(var j = 0; j < 3; j++){
      for(var i = 1; i <= 1000; i*=10){
        detectNetwork(Number((['624', '625', '626'][j] + "5121267890012")*i).toString()).should.equal('China UnionPay');
      }
    }
  });
  it('6282 - 6288 16 - 19', function(){
    for(var j = 0; j < 7; j++){
      for(var i = 1; i <= 1000; i*=10){
        var sd = Number((['6285','6282', '6283', '6284', '6286', '6287', '6288'][j] + "512126789002")*i).toString()
        detectNetwork(sd).should.equal('China UnionPay');
      }
    }
  });
  it('624 - 626 16 - 19', function(){
    for(var j = 0; j < 3; j++){
      for(var i = 1; i <= 1000; i*=10){
        detectNetwork(Number((['624', '625', '626'][j] + "5121267890012")*i).toString()).should.equal('China UnionPay');
      }
    }
  });
  it('622126 622925', function(){
    for(var j = 622126; j <= 622925; j++){
      for(var i = 1; i <= 1000; i*=10){
        detectNetwork((Number( j + "7890123456")*i).toString()).should.equal('China UnionPay');
      }
    }
  });

});
describe('should support Switch', function(){
    it('624 - 626 16', function(){
      for(var i = 0; i < 6; i++ ){
        detectNetwork(Number((['4903', '4905', '4911', '4936', '6333', '6759'][i] + "567890123456" )).toString()).should.equal('Switch');
      }
  });
    it('18 19', function(){
    for(var j = 0; j < 6; j++){
      for(var i = 1; i <= 10; i*=10){
        detectNetwork(Number((['4903', '4905', '4911', '4936', '6333', '6759'][j]+ "78901234567888")*i).toString()).should.equal('Switch');
      }
    }
  });

    it('564182', function(){
    for(var j = 0; j < 2; j++){
      for(var i = 1; i <= 10; i*=10){
        detectNetwork(Number((['564182', '633110'][j]+ "789012345678")*i).toString()).should.equal('Switch');
      }
    }
  });

    it('564182', function(){
    for(var j = 0; j < 2; j++){
        detectNetwork(Number(['564182', '633110'][j]+ "7890123456").toString()).should.equal('Switch');
    }
  });

})
