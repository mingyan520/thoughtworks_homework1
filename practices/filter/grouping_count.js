'use strict';

function grouping_count(collection) {

  //在这里写入代码
  let result = {};
  let arr =[];
  for(var i = 0; i < collection.length; i++){
    if(!arr[collection[i]]){
      arr[collection[i]] = {};
      arr[collection[i]].key = collection[i];
      arr[collection[i]].value = 1;
    }else{
      arr[collection[i]].value++;
    }
  }
  for(var i in arr){
    result[arr[i].key]=arr[i].value
  }
  return result;
}

module.exports = grouping_count;
