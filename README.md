# LA Merchant Mock Backend 1

---

.env example

```
PORT = 5000

POSTGRES_HOST = ''
POSTGRES_DB = ''
POSTGRES_USER = ''
POSTGRES_PASSWORD = ''
```

---

# User:

### GET all users

_endpoint:_

```
https://liqiudaccess-merchant-backend.herokuapp.com/aloha/la/user/all
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

### GET Login

> Flow:
>
> - POST add user
> - Login (current)

_endpoint:_

```
https://liqiudaccess-merchant-backend.herokuapp.com/aloha/la/user/login/?login=bestuser&password=123456789
```

_response:_

```js
{
    "user_id": 1,
    "NFT_id": null,
    "is_waitlist": null,
    "is_activated_NFT": null,
    "NFT_status": null,
    "login": "bestuser",
    "password": "123456789",
    "package": null,
    "expiration": null
}
```

---

### GET get by user_id

_endpoint:_

```
https://liqiudaccess-merchant-backend.herokuapp.com/aloha/la/user/?user_id=1
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
    package: 'basic',
    expiration: 1665405339,
  },
];
```

---

### POST add user

_endpoint:_

```
https://liqiudaccess-merchant-backend.herokuapp.com/aloha/la/user/add
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

### POST add package

_endpoint:_

```
https://liqiudaccess-merchant-backend.herokuapp.com/aloha/la/user/package
```

_request:_

```js
{
    "user_id": 1,
    "package": "basic"
}
```

_response:_

```js
{
    "user_id": 1,
    "package": "basic"
}
```

---

### POST Subscription

_endpoint:_

```
https://liqiudaccess-merchant-backend.herokuapp.com/aloha/la/user/subscription
```

_request:_

```js
{
    "user_id": 1,
    "NFT_id": 1,
    "is_activated_NFT": true,
    "NFT_status": "subscription success"
    "expiration": 1665405300,
}
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
    login: 'bestuser',
    password: '123456789',
    package: 'basic',
    expiration: 1665405300,
  },
];
```

---

### POST Mail

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
{
    "user_id": 1,
    "is_waitlist": true,
    "msg": "information updated"
}
```

---

### POST Deactivation

_endpoint:_

```
https://liqiudaccess-merchant-backend.herokuapp.com/aloha/la/user/subscription/deactivation
```

_request:_

```js
{
    "user_id": 1,
    "NFT_id": 1,
    "expiration": 1665405300,
    "is_activated_NFT": null,
    "NFT_status": "manual deactivation success"
}
```

_response:_

```js
[
  {
    user_id: 1,
    NFT_id: null,
    is_waitlist: null,
    is_activated_NFT: null,
    NFT_status: 'manual deactivation success',
    login: 'bestuser',
    password: '123456789',
    package: null,
    expiration: null,
  },
];
```

---

### POST Activation

_endpoint:_

```
https://liqiudaccess-merchant-backend.herokuapp.com/aloha/la/user/subscription/activation
```

_request:_

```js
{
    "user_id": 1,
    "NFT_id": 1,
    "typeSubscription": "basic",
    "expiration": 1665405300,
    "is_activated_NFT": true,
    "NFT_status": "manual activation success"
}
```

_response:_

```js
[
  {
    user_id: 1,
    NFT_id: 1,
    is_waitlist: null,
    is_activated_NFT: true,
    NFT_status: 'manual activation success',
    login: 'bestuser',
    password: '123456789',
    package: 'basic',
    expiration: 1665405300,
  },
];
```

---

### POST extend date

_endpoint:_

```
https://liqiudaccess-merchant-backend.herokuapp.com/aloha/la/user/subscription/extend-date
```

_request:_

```js
{
    "user_id": 1,
    "NFT_id": 1,
    "expiration": 1665405311,
}
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
    login: 'bestuser',
    password: '123456789',
    package: 'basic',
    expiration: 1665405311,
  },
];
```

---
