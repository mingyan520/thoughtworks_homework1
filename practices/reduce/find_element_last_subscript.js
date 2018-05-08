'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  for(var i = collection.length; i >= 0; i--){
    if(collection[i] === element){
      var num = i;
      break;
    }
  }
  return num;
}

module.exports = calculate_elements_sum;
