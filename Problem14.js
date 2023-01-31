    
//    *
//   **
//  ***
// ****
 

function abc(arr){
    let str = "";
    for(let i=arr.length-1; i>=0; i--){
      for(let j=1; j< arr.length; j++){
        if(j<=i){
          str += " ";
        }else {
          str += "*"
        }
      }
      str += "\n"
    }
    console.log(str);
    }
    
    abc([1,2,3,4,5])