//Valid Parentheses

function abc(s) {
    const sArray = s.split("");
    const stack = [];
    for(let i of sArray){
        if(i === "(" || i === "[", i === "{"){
            stack.push(i);
        } 
        else {
            let top = stack[stack.length - 1];
            if(i === ")" && top ==="(" || i === "]" && top ==="[" || i === "}" && top ==="{"){
                stack.pop()
            } else {
                console.log(false)
            }
        }
    }
    console.log("neha",stack.length === 0)
}
abc("[{}]")