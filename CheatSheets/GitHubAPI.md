# [GitHub API](https://developer.github.com/v3/)

## [Authentication](https://developer.github.com/v3/#authentication)

> Do I need to authenticate?

> What can I do with an unauthenticated request?

> What _can't_ I do with an unauthenticated request?

> How can I authenticate my request?

1. First way -- [Basic Authentication](https://developer.github.com/v3/auth/#basic-authentication): Username and Password for account are shared. But tokens can be limited to specific data types and can be revoked by users at any time.
```
$ curl -u "username" https://api.github.com
```
2. Second way -- [OAuth2 Token](https://developer.github.com/v3/oauth/) (sent in a header): OAuth2 is a protocol that lets external apps request authorization to private details in a user's GitHub account without getting their password. Instead they give "tokens" which are like passwords but it can be revoked and more can be generated. This can add a level of security.
```
$ curl -H "Authorization token OAUTH-TOKEN" https://api.github.com```
3. Third way -- OAuth2 Token (sent as a parameter)
```
$ curl https://api.github.com/?access_token=OAUTH-TOKEN```

## [Users](https://developer.github.com/v3/users/)

> How do I ask the API for the profile information for a specific user?

> How do I ask the API for the repository listing for a specific user?

> How do I ask the API for the recent, public activity for a specific user?

To get a single user:
```
GET /user/:username
```
For an authenticated user:
```
GET /user
```
For repository listing:
```
GET /repos/:owner/:repo
```
The [Repository Statistics API](https://developer.github.com/v3/repos/statistics/) allows you to fetch data that GitHub uses for visualizing different types of repo activity.
To get the last year of commit activity broken down by weeks:
```
GET /repos/:owner/:repo/stats/commit_activity
```
To get number of additions and deletions per week:
```
GET /repos/:owner/:repo/stats/code_frequency
```
To get number of commits per hour in each day:
```
GET /repos/:owner/:repo/stats/punch_card
```

## [Requests](https://developer.github.com/v3/#pagination)

>Is there a limit to the number of requests I can make?

>Is there a way of extending that limit?

>What happens when I hit the limit?

There is a maximum of 5000 requests per hour for Basic Authentication or OAuth.  Unauthenticated requests are limited to 60 per hour.  

If you go over rate limit you will receive an error message:
```
HTTP/1.1 403 Forbidden
Date: Mon, 05 May 2014 14:12:13 GMT
Status: 403 Forbidden
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 137271245t6

{
    "message": "API rate limit exceeded for xxx.xxx.xxx.xxx. (But here's the good news: Authenticated requests get a higheer rate limit.  Check out the documentation for more details.)",
    "Ddocumenation_url": "https://developer.github.com/v3/#rate-limiting"
}
```

To increate the unauthenticated rate limit for OAuth applications, you can pass your app's client ID and secret as part of query string:
```
$ curl -i 'https://api.github.com/users/whatever?client_id=xxxx$client_secret=yyyy'

HTTP/1.1 200 OK
Date: Fri, 13 Oct 2013 13:13:13 GMT
Status: 200 OK
X-RateLimit-Limit: 5000
X-RateLimit-Remaining: 4966
X-RateLimit-Reset: 1372700873
```

## [Data](https://developer.github.com/v3/#pagination)

>What if there is a lot of data returned?

>How can I ask for more (or less) data from a request?

>How do I know that there is more data available?

When a lot of data is returned, the results of a request are broken up into pages.

The default number of items per page is 30, but that can be cahnged with the `?page` parameter, changing it to up to 100 per page using `?per_page` parameter. [More here](https://developer.github.com/guides/traversing-with-pagination/)
```
$ curl 'https://api.github.com/user/repos?page=2&per_page=100'
```
Pagination info is included in the [Link header](http://tools.ietf.org/html/rfc5988).  
Here you can see that you the next page is page 2 and there are 33 more pages to go.
```
Link: <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=2>; rel="next",
  <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=34>; rel="last"
```

## [Endpoints](https://developer.github.com/v3/enterprise/#endpoint-urls)
Endpoints are any URL that returns info.

>What are the endpoints for fetching the profile data for a user?

```
https://api.github.com/users/USERNAME
```

>What are the endpoints for fetching the organizations a user belongs to?

```
https://api.github.com/users/USERNAME/orgs
```

>What are the endpoints for fetching the repositories a user has created?

```
https://api.github.com/users/USERNAME/repos
```
>What are the endpoints for fetching a filtered list of repositories?

Repositories can be filtered by `visibiity`, `affiliation`, `type`, or `direction`

>What are the endpoints for fetching a sorted list of repositories?

???

>What are the endpoints for fetching public events for a user?

```
https://api.github.com/users/**username**/events/public
```

## [Public Event](https://developer.github.com/v3/activity/events/)

>When fetching public events for a user: How many results are returned by default?

30 items is the default with up to 10 pages supported for a total of 300.

>When fetching public events for a user: What limitations exist on fetching more results?

Events expire after 90 days.

>When fetching public events for a user: What is the basic structure of the results?
```
Status: 200 OK
Link: <https://api.github.com/resource?page=2>; rel="next",
      <https://api.github.com/resource?page=5>; rel="last"
X-RateLimit-Limit: 5000
X-RateLimit-Remaining: 4999
```

>When fetching public events for a user: What fields are included in each result?

```
[
  {
    "type": "Event",
    "public": true,
    "payload": {
    },
    "repo": {
      "id": 3,
      "name": "octocat/Hello-World",
      "url": "https://api.github.com/repos/octocat/Hello-World"
    },
    "actor": {
      "id": 1,
      "login": "octocat",
      "gravatar_id": "",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "url": "https://api.github.com/users/octocat"
    },
    "org": {
      "id": 1,
      "login": "github",
      "gravatar_id": "",
      "url": "https://api.github.com/orgs/github",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif"
    },
    "created_at": "2011-09-06T17:26:27Z",
    "id": "12345"
  }
]
```

>When fetching public events for a user: What are the data types for each field?

All fields are "strings" except `id` is a Number and `public is a Boolean.

>When fetching public events for a user: What are some of the [different values](https://developer.github.com/v3/activity/events/types/) for the type field?

Sting, object, array, integer, url, boolean





>How can I use the Github API to get all the comments for a particular issue?

>How can I use the Github API to add a comment to an issue?


>How can I use the jQuery API to get the HTML contents of an element?

>How can I use the jQuery API to create a new HTML element?

>How can I use the jQuery API to add an HTML element to the page?


>How can I use the Lodash API to replace placeholders with values from an object?

>How can I use the Lodash API to repeat code for every item of an array
