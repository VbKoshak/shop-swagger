/*
 * Swagger Shop rsschool
 * This is a swagger file for task3 rsschool nodejs-aws course.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: boltrukanisvlad@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.21
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SwaggerShopRsschool);
  }
}(this, function(expect, SwaggerShopRsschool) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SwaggerShopRsschool.ProductServiceApi();
  });

  describe('(package)', function() {
    describe('ProductServiceApi', function() {
      describe('getAvailableProducts', function() {
        it('should call getAvailableProducts successfully', function(done) {
          // TODO: uncomment getAvailableProducts call and complete the assertions
          /*

          instance.getAvailableProducts(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(SwaggerShopRsschool.Product);
              expect(data.count).to.be.a('number');
              expect(data.count).to.be("0");
              expect(data.description).to.be.a('string');
              expect(data.description).to.be("");
              expect(data.id).to.be.a('string');
              expect(data.id).to.be("");
              expect(data.price).to.be.a('number');
              expect(data.price).to.be();
              expect(data.title).to.be.a('string');
              expect(data.title).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getProductById', function() {
        it('should call getProductById successfully', function(done) {
          // TODO: uncomment, update parameter values for getProductById call and complete the assertions
          /*
          var id = "id_example";

          instance.getProductById(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerShopRsschool.Product);
            expect(data.count).to.be.a('number');
            expect(data.count).to.be("0");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("");
            expect(data.price).to.be.a('number');
            expect(data.price).to.be();
            expect(data.title).to.be.a('string');
            expect(data.title).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getProducts', function() {
        it('should call getProducts successfully', function(done) {
          // TODO: uncomment getProducts call and complete the assertions
          /*

          instance.getProducts(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(SwaggerShopRsschool.Product);
              expect(data.count).to.be.a('number');
              expect(data.count).to.be("0");
              expect(data.description).to.be.a('string');
              expect(data.description).to.be("");
              expect(data.id).to.be.a('string');
              expect(data.id).to.be("");
              expect(data.price).to.be.a('number');
              expect(data.price).to.be();
              expect(data.title).to.be.a('string');
              expect(data.title).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
