// 1 0 0 0 1 
// 0 1 0 1 0 
// 0 0 1 0 0 
// 0 1 0 1 0 
// 1 0 0 0 1 
 

function abc(arr){
    let str = "";
    for(let i=0; i<arr.length-1;i++){
      for(let j=0; j<arr.length-1; j++){
        if(i===j || i+j === arr.length-2){
          str += "1 "
        }
        else {
          str +="0 "
        }
      }
      str += "\n"
    }
    console.log(str)
    }
    
    abc([1,2,3,4,5,6])