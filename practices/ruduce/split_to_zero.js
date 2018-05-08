'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  let result = [];
  result[0] = number;
  for(var i = 1; i < result.length + 1; i++){
    if(number > 0){
      result[i] = Math.floor((number - interval) * 100) / 100;
      //result[i] = number - interval;
      number =result[i];
    }
  }
  return result;
}

//split_to_zero(0.8, 0.2);

//var collection_a = [0.8, 0.6, 0.4, 0.2, 0];


module.exports = spilt_to_zero;
