'use strict';

function grouping_count(collection) {

  //在这里写入代码
  let result = {};
  for(var i = 0; i < collection.length; i++){
    for(var j = 0; j < result.length ; j++){
      if(collection[i] !== result[j].key){
        result[j].key = collection[i];
        result[j].value = 1;
      }else{
        result[j].value +=1;
      }
    }
  }
  return result;
}

module.exports = grouping_count;
