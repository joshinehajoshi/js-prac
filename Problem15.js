//sum to zero 

function abc(arr){
    for(let i of arr) {
      for(let j=0; j<arr.length-1; j++){
        if(i + arr[j] === 0){
          console.log([i, arr[j]])
        }
      }
    }
  }