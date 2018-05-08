'use strict';
var rank_asc = function(collection){
  //var result = [];
  //冒泡法
  //https://www.cnblogs.com/onepixel/articles/7674659.html  十大经典排序法
  // for(var i = 0; i < collection.length; i++){
  //   for(var j =0; j < collection.length-1-i; j++){
  //     if(collection[j] < collection[j+1]){
  //       var temp = collection[j];
  //       collection[j] = collection[j+1];
  //       collection[j+1] = temp; 
  //    }
  //  }
  // }
  //插入法
  for(var i = 0; i < collection.length; i++){
    for(var j = i+1; j > 0; j-- ){
      if(collection[j-1] < collection[j]){
        var temp = collection[j-1];
        collection[j-1] = collection[j];
        collection[j] = temp;
      }
    }
  }
  return collection;
};

module.exports = rank_asc;
