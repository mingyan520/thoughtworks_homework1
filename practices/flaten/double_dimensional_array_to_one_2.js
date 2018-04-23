'use strict';

function double_to_one(collection) {

  //在这里写入代码
  let result = [];
  let arr = [];
  for(var i = 0; i < collection.length; i++){
    var type = typeof(collection[i]);
    if(type == "object"){
      for(var j =0; j < collection[i].length; j++){
        arr.push(collection[i][j]);
      }
    }else{
      arr.push(collection[i]);
    }
  }
  for(var z = 0; z < arr.length; z++){
    var count = 0;
    for(var k = 0; k < result.length; k++){
    
      if(result[k] == arr[z]){
        count ++;
        break;
      }
    }
    if(count == 0){
      result.push(arr[z]);
    }
  }
  
  return result;

}

module.exports = double_to_one;
