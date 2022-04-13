const _ = require('lodash');

const object2 =  {
   "age": 3,
   "name": "Curtis Greene",
   "email": "curtis.greene@zaj.ca",
};

const {age, ...noAgeObject2} = object2;

console.log(noAgeObject2);