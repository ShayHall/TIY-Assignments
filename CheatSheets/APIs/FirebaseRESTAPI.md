## **Reading APIs: Firebase & Restangular**

**Firebase REST API**

* What operations does the Firebase REST API support?  

[Write or replace data  using-PUT, Update keys for a path without replacing all data-PATCH, Add to a list of data-POST, Remove data-DELETE]( https://www.firebase.com/docs/rest/guide/saving-data.html)

[Read data using-GET](https://www.firebase.com/docs/rest/guide/retrieving-data.html)

* Do I need to [authenticate](https://www.firebase.com/docs/rest/guide/user-auth.html) with Firebase to read or create data?

`curl 'https://docs-examples.firebaseio.com/rest/saving-data/auth-example.json?auth=CREDENTIAL'` [CREDENTIAL is either your Firebase app's secret or an authentication token.](https://www.firebase.com/docs/rest/guide/retrieving-data.html)

* What format does Firebase expect data to be in?  

All data is stored as [JSON objects](https://www.firebase.com/docs/rest/guide/understanding-data.html).

**Restangular**

* [How do I configure a REST-ful API like Github?]( https://github.com/mgonto/restangular/blob/master/README.md#quick-configuration-for-lazy-readers)

```
// Add Restangular as a dependency to your app

angular.module('your-app', ['restangular']);

// Inject Restangular into your controller

angular.module('your-app').controller('MainCtrl', function($scope, Restangular) {
  // ...
});
```


* How would I request a list of...Repos for the class Org?


* How would I request a list of...Issues for the class Repo?

* How would I request a list of...Issues for a specific Milestone?


<br>

 **`ngRouter`**

* How do I define...a route for my application with `ngRouter`?

[$routeProvider](https://docs.angularjs.org/api/ngRoute/provider/$routeProvider)


* How do I define...dynamic pieces (params) to routes?

* How do I define... the template to load for a route?

* How do I define... the controller to trigger for a route?

[$controller](https://docs.angularjs.org/api/ng/service/$controller)

* How do I retrieve...the params from a route in a controller?

* How do I retrieve...the controller for a route in the view?
