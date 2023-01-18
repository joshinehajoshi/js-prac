
// valid palindrom
function abc(s) {
    const temp =  s.replaceAll(/[^a-z0-9]/gi, "");
    console.log("temp",temp)
    const str1 = temp.toLowerCase().split("");
    const str2 = temp.toLowerCase().split("").reverse();
   
    if(str1.length === str2.length) {
      for(let i=0; i<str1.length; i++) {
        if(str1[i] !== str2[i]) {
          console.log(false);
          break;
        }
      }
      console.log(true)
    }
   
   }
   
   abc("ab_a")