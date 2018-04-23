'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  let result = collection_a;
  for(let i = 0; i < collection_b.length; i++) {
    let count = 0;
    for(let j = 0; j < collection_a.length; j++){
      if(collection_b[i] == collection_a[j]){
        count=count+1;
       // result.push(collection_b[i])
        break;
      }
    }
    if(count == 0){
      result.push(collection_b[i])
    }  
   // return count;
  }
 return result ; 
}

module.exports = get_union;