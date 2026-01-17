//fetch api Base3.html

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(function(rawdata){
//     return  rawdata.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })

//Optimized
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
