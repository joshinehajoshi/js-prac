function abc(arr){
    let str = "";
    for(let i=arr.length-1; i>=0; i--){
      for(let j=i; j< arr.length; j++){
        str += "* "
      }
      str += "\n"
    }
    console.log(str);
    }
    
    abc([1,2,3,4,5])