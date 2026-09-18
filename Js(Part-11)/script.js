// function one(){
//     return 1;
// }
// function two(){
//     return one()+one();
// }
// function three(){
//     return two() + one();
// }

// console.log(three());

// setTimeout(()=>{
//     console.log("Hello Creator and Destroyer");
// } , 2000);
// console.log("SetTimeOUt is completed");

let p = document.querySelector("p");
// let h1 = document.querySelector("h1");

function changecolor(color , delay){
  return new Promise((resolve , reject) =>{
  setTimeout(()=>{
    p.style.backgroundColor=color;
   resolve("color changed");
  } , delay);
});
}

// changecolor("red" , 1000 , ()=>{
//     changecolor("pink" , 1000 , ()=>{
//        changecolor("green" , 1000 , ()=>{
//        });
//     });
// });
// setTimeout(()=>{
//     p.style.backgroundColor="red";
// } , 2000);
// setTimeout(()=>{
//     p.style.backgroundColor="black";
// } , 4000);
// setTimeout(()=>{
//     p.style.backgroundColor="white";
// } , 6000);
// setTimeout(()=>{
//     p.style.backgroundColor="green";
// } , 8000);

// function database(data, success, failure) {
//   let internetspeed = Math.floor(Math.random() * 10) + 1;
//   if (internetspeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// database(
//   "hello world! ",
//   () => {
//     console.log("Success  : Chandra shekhar is great Leader and Planner");
//     database(
//       "shubham! ",
//       () => {
//         console.log("Success2 : Raj guru and Sukh dev was great peoples");
//         database(
//             "Bhagat!",
//             ()=>{
//                 console.log("Success3 : Bhagat singh was always alive");
//             },
//             ()=>{
//                 console.log("Failure3 : data was not stored");
//             }
//         )
//       },
//       () => {
//         console.log("Failure2 : data was not stored");
//       },
//     );
//   },
//   () => {
//     console.log("Failure : your data was not stored");
//   },
// );

// function database(data) {
//   return new Promise((resolve, reject) => {
//     let internetspeed = Math.floor(Math.random() * 10) + 1;
//     if (internetspeed > 4) {
//       resolve("Success : your data was saved");
//     } else {
//       reject("Data is enough");
//     }
//   });
// }
// let request = database("Velocity visuals")
// request
//    .then(() =>{
//   console.log("Promise was solved");
// })
//   .catch(() =>{
//     console.log("Promise was rejected");
//   })

//IMPROVED VERSION OF PROMISES
// database("Hello")
//   .then((result) => {
//     console.log("Data1 is saved");
//     console.log("result of promise",result);
//     return database("hello kaise hain aap log");
//   })
//     .then((result) => {
//       console.log("Data2 was saved");
//       console.log("result of promise",result);
//       return database("Ummed hain badhiya hi honge");
//     })
//     .then(()=>{
//       console.log("Data3 was saved");
//     })
//   .catch(() => {
//     console.log("Promises are rejected");
//   });
