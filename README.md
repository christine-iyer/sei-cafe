# Routes for Postman

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



