let express = require("express");
let app = express();
var expect = require("chai").expect;
var request = require("request");

describe("Testing addition", function () {
  var url = "http://localhost:8080/addTwoNumbers/10/20";
  // checking status code directly
  it("statusCode checked 200", function (done) {
    request(url, function (error, response) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  // checking status code json body parsed
  it("body parsed statusCode checked 200", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.statusCode).to.equal(200);
      done();
    });
  });

  // check result is a number
  it("result returned is a number", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.result).to.be.a("number");
      done();
    });
  });

  // check result number is correct
  it("result of adding 10, 20 is 30", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.result).to.equal(30);
      done();
    });
  });

  // check result number is not incorrect
  it("result is not -100", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.result).to.not.equal(-100);
      done();
    });
  });
});

describe("Testing subtraction", function () {
  var url = "http://localhost:8080/substractTwoNumbers/10/20";
  // checking status code directly
  it("statusCode checked 200", function (done) {
    request(url, function (error, response) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  // checking status code json body parsed
  it("body parsed statusCode checked 200", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.statusCode).to.equal(200);
      done();
    });
  });

  // check result is a number
  it("result returned is a number", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.result).to.be.a("number");
      done();
    });
  });

  // check result number is correct
  it("result of subtracting 10, 20 is -10", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.result).to.equal(-10);
      done();
    });
  });

  // check result number is not incorrect
  it("result is not -100", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.result).to.not.equal(-100);
      done();
    });
  });
});
describe("Testing multiplication", function () {
  var url = "http://localhost:8080/multiplyTwoNumbers/10/20";
  // checking status code directly
  it("statusCode checked 200", function (done) {
    request(url, function (error, response) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  // checking status code json body parsed
  it("body parsed statusCode checked 200", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.statusCode).to.equal(200);
      done();
    });
  });

  // check result is a number
  it("result returned is a number", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.result).to.be.a("number");
      done();
    });
  });

  // check result number is correct
  it("result of multiply 10, 20 is 200", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.result).to.equal(200);
      done();
    });
  });

  // check result number is not incorrect
  it("result is not -20", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.result).to.not.equal(-100);
      done();
    });
  });
});
describe("Testing divide", function () {
  var url = "http://localhost:8080/divideTwoNumbers/20/10";
  // checking status code directly
  it("statusCode checked 200", function (done) {
    request(url, function (error, response) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  // checking status code json body parsed
  it("body parsed statusCode checked 200", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.statusCode).to.equal(200);
      done();
    });
  });

  // check result is a number
  it("result returned is a number", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.result).to.be.a("number");
      done();
    });
  });

  // check result number is correct
  it("result of divide 10, 20 is 2", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.result).to.equal(2);
      done();
    });
  });

  // check result number is not incorrect
  it("result is not -50", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.result).to.not.equal(-100);
      done();
    });
  });
});

