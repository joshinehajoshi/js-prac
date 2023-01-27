 // square pattern in js
 function abc(arr){
    let str = "";
    for (let i=0; i<arr.length; i++){
      for(let j=0; j<arr.length; j++){
        str += "*  "
      }
      str += "\n"
    }
    console.log(str)
  }
  
  abc([1,2,3,4,5])