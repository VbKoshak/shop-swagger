# SwaggerShopRsschool.ProductServiceApi

All URIs are relative to *https://5d09qqbry8.execute-api.us-east-2.amazonaws.com/dev*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAvailableProducts**](ProductServiceApi.md#getAvailableProducts) | **GET** /products/available | get a list of products that have some products in stock
[**getProductById**](ProductServiceApi.md#getProductById) | **GET** /products/{id} | Find product by ID
[**getProducts**](ProductServiceApi.md#getProducts) | **GET** /products | get a full list of products


<a name="getAvailableProducts"></a>
# **getAvailableProducts**
> [Product] getAvailableProducts()

get a list of products that have some products in stock

### Example
```javascript
var SwaggerShopRsschool = require('swagger_shop_rsschool');

var apiInstance = new SwaggerShopRsschool.ProductServiceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAvailableProducts(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Product]**](Product.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProductById"></a>
# **getProductById**
> Product getProductById(id)

Find product by ID

Returns a single product

### Example
```javascript
var SwaggerShopRsschool = require('swagger_shop_rsschool');

var apiInstance = new SwaggerShopRsschool.ProductServiceApi();

var id = "id_example"; // String | ID of product to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProductById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of product to return | 

### Return type

[**Product**](Product.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProducts"></a>
# **getProducts**
> [Product] getProducts()

get a full list of products

### Example
```javascript
var SwaggerShopRsschool = require('swagger_shop_rsschool');

var apiInstance = new SwaggerShopRsschool.ProductServiceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProducts(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Product]**](Product.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

