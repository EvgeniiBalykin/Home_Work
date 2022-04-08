const { data1, data2 } = require('./constants');

const _ = require('lodash');

const data3 = _.union(data1, data2);

console.log(data3);