const _ = require('lodash');

const object = {
   "age": 3,
   "name": "Curtis Greene",
   "email": "curtis.greene@zaj.ca",
};

const noAgeObject = _.omit(object, ["age"]);

console.log(noAgeObject);