'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  let result = [collection[0]];
  let arr = [];
  for(var i = 1; i < collection.length; i++){
    console.log(collection[i]);
    console.log("---------");
    var count = 0;
    for(var j = 0; j < result.length; j++){
      if(result[j]===collection[i]){
        count++;
        break
      }
    }
    if(count === 0){
      result.push(collection[i]);
    }
  }
  console.log(result);
  return result;

  //let result = [];
// //let arr = [];
//   for(var i = 0; i < collection.length; i++){
//     console.log(collection[i]);
//     console.log("---------");
//     if(!result[collection[i]]){
//     //if(!(result[i]===collection[i])){
//     result.push(collection[i]);
//     //result[collection[i]]=collection[i];
//     console.log(result[i]);
//     }
//   }
//     console.log(result);
//     return result;
  
  
}
// var collection = [1, 1,7, 1, 2, 2,5, 4];
// choose_no_repeat_number(collection);

module.exports = choose_no_repeat_number;