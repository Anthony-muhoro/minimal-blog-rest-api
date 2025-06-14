# Bloggin Restful API
- This is a simple rest API that mimic the real world of blogging , where users are allowed to register using unique emails and usernames. After a user is created they are then allowed to create a blog post with a title and attach content. They have the authority to edit or delete their posts as well.

## Technology Used.
1. Express
2. Prisma ORM
3. PostgreSQL <a target="_blank">https://neon.com/</a>

## Endpoints available:
### Base Url: https://blog-posts-api-nru4.onrender.com/
1. `GET`
2. `POST`
3. `PUT`
4. `DELETE`

### Route paths:
1.  POST: `/users` - this one is used for creating a new user. 
```json
{
"firstName":"Migas",
"lastName":"Tasha",  "emailAdress":"natasha@gmail.com",
"userName":"Natasha"
  
}

```

response

```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "id": "2ce24655-b220-4344-a075-9aa7108c8fbd",
    "firstName": "Migas",
    "lastName": "Tasha",
    "emailAdress": "natasha@gmail.com",
    "userName": "Natasha"
  }
}
```
2. GET: `/users/id` - this one is will return a specific user via the user id.

example

`/users/2ce24655-b220-4344-a075-9aa7108c8fbd`

you will get a response of;
```json
{
  "success": true,
  "data": {
    "id": "2ce24655-b220-4344-a075-9aa7108c8fbd",
    "firstName": "Migas",
    "lastName": "Tasha",
    "emailAdress": "natasha@gmail.com",
    "userName": "Natasha"
  }
}

```
 3. GET: `/users` - this will return all the available users in the db.
 Response
 ```json
 {
  "success": true,
  "data": [
    {
      "id": "10bf8c5c-0925-4785-a5e0-1858e7e80577",
      "firstName": "alex",
      "lastName": "mat",
      "emailAdress": "alex@gmail.com",
      "userName": "Tasha"
    },
    {
      "id": "2ce24655-b220-4344-a075-9aa7108c8fbd",
      "firstName": "Migas",
      "lastName": "Tasha",
      "emailAdress": "natasha@gmail.com",
      "userName": "Natasha"
    }
  ]
}
```
Posts endpoints
1. POST: `/posts` - this will create a new post to a certain user
```json
{
 "title":"The Betrayal of swizz",
  "content":"The looeie eiebbbdubf ddnbfur fhhdhh sjbshhbybe  ueueb djjdiudu ppzx mdd jebhfbehuuhuiehuiiu mmxnnsnsdood ehhehheydbbdbbdbbd ...",
  "authorId":"2ce24655-b220-4344-a075-9aa7108c8fbd"
  
}
````
response:
```json
{
  "success": true,
  "message": "Post created Successfully",
  "data": {
    "id": "fab64fcc-19b8-4554-9e1f-23bad7a19326",
    "title": "The Betrayal of swizz",
    "content": "The looeie eiebbbdubf ddnbfur fhhdhh sjbshhbybe  ueueb djjdiudu ppzx mdd jebhfbehuuhuiehuiiu mmxnnsnsdood ehhehheydbbdbbdbbd ...",
    "createdAt": "2025-06-14T20:07:11.152Z",
    "lastUpdated": "2025-06-14T20:07:11.152Z",
    "isDeleted": false,
    "authorId": "2ce24655-b220-4344-a075-9aa7108c8fbd"
  }
}
```
2. GET : `/posts/id` this returns all the posts belonging to  a given user.

example `/posts/2ce24655-b220-4344-a075-9aa7108c8fbd`
response:
```json
{
  "success": true,
  "posts": [
    {
      "id": "162625a2-f73d-41d0-8ca1-79e8b9aaddd1",
      "title": "The Betrayal of swizz",
      "content": "The looeie eiebbbdubf ddnbfur fhhdhh sjbshhbybe  ueueb djjdiudu ppzx mdd jebhfbehuuhuiehuiiu mmxnnsnsdood ehhehheydbbdbbdbbd ...",
      "createdAt": "2025-06-14T20:03:59.538Z",
      "lastUpdated": "2025-06-14T20:03:59.538Z",
      "isDeleted": false,
      "authorId": "2ce24655-b220-4344-a075-9aa7108c8fbd",
      "author": {
        "id": "2ce24655-b220-4344-a075-9aa7108c8fbd",
        "firstName": "Migas",
        "lastName": "Tasha",
        "emailAdress": "natasha@gmail.com",
        "userName": "Natasha"
      }
    },
    {
      "id": "fab64fcc-19b8-4554-9e1f-23bad7a19326",
      "title": "The Betrayal of swizz",
      "content": "The looeie eiebbbdubf ddnbfur fhhdhh sjbshhbybe  ueueb djjdiudu ppzx mdd jebhfbehuuhuiehuiiu mmxnnsnsdood ehhehheydbbdbbdbbd ...",
      "createdAt": "2025-06-14T20:07:11.152Z",
      "lastUpdated": "2025-06-14T20:07:11.152Z",
      "isDeleted": false,
      "authorId": "2ce24655-b220-4344-a075-9aa7108c8fbd",
      "author": {
        "id": "2ce24655-b220-4344-a075-9aa7108c8fbd",
        "firstName": "Migas",
        "lastName": "Tasha",
        "emailAdress": "natasha@gmail.com",
        "userName": "Natasha"
      }
    }
  ]
}

```
3. GET: `/posts/postid` - this will return a specific post

example `/post/162625a2-f73d-41d0-8ca1-79e8b9aaddd1`

the response will be 
```json
{
  "success": true,
  "data": {
    "id": "162625a2-f73d-41d0-8ca1-79e8b9aaddd1",
    "title": "The Betrayal of swizz",
    "content": "The looeie eiebbbdubf ddnbfur fhhdhh sjbshhbybe  ueueb djjdiudu ppzx mdd jebhfbehuuhuiehuiiu mmxnnsnsdood ehhehheydbbdbbdbbd ...",
    "createdAt": "2025-06-14T20:03:59.538Z",
    "lastUpdated": "2025-06-14T20:03:59.538Z",
    "isDeleted": false,
    "authorId": "2ce24655-b220-4344-a075-9aa7108c8fbd",
    "author": {
      "id": "2ce24655-b220-4344-a075-9aa7108c8fbd",
      "firstName": "Migas",
      "lastName": "Tasha",
      "emailAdress": "natasha@gmail.com",
      "userName": "Natasha"
    }
  }
}
```
4. PUT `/posts/postid` - it will edit a post

5. DELETE `/posts/postid` delete it will delete a post


