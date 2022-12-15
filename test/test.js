let express = require("express");
let app = express();
var expect = require("chai").expect; 
var request = require("request");

describe("Add Two Numbers", function(){
    var url = 'http://localhost:8080/addTwoNumbers/3/5'; 
    // first it function....
    it("returns status 200 to check if api works", function(done){
        request(url, function(error, response){
            expect(response.statusCode).to.equal(200);
            done(); 
        });
    });

    // second it function.....
    it("returns statusCode key in body to check if api give right result should be 200", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.statusCode).to.equal(200);
            done()
        });
    });

    
});