# Project name

---

.env example

```
PORT = 8823

POSTGRES_HOST = 'localhost'
POSTGRES_DB = 'mock1_db'
POSTGRES_USER = ''
POSTGRES_PASSWORD = ''
```

---

# User:

### GET all users

_endpoint:_

```
https://liqiudaccess-merchant-backend.herokuapp.com/aloha/la/user/
```

_response:_

```js
[
  {
    user_id: 1,
    NFT_id: 1,
    is_waitlist: null,
    is_activated_NFT: true,
    NFT_status: 'subscription success',
    login: '000',
    password: '000',
    package: null,
    expiration: 1665405339,
  },
];
```

---

### POST add user

_endpoint:_

```
https://liqiudaccess-merchant-backend.herokuapp.com/aloha/la/user/
```

_request:_

```js
{
    "login": "bestuser",
    "password": "123456789"
}
```

_response:_

```js
{
    "user_id": 1,
    "login": "bestuser",
    "password": "123456789",
    "NFT_id": null,
    "is_waitlist": null,
    "is_activated_NFT": null,
    "NFT_status": null,
    "package": null,
    "expiration": null
}
```

---

### Login

> Flow:
>
> - POST add user
> - Login (current)

_endpoint:_

```
https://liqiudaccess-merchant-backend.herokuapp.com/aloha/la/user/login/?user_id=1&login=bestuser&password=123456789
```

_response:_

```js
true;
```

---

### Subtitle

_endpoint:_

```
https://liqiudaccess-merchant-backend.herokuapp.com/aloha/la/user/?user_id=4
```

_response:_

```js
[
  {
    user_id: 1,
    NFT_id: 1,
    is_waitlist: null,
    is_activated_NFT: true,
    NFT_status: 'activation success',
    login: 'bestuser',
    password: '123456789',
    package: null,
    expiration: 1665405339,
  },
];
```

---

### Subscription

_endpoint:_

```
https://liqiudaccess-merchant-backend.herokuapp.com/aloha/la/user/subscription
```

_request:_

```js
{
    "user_id": 1,
    "is_activated_NFT": true,
    "NFT_id": 1,
    "expiration": 1665405339,
    "NFT_status": "subscription success"
}
```

_response:_

```js
'1 information updated';
```

---

### Mail

_endpoint:_

```
https://liqiudaccess-merchant-backend.herokuapp.com/aloha/la/user/mail
```

_request:_

```js
{
    "user_id": 1,
    "is_waitlist": true
}
```

_response:_

```js
'1 information updated';
```

---

### Deactivation

_endpoint:_

```
https://liqiudaccess-merchant-backend.herokuapp.com/aloha/la/user/subscription/deactivation
```

_request:_

```js
{
    "user_id": 1,
    "is_activated_NFT": false,
    "NFT_id": 1,
    "NFT_status": "deactivation success"
}
```

_response:_

```js
{
    "user_id": 1,
    "is_activated_NFT": false,
    "NFT_id": null,
    "NFT_status": "deactivation success"
}
```

---

### Activation

_endpoint:_

```
https://liqiudaccess-merchant-backend.herokuapp.com/aloha/la/user/subscription/activation
```

_request:_

```js
{
    "user_id": 1,
    "NFT_id": 1,
    "expiration": 1665405339,
    "is_activated_NFT": true,
    "NFT_status": "activation success"
}
```

_response:_

```js
'1 information updated';
```

---
