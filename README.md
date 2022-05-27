# Introduction

This application was created during Trybe Back-end Module. It is a API using the MSC architecture developed with NodeJS, Express and Nodemon for the management of a blog application. Here, the Sequelize was used in order to experience the developed of CRUD applications using an ORM. 

# Exploring the application

1) First of all clone the repository via <code> git clone </code>

2) Then install the dependencies, if they exist via <code> npm install </code>

3) Pay attention that you should create a .env file in the root for environment configuration. There some information regarding MySQL should be completed, such as: host, user, password and your port

`host: process.env.HOSTNAME`

`user: process.env.MYSQL_USER`

`password: process.env.MYSQL_PASSWORD`

4) Attention that this projects uses Sequelize, so start the database running the command <code> npm run prestart </code>

5) After this run the command <code> npm seed </code> to populate the database

6) To start the project just type <code> npm start </code> or <code> npm run dev </code>

7) Have fun 

# Updates

This project will receive updates as some tasks provided by Trybe are still incomplete and, let's be honest, it is always possible to do better. See you!
