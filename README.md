# productsapp

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/fe69a1c683864e1b9a557915e2209731)](https://app.codacy.com/manual/kallyasmedia/productsapp?utm_source=github.com&utm_medium=referral&utm_content=kallyas/productsapp&utm_campaign=Badge_Grade_Dashboard) ![api build](https://github.com/kallyas/productsapp/workflows/api%20build/badge.svg?branch=master)

A simple RESTful API

### Preriquisites

[Node Js](https://nodejs.org/en/download/)

[Mongo DB](https://www.mongodb.com/)

### Usage

Clone this repository by runing

```bash
git clone https://github.com/kallyas/productsapp.git
```

Install dependencies

```bash
npm i
```

### Environment Variables

create a `.env` file

```bash
PORT= specify your PORT Number
MONGODB_URL= Specify the URL of your mongo db
```

start the app

```bash
npm run start
```

### Create A Product

| End Point          | Method | Params | Data Type |
| ------------------ | ------ | ------ | --------- |
| `/products/create` | POST   | `None` | `None`    |

- **Request.Body**

```json
{
  "name": "Iphone",
  "price": 50000
}
```

- **Request Headers**

  > `None`

**Success Response:**

**Status: `200 OK`**

**Sample Content:**

```json
{
  "status": 200,
  "message": "Product created success fully!"
}
```

License

[MIT](/LICENSE)
