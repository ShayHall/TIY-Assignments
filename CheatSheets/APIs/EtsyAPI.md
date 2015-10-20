* [**How do I make API requests?**](https://github.com/etsy/etsyapi/blob/master/README.md)

* What is the base URL for all requests?

The base URL for all requests begins with [`https://openapi.etsy.com/v2`](https://www.etsy.com/developers/documentation/getting_started/requests) and ends with this URI command- `/users/:user_id` and end with a `?` and any additional parameters to sends and your API key.

The final request will look like this: `https://openapi.etsy.com/v2/users/etsystore?api_key=your_api_key`

* Are there any headers or query parameters required?

The API key is included in the request in the `x-api-key` HTTP header.

If the API key is "ABC789", then include a header as:
`x-api-key: ABC789`.

`:user_id` is an embedded parameter that should be substituted with the user name "etsystore" or the ID of the user you're trying to access.

  * [What kind of response should I expect?](https://www.etsy.com/developers/documentation/getting_started/api_basics#section_standard_response_codes)

The response is formatted using JSON.
A 202 HTTP code will give a message of `OK` with a JSON response meaning Success!

A 201 HTTP code will give a message of `Created` with a JSON response containing the new resource's data.

HTTP Codes 400, 403, 404, 500, 503 are all error messages.
* **How does the API handle authentication?**

* [Do I _need_ to authenticate? with user credentials?](https://www.etsy.com/developers/documentation/getting_started/api_basics#section_authentication)

`GET https://openapi.etsy.com/v2/listings/active?api_key={YOUR_API_KEY}`

For write accessor for accessing private user data, an OAuth access toke is required. And your application key that is provided during app registration is required to start the OAuth authenticity process.

  * What can I do with an unauthenticated request?

[Provisional Access includes the following](https://www.etsy.com/developers/documentation/getting_started/register#section_provisional_access):

Read access to any public, unauthenticated resources such as Shops and Treasuries.
Authenticated read/write access to data belonging to the member who created the application.

This includes reading data like Receipts and Billing as well as creating, editing or deleting a shop's Listings. If necessary, access can be provided upon request for a small number of test users in addition to the member who owns the app.

  * How can I authenticate my request? (what methods)

Etsy uses OAuth 2.0 bearer tokens which are sent in the Authorization header.   The bearer token should be the same OAuth token used for making OAuth 1.0 calls in v2 of the Etsy API.

The locale information to be submitted as a pipe delimited tuple of 3 elements:
* Currency
* Language
* Region


  * What Resource in the API represents an individual product?
`fields` and `associations`

  * What Resource in the API represents a group or collection of products?
`associations`  

  * What Resource in the API represents images associated with a product?
loads only first image (limit 1, offset 0): `/v2/listings/active?includes=Images:1:0`

  * [What Resource in the API represents sizes and colors for a product?](https://www.etsy.com/developers/documentation/reference/variations_property)
`variations_property`

  * **What actions and endpoints exist for each of these Resources?**


  * **What parameters do each endpoint require or accept?**
  * What fields are returned for each Resource, specifically, an individual product?
  * What fields are returned for each Resource, specifically, a group or collection of products?
  * **What _additional_ fields can be requested for each?**


* For the product list (category) page what data is needed from...
  * the `Listing` resource?
  * the `ListingImage` resource?
  * the `Variations_*` resources?
  * the `Category` resource?
  * the `Shop` resource?
* On the product detail page what data is needed from...
  * the `Listing` resource?
  * the `ListingImage` resource?
  * the `Variations_*` resources?
  * the `Category` resource?
  * the `Shop` resource?
* Identified for each:
  * API endpoint
  * required query params
  * additional params needed (`fields`, `includes`)
  * sample data returned
