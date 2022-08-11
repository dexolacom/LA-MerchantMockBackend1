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

# Title:

### Subtitle

> Flow:
>
> - 1
> - 2
> - 3

_endpoint:_

```
https://liqiudaccess-merchant-backend.herokuapp.com/aloha/la/user/
```

_request:_

```js
{
    "key": "value",
}
```

_response:_

```js
{
    "key": "value",
}
```

---
