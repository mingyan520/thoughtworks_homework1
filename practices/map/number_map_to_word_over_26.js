'use strict';
var number_map_to_word_over_26 = function(collection){
  let result = [];
  for(var i = 0; i < collection.length; i++){
    if(collection[i] <= 26){
      collection[i] += 96;
      result[i] = String.fromCharCode(collection[i]);
    }else{
      var k = collection[i] % 26;
      var z = collection[i] / 26;
      k = k + 96;
      z = z + 96;
      //result[i] = "a" + String.fromCharCode(k);
      result[i] = String.fromCharCode(z) + String.fromCharCode(k);
    }
  }
  return result;
};


module.exports = number_map_to_word_over_26;
