'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  let result = [];
  for(var i = 0; i < collection_a.length; i++){
    var count = 0;
    for(var j =0; j < collection_b.length; j++){
      if(collection_a[i] % collection_b[j] == 0){
        count++;
        break;
      }
    }
    if(count == 1){
      result.push(collection_a[i]);
    }
  }
  return result;
}

module.exports = choose_divisible_integer;

var collection_a = [4,7,9,25,16,21,64,32,35,49];
var collection_b = [2,3,5];