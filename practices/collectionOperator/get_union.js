'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  // let result = [];
  // result = collection_a;
  // for(let i = 0; i < collection_a.length; i++){
  //   result.push(collection_a[i])
  // }
 
  // for(let i = 0; i < collection_a.length; i++){
  //   for(let j = 0; j < collection_b.length; j++){
  //     if(collection_a[i] !== collection_b[j]){
  //       result.push(collection_a[i])
  //     }
  //   }    
  // } 
  // var temp = collection_a + collection_b;

  // for(let i = 0; i < temp.length; i++){
  //   var flag = ture;
  //   var temp2 = temp[i]
  //     if(collection_b[i] === collection_a[j]){
  //       result.push(collection_b[i])
  //     }
  //   }    
  // } 
  let result = [];
  for(let i = 0; i < collection_a.length; i++){
    for(let j = 0; j < collection_b.length; j++){
      if(collection_b[i] !== collection_a[j]){
        result.push(collection_b[i])
      }
    }    
  } 

  return collection_a.concat(result) ; 
}

module.exports = get_union;