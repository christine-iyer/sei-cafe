
## Restful Routes and API testing

| #  |Action   | URL |  HTTP Verb |  JSX file name |  mongoose |
|---|---|---|---|---|---|
|  1 | Index  |  /logs/ |  GET |  Index.jsx | Log.find  |
|   2|  Show | /logs/:id  |  GET | Show.jsx   |  Log.findById|
|  3 |  New |  /logs/new | GET  |  New.jsx |  none |
|   4|  Create | /logs  |  POST |   none| Log.create(req.body)  |
|   5| Edit  | /logs/:id/edit  | GET  | Edit.jsx  |  Log.findById |
|   6|  Update | /logs/:id   |  PUT|  none |  Log.findByIdAndUpdate |
|   7|  Destroy | /logs/:id   |  DELETE|  none |  Log.findByIdAndDelete |


### Routes for Postman 

example '63a3cf5e8318a07510819fec'

### User Login

POST localhost:3003/api/users/login

```js
router.post('/login', dataController.login, apiController.auth)
```

### Check user

POST localhost:3003/api/users

```js
router.post('/', dataController.create, apiController.auth)
```

### Check Token

GET localhost:3003/api/users/check-token

```js
router.get('/check-token', ensureLoggedIn, checkToken)
```



### Cart

GET localhost:3003/api/orders/cart

```js
router.get('/cart', ordersCtrl.cart);
```

### History

GET localhost:3003/api/orders/history

```js
router.get('/history', ordersCtrl.history);
```


### Cart

POST localhost:3003/api/orders/cart/items/63a3cf5e8318a07510819fec

```js
router.post('/cart/items/:id', ordersCtrl.addToCart);
```


### Checkout

POST localhost:3003/api/orders/cart/checkout

```js
router.post('/cart/checkout', ordersCtrl.checkout);
```


### Check Items in Cart

PUT localhost:3003/api/orders/cart/qty

```js
router.put('/cart/qty', ordersCtrl.setItemQtyInCart);
```


### INDEX

GET localhost:3003/api/items

```js
router.get('/', itemsCtrl.index);
```

### SHOW

GET localhost:3003/api/items/63a3cf5e8318a07510819fec

```js
router.get('/:id', itemsCtrl.show);
```



