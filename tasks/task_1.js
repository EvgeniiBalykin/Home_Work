const { data1 } = require('./constants');

const _ = require('lodash');

const userIndex = _.findIndex(data1, {"age": 23});

console.log(userIndex);

