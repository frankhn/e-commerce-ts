## E-Commerce Node JS Challenge


 This  is a full functioning Api endpoints for E-commerce platform that allows you to perform all basic features of an E-commerce platform.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See Installation, Running and deployment for more details.
This Application is built in nodeJS/Typescript.


### Prerequisites

E-commerce is built in node js with ES6 format. to get up the application running you need to 
install the following
```
download the latest version of node js 
```

### Installing

A step by step series of examples that tell you how to get a development env running

You have to follow the follow this procedure to get started


You need MYSQL or POSTURES for data persistance
```
```
got to the Version control and clone down the application
```
run git clone https://github.com/frankhn/e-commerce-ts.git

```
run:  npm install

```
the server will automatically install all the needed packages in the application
```


You need a an API development platform  like POSTMAN or Insomnia

```
For getting data from the app you will have to access every single API endpoint
like  localhost:8000/api/
```
```Then you'll be able to get a bunch of JSON data:

See the example below: 

  {
    "status": 200,
    "result": {
        "id": 32,
        "name": "St. Patrick",
        "description": "This stamp commemorated the 1500th anniversary of the revered saint's death. Is there a more perfect St. Patrick's Day T-shirt?!",
        "price": "20.50",
        "discounted_price": "17.95",
        "image": "st-patrick.gif",
        "image_2": "st-patrick-2.gif",
        "thumbnail": "st-patrick-thumbnail.gif",
        "display": 0
    }
}
```

## Running the tests

run : npm test

## Deployment

You'll need to have a hosting account on you hosting provider
i would recommend HEROKU which is the hosting i used on this app, depending on you hosting provider you'll have go under certain processes to get the application up and running 

Demo:

heroku: https://turing-ecommerce-challenge.herokuapp.com/


You can read more on how to host a node js application on heroku https://devcenter.heroku.com/articles


## Built With

* [Node js] [Typescript] [Sequelize]
