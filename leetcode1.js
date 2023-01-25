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

function parent() {
    for(var i=0; i<5; i++){
        function child(a) {
            setTimeout(function(){
                console.log(a)
            }, a*1000)
        }
        child(i)
    }
}
parent()

abc([1,2,3,4,5,1])