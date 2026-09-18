// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click" , function(){
//   console.log("div was clicked");
// });

// ul.addEventListener("click" , function(event){
//     event.stopPropagation();
//   console.log("ul was clicked");
// });

// for(li of lis){
// li.addEventListener("click" , function(event){
//     event.stopPropagation();
//   console.log("li was clicked");
// });
// };

let h1 = document.querySelector("h1");
let button = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
button.addEventListener("click" , function(){
    let item = document.createElement("li");
    item.innerText = input.value;

   let delbtn = document.createElement("button");
   delbtn.innerText = "delete";
   delbtn.classList.add("delete");

item.appendChild(delbtn);
    ul.appendChild(item);
  //  console.log(input.value);
    input.value = "";
})

ul.addEventListener("click" , function (event) {
    if(event.target.nodeName == "BUTTON"){
        let ite = event.target.parentElement;
        ite.remove();
        console.log("Delete");
    }

    //console.log("Button was clicked");
});

// let btns = document.querySelectorAll(".delete");
// for(delbtn of btns){
//   delbtn.addEventListener("click",function(){
//     let par = this.parentElement;
//     console.log(par);
//     par.remove();
//   });
// }