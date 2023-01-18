const abc = (arr) => {
    const newArr = [];
    for(let i=0; i<arr.length;i++){
        if(newArr.includes(arr[i])){
            console.log(true);
            break;
        }
        else {
            newArr.push(arr[i])
        }
    }
}

abc([1,2,3,4,5,1])