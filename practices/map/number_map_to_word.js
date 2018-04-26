'use strict';
var number_map_to_word = function(collection){
  var result = [];
  for(var i = 0; i < collection.length; i++){
    collection[i] += 96;
    result[i] = String.fromCharCode(collection[i])
  }
  return result;
};

module.exports = number_map_to_word;
