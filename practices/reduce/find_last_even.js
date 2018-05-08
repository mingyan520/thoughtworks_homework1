'use strict';

function find_last_even(collection) {
  //在这里写入代码
  var last_even = 0;
  for(var i = collection.length; i >= 0; i--){
    if(collection[i] % 2 == 0){
      last_even = collection[i];
      break;
    }
  }
  return last_even;
}

module.exports = find_last_even;
