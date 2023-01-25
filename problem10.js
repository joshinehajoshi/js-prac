const arr = [
    {"id":"876558BC",name:"Siva"},
    {"id":"765432BC",name:"Keerthana"},
    {"id":"987120BC",name:"Suma"},
    {"id":"876553BC",name:"Siva"},
    {"id":"876003BC",name:"Pradeep"},
    {"id":"765432BC",name:"Keerthana"},
    {"id":"816563BC",name:"Lakshmi"},
    ]
  
  const result = arr.reduce((finalArray, current) => {
    let obj = finalArray.find((item) => item.id === current.id);
    if(obj) {
      return finalArray
    }
    return finalArray.concat([current])
  },[])
  
  // console.log(student(studentsList));
  console.log(result)
  