'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  // var num = 0;
  for(var i = 0; i < collection.length; i++){
    if(collection[i] === element){
      var num = i;
      break;
    }
  }
  return num;
}

module.exports = calculate_elements_sum;


