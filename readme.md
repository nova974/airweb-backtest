# Airweb backend

## How to

```
npm i
mv .env.sample .env
npm run dev
```

## API

### auth

```
[POST] /auth/login 

body
{
    "email": string,
    "password": string
}

response
{
    "token": token
}
```

### products

```
[GET] /products

header
{
    "Authorization": "Bearer [token]"
}

response
[Products]
```

```
[GET] /products/:id

header
{
    "Authorization": "Bearer [token]"
}

response
Product
```

### carts
```
[POST] /cart

body
{
    "product_id": number,
    "qty": number
}

response
Cart
 
```

```
[GET] /cart

response
Cart
 
```
