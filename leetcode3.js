function validAnagram(str1, str2){
    const a = str1.split("").sort();
    const b = str2.split("").sort();
    if(a.length === b.length) {
      for(let i=0; i<a.length; i++) {
          if(a[i] !== b[i]) {
            console.log(false);
            break;
            
          }
      }
      console.log(true)
    }
    else {
    console.log(false)
    }
    }
    validAnagram("neha", "ehna");
    validAnagram("neha", "joshi");