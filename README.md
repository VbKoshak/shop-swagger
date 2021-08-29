# swagger_shop_rsschool

SwaggerShopRsschool - JavaScript client for swagger_shop_rsschool
This is a swagger file for task3 rsschool nodejs-aws course.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install swagger_shop_rsschool --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your swagger_shop_rsschool from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('swagger_shop_rsschool')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/swagger_shop_rsschool
then install it via:

```shell
    npm install YOUR_USERNAME/swagger_shop_rsschool --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SwaggerShopRsschool = require('swagger_shop_rsschool');

var api = new SwaggerShopRsschool.ProductServiceApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getAvailableProducts(callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://5d09qqbry8.execute-api.us-east-2.amazonaws.com/dev*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SwaggerShopRsschool.ProductServiceApi* | [**getAvailableProducts**](docs/ProductServiceApi.md#getAvailableProducts) | **GET** /products/available | get a list of products that have some products in stock
*SwaggerShopRsschool.ProductServiceApi* | [**getProductById**](docs/ProductServiceApi.md#getProductById) | **GET** /products/{id} | Find product by ID
*SwaggerShopRsschool.ProductServiceApi* | [**getProducts**](docs/ProductServiceApi.md#getProducts) | **GET** /products | get a full list of products


## Documentation for Models

 - [SwaggerShopRsschool.Product](docs/Product.md)


## Documentation for Authorization

 All endpoints do not require authorization.
