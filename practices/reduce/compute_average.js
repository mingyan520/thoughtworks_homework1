'use strict';

function compute_average(collection) {
  //在这里写入代码
  //var average;
  var sum_collection = 0;
  for(var i = 0; i < collection.length; i++){
    sum_collection += collection[i]
  }
  return sum_collection/collection.length
}

module.exports = compute_average;

