// let jsonres = {
//   fact: "Tigers are excellent swimmers and do not avoid water.",
//   length: 53,

// };

// console.log(jsonres);
// console.log(jsonres.fact);

// let student = {
//   name : "Shubham",
//   class : 4,
//   rollNO: 2403600100124
// };
// let url = "https://catfact.ninja/fact";
// fetch(url)
//   .then((res)=>{
//     console.log(res);
//     return res.json();
//   })
//   .then((data)=>{
//     console.log(data.fact);
//      return fetch(url);
//   })
//   .then((res)=>{
//     console.log(res);
//   })
//   .catch((err)=>{
//     console.log("Error", err);
//   });

let url = "https://catfact.ninja/fact";

async function getfacts(){
  let res = await fetch(url);
  let final = await res.json();
  console.log(final.fact);
}