# E-commerce-sequelise

## Table of Content

- [Description](#description)
- [Node Packages](#node-packages)
- [Relational Entity Diagram](relational-entity-diagram)
- [Start](#To-start-application)
- [Installation](#installation)
- [Video Demonstration](#video-demonstration)
- [Questions](#questions)

## Description

Building the back end for an e-commerce website using sequelize ORM with Node.js and Express to interact with a MySQL database.

## Node Dependencies Packages

- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Mysql2](https://www.npmjs.com/package/mysql2)
- [sequelize](https://www.npmjs.com/package/sequelize)
- [express](https://www.npmjs.com/package/express)

#### DevDependencies package

- [Nodemon](https://www.npmjs.com/package/nodemon)

## Relational Entity Diagram

![entity-relations](https://user-images.githubusercontent.com/102627226/178152687-61b113cf-f276-4aa1-9c40-9ae6c2fa39e8.png)

## To Start Application

### Step 1 : Installation

- To run application follow the installation process of cloning this repository

```
git@github.com:zahrahaji10/e-commerce-sequelise.git
```

- Change directory into the new cloned repository

```
cd e-commerce-sequelise
```

- install the required packages for the application

```
npm install

```

### Step 2 : Database set-up

- The database name for this application is "ecommerce_db".To connect to the database first set up the environment variables, to do this in the root src folder create a .env file. There is an .env.SAMPLE file which you will need to copy the empty template. Then enter the following

```
DB_HOST= ( enter your host details such as "localhost" )
DB_USER= (enter your user details such as  "root")
DB_PASSWORD= (enter your mysql password)
DB_NAME= "ecommerce_db"
```

- To create the connection, open integrated terminal from the db folder and type the following command line. This will promote a password, which is db password. This will create a "ecommerce_db" database in your MySQL workbench.

```
mysql -u root -p
```

- Then enter the following command to scheme the tables in your database.In you workbench this, will create 4 empty tables; project; Category, Products, Tags and ProductTags under the database you created.

```
source schema.sql
```

- To seed the database run the following command line bellow, make sure to open a new integrated terminal in the src folder. When you check your workbench, the tables will no longer be empty.

```
npm run seeds
```

### Step 3 : Launch Server

- To launch the server, run these command bellow on the terminal.

```
nmp run start
nmp run dev

```

### step 4 :

- Once the database is connect and the server is running, you can use postman to test the API endpoints of this application.

<details>
  <summary>Click for routes for all the endpoints </summary>

## Postman collection

{
"info": {
"\_postman_id": "4972b1ac-f01b-4020-9188-225f082200e9",
"name": "e-commerce",
"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
"\_exporter_id": "21648139"
},
"item": [
{
"name": "get all categories",
"protocolProfileBehavior": {
"disableBodyPruning": true
},
"request": {
"method": "GET",
"header": [],
"body": {
"mode": "raw",
"raw": "",
"options": {
"raw": {
"language": "json"
}
}
},
"url": {
"raw": "http://localhost:3001/api/categories/",
"protocol": "http",
"host": [
"localhost"
],
"port": "3001",
"path": [
"api",
"categories",
""
]
}
},
"response": []
},
{
"name": "get category by id",
"protocolProfileBehavior": {
"disableBodyPruning": true
},
"request": {
"method": "GET",
"header": [],
"body": {
"mode": "raw",
"raw": "",
"options": {
"raw": {
"language": "json"
}
}
},
"url": {
"raw": "http://localhost:3001/api/categories/1",
"protocol": "http",
"host": [
"localhost"
],
"port": "3001",
"path": [
"api",
"categories",
"1"
]
}
},
"response": []
},
{
"name": "create a category",
"request": {
"method": "POST",
"header": [],
"body": {
"mode": "raw",
"raw": "{\r\n \"category_name\": \"\"\r\n}",
"options": {
"raw": {
"language": "json"
}
}
},
"url": {
"raw": "http://localhost:3001/api/categories/",
"protocol": "http",
"host": [
"localhost"
],
"port": "3001",
"path": [
"api",
"categories",
""
]
}
},
"response": []
},
{
"name": "update a category",
"request": {
"method": "PUT",
"header": [],
"body": {
"mode": "raw",
"raw": "{\r\n \"category_name\": \"\"\r\n}",
"options": {
"raw": {
"language": "json"
}
}
},
"url": {
"raw": "http://localhost:3001/api/categories/6",
"protocol": "http",
"host": [
"localhost"
],
"port": "3001",
"path": [
"api",
"categories",
"6"
]
}
},
"response": []
},
{
"name": "delete a specific category",
"request": {
"method": "DELETE",
"header": [],
"body": {
"mode": "raw",
"raw": "",
"options": {
"raw": {
"language": "json"
}
}
},
"url": {
"raw": "http://localhost:3001/api/categories/1",
"protocol": "http",
"host": [
"localhost"
],
"port": "3001",
"path": [
"api",
"categories",
"1"
]
}
},
"response": []
},
{
"name": "get all prducts",
"protocolProfileBehavior": {
"disableBodyPruning": true
},
"request": {
"method": "GET",
"header": [],
"body": {
"mode": "raw",
"raw": "",
"options": {
"raw": {
"language": "json"
}
}
},
"url": {
"raw": "http://localhost:3001/api/products/",
"protocol": "http",
"host": [
"localhost"
],
"port": "3001",
"path": [
"api",
"products",
""
]
}
},
"response": []
},
{
"name": "get product by id",
"protocolProfileBehavior": {
"disableBodyPruning": true
},
"request": {
"method": "GET",
"header": [],
"body": {
"mode": "raw",
"raw": "",
"options": {
"raw": {
"language": "json"
}
}
},
"url": {
"raw": "http://localhost:3001/api/products/1",
"protocol": "http",
"host": [
"localhost"
],
"port": "3001",
"path": [
"api",
"products",
"1"
]
}
},
"response": []
},
{
"name": "create a product",
"request": {
"method": "POST",
"header": [],
"body": {
"mode": "raw",
"raw": "{\r\n \"product_name\": \"\",\r\n \"price\": \"\",\r\n \"stock\": \"\",\r\n \"category_id\": \"\"\r\n}\r\n",
"options": {
"raw": {
"language": "json"
}
}
},
"url": {
"raw": "http://localhost:3001/api/products/",
"protocol": "http",
"host": [
"localhost"
],
"port": "3001",
"path": [
"api",
"products",
""
]
}
},
"response": []
},
{
"name": "update a specific product",
"request": {
"method": "PUT",
"header": [],
"body": {
"mode": "raw",
"raw": "{\r\n \"product_name\": \"\",\r\n \"price\": \"\",\r\n \"stock\": \"\",\r\n \"category_id\": \"\"\r\n}\r\n",
"options": {
"raw": {
"language": "json"
}
}
},
"url": {
"raw": "http://localhost:3001/api/products/5",
"protocol": "http",
"host": [
"localhost"
],
"port": "3001",
"path": [
"api",
"products",
"5"
]
}
},
"response": []
},
{
"name": "delete a specific product",
"request": {
"method": "DELETE",
"header": [],
"body": {
"mode": "raw",
"raw": "{\r\n \"id\":\"1\"\r\n}",
"options": {
"raw": {
"language": "json"
}
}
},
"url": {
"raw": "http://localhost:3001/api/products/1",
"protocol": "http",
"host": [
"localhost"
],
"port": "3001",
"path": [
"api",
"products",
"1"
]
}
},
"response": []
},
{
"name": "get all tags",
"protocolProfileBehavior": {
"disableBodyPruning": true
},
"request": {
"method": "GET",
"header": [],
"body": {
"mode": "raw",
"raw": "",
"options": {
"raw": {
"language": "json"
}
}
},
"url": {
"raw": "http://localhost:3001/api/tags/",
"protocol": "http",
"host": [
"localhost"
],
"port": "3001",
"path": [
"api",
"tags",
""
]
}
},
"response": []
},
{
"name": "get a tag by id",
"protocolProfileBehavior": {
"disableBodyPruning": true
},
"request": {
"method": "GET",
"header": [],
"body": {
"mode": "raw",
"raw": "",
"options": {
"raw": {
"language": "json"
}
}
},
"url": {
"raw": "http://localhost:3001/api/tags/1",
"protocol": "http",
"host": [
"localhost"
],
"port": "3001",
"path": [
"api",
"tags",
"1"
]
}
},
"response": []
},
{
"name": "create a tag",
"request": {
"method": "POST",
"header": [],
"body": {
"mode": "raw",
"raw": "{\r\n \"tag_name\": \"\"\r\n}",
"options": {
"raw": {
"language": "json"
}
}
},
"url": {
"raw": "http://localhost:3001/api/tags/",
"protocol": "http",
"host": [
"localhost"
],
"port": "3001",
"path": [
"api",
"tags",
""
]
}
},
"response": []
},
{
"name": "update a specific tag",
"request": {
"method": "PUT",
"header": [],
"body": {
"mode": "raw",
"raw": "{\r\n \"tag_name\": \"\"\r\n}",
"options": {
"raw": {
"language": "json"
}
}
},
"url": {
"raw": "http://localhost:3001/api/tags/9",
"protocol": "http",
"host": [
"localhost"
],
"port": "3001",
"path": [
"api",
"tags",
"9"
]
}
},
"response": []
},
{
"name": "delete a specific tag",
"request": {
"method": "DELETE",
"header": [],
"body": {
"mode": "raw",
"raw": "",
"options": {
"raw": {
"language": "json"
}
}
},
"url": {
"raw": "http://localhost:3001/api/tags/1",
"protocol": "http",
"host": [
"localhost"
],
"port": "3001",
"path": [
"api",
"tags",
"1"
]
}
},
"response": []
}
]
}

</details>

## Video Demonstration

## Questions

For any questions about this application, you can contact me on the following;

- Personal E-mail : zahrahhaji10@gmail.com

- GitHub profile [Click Here](https://github.com/zahrahaji10)

```

```

```

```
