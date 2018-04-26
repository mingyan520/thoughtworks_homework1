'use strict';
var rank_asc = function(collection){
  //var result = [];
  
  // for(var i = 0; i < collection.length; i++){
  //   //var temp = 0;
  //   for(var j =0; j < collection.length-1-i; j++){
  //     if(collection[j] < collection[j+1]){
        
  //       var temp = collection[j];
  //       collection[j] = collection[j+1];
  //       collection[j+1] = temp; 
  //    }
  //  }
  // }
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
