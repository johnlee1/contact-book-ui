# contact book ui
A front-end application built with Vue.js that consumes a contact book api.

## prerequisites
 - npm

## setup
In app.js, substitute the strings 'apiURL' and 'X-Auth-Token' with the appropriate values. 

## developing
Run `npm install` and open index.html in browser.

## api to be consumed
### Add Contact
#### Request:
Method: POST    
Url: apiUrl/    
Required: first_name    
Body:
```json
{    
  "first_name": "someValue",    
  "last_name": "someValue",    
  "company_name": "someValue",    
  "address": "someValue",    
  "city": "someValue",    
  "state": "someValue",    
  "zip": "12345",    
  "phone": "8034562345",    
  "work_phone": "8034562345",    
  "email": "someValue",    
  "url": "someValue"    
}    
```
#### Response Body
```json
{
  "success": true,
  "new_contact": {
    "id": 1,
    "first_name": "someValue",
    "last_name": "someValue",
    "company_name": "someValue",
    "address": "someValue",
    "city": "someValue",
    "state": "someValue",
    "zip": "12345",
    "phone": "8034562345",
    "work_phone": "8034562345",
    "email": "someValue",
    "url": "someValue",
    "created_at": dateTime,
    "updated_at": dateTime
  }
}
```
### Get List of Contacts
#### Request
Method: GET <br />
Url: apiUrl/ <br />
Body:
```json
{
  "limit": 1,
  "sort": "first_name"|"last_name"|"address"|"city"|"state"|"zip",
  "desc": true,
  "page": 1
}
#### Response Body
```json
[
  {
    "id": 1,
    "first_name": "someValue",
    "last_name": "someValue",
    "company_name": "someValue",
    "address": "someValue",
    "city": "someValue",
    "state": "someValue",
    "zip": "12345",
    "phone": "8034562345",
    "work_phone": "8034562345",
    "email": "someValue",
    "url": "someValue",
    "created_at": dateTime,
    "updated_at": dateTime
  }
]
```
### Get Contact
#### Request
Method: GET <br />
Url: apiURL/{id} <br />
#### Response Body
```json
{
  "id": 1,
  "first_name": "someValue",
  "last_name": "someValue",
  "company_name": "someValue",
  "address": "someValue",
  "city": "someValue",
  "state": "someValue",
  "zip": "12345",
  "phone": "8034562345",
  "work_phone": "8034562345",
  "email": "someValue",
  "url": "someValue",
  "created_at": dateTime,
  "updated_at": dateTime
}
```
### Update Contact
#### Request
Method: PUT <br />
Url: apiURL/{id} <br />
Required: first_name <br />
Body: {
```json
  "first_name": "someValue",
  "last_name": "someValue",
  "company_name": "someValue",
  "address": "someValue",
  "city": "someValue",
  "state": "someValue",
  "zip": "12345",
  "phone": "8034562345",
  "work_phone": "8034562345",
  "email": "someValue",
  "url": "someValue"
}
```
#### Response Body
```json
{
  "success": true,
  "updated_contact": {
    "id": 1,
    "first_name": "someValue",
    "last_name": "someValue",
    "company_name": "someValue",
    "address": "someValue",
    "city": "someValue",
    "state": "someValue",
    "zip": "12345",
    "phone": "8034562345",
    "work_phone": "8034562345",
    "email": "someValue",
    "url": "someValue",
    "created_at": dateTime,
    "updated_at": dateTime
  }
}
```
### Delete Contact
#### Request
Method: DELETE <br />
Url: apiURL/{id} <br />
#### Response Body
```json
{
  "success": true
}
```
