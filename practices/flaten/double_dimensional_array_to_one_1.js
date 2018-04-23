'use strict';

function double_to_one(collection){
  //在这里写入代码
  let result = [];
  for(var i =0; i < collection.length; i++){
    var type = typeof(collection[i]);
    //console.log(type);
    // if(type == "number" && "string" && "boolean"){
    //   result.push(collection[i]);
    //  // console.log(collection[i])
    //  // console.log("--mubner and string and boolean---")
    // }
    if(type == "object"){
      for(var j = 0; j < collection[i].length; j++){
        result.push(collection[i][j]);
        console.log(collection[i][j])
        console.log("--object---")
      }
    }
    else{
      result.push(collection[i]);
    }
    //if(type = function){}

  }
  return result;
}


module.exports = double_to_one;
