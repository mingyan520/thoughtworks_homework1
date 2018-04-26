'use strict';
var rank_desc = function(collection){
  //排序法
  for(var i = 0; i < collection.length; i++){
    for(var j = i+1; j > 0; j-- ){
      if(collection[j] < collection[j-1]){
        var temp = collection[j-1];
        collection[j-1] = collection[j];
        collection[j] = temp;
      }
    }
  }
  return collection;
};

module.exports = rank_desc;
