const abc = (arr) => {
    const temp = [...arr];
    temp.sort((a,b) => a-b)
    const sNum = temp[temp.length-2];
    const lNum = temp[temp.length-1];
    const sIndexOf = arr.indexOf(sNum);
    const lIndexOf = arr.indexOf(lNum);
    const width = Math.abs(lIndexOf - sIndexOf);
    console.log(width*sNum)
  } 
  
  abc([1,2,3,4,5,6,10,1,4,12]) 