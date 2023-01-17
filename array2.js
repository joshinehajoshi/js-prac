// Write a simple JavaScript program to join all elements of the following array into a string

const array2 = (n) => {
    console.log(n.join("+"));
    console.log(n.join("-"));
    console.log(n.join(","));
};

array2(["aa","bb","cc"]);