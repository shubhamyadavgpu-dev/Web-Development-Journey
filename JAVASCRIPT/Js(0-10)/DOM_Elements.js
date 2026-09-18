let btn = document.querySelectorAll("button");
console.dir(btn);
btn.onclick = function(){
    // console.log("button was Clicked");
    alert("button was Clicked");
}
for(btn of btn){
    btn.onclick = say;
    btn.onmouseenter = function(){
        console.log("You entered");
    }
}
for(btn of btn){
    // btn.addEventListener("click" , sayH);
    // btn.addEventListener("click" , sayW);

    btn.addEventListener("dblclick" , function(){
        console.log("You clicked Doubled Times");
    });
}
function sayH(){
    alert("Hello!");
}
function sayW(){
    alert("World!");
}

let btn = document.querySelector("Button");
btn.addEventListener("click" , function(){
//    console.log("Generate Random button");
   let h1 = document.querySelector("h1");
   let random = RandomColor();
   h1.innerText = random;

   let div = document.querySelector("div");
   div.style.backgroundColor = random;
   console.log("color is changed");
});

function RandomColor(){
let red = Math.floor(Math.random()* 255);
let blue = Math.floor(Math.random()* 255);
let green = Math.floor(Math.random()* 255);

let color = `rgb(${red} , ${blue} , ${green})`;
return color;
}

let p = document.querySelector("p");
p.addEventListener("click" , function(){
   console.log("Para was click");
})

let div = document.querySelector("div");
div.addEventListener("mouseenter" , function(){
    console.log("Mouse entered");
})

let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");

function This(){
     console.log(this.innerText);
 //   console.dir(this);
    this.style.backgroundColor = "red";
}

p.addEventListener("click" , This);
h1.addEventListener("click" , This);
h3.addEventListener("click" , This);
btn.addEventListener("click" , This);

let button = document.querySelector("button");
button.addEventListener("click" , function(event){
    console.log(event);
    console.log("Button is clicked");
})
let inp = document.querySelector("input");
inp.addEventListener("keydown",function(event){
//     console.log(event.code);
//      console.log(event.key);
//   console.log("Key was pressed");

  if(event.code == "ArrowUp"){
    console.log("Press key UP");
  }
  else if(event.code == "ArrowDown"){
    console.log("Press key DOWN");
  }
  else if(event.code == "ArrowLeft"){
    console.log("Press key LEFT");
  }
  else if(event.code == "ArrowRight"){
    console.log("Press key RIGHT");
  }
})

let form = document.querySelector("form");
form.addEventListener("submit",function(event){
 //console.log("Form is submitted");
 event.preventDefault();
 alert("Form is submitted");
})

let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  //console.log("Form is submitted");
  event.preventDefault();
  // alert("Form is submitted");
  let input = document.querySelector("#user");
 let inpu = document.querySelector("#pass");
console.log(input);
console.log(input.value);
console.log(inpu);
 console.log(inpu.value);

alert(`hi ${input.value} your password is ${inpu.value}`);
});

More events

let more = document.querySelector("#user");
let p = document.querySelector("p");

more.addEventListener("change",function(event){
    event.preventDefault();
    console.log("input is changed");
    console.log("Final value is :",more.value);
})
more.addEventListener("input",function(event){
    event.preventDefault();
    console.log("input is changed");
    console.log("Final value is :",more.value);
    p.innerText = more.value;
})
Qs1.Try out the following events in Event Listener on your own:-mouseout-keypress-Scroll-load[Use MDN for help]

Mouse out
let btn = document.querySelector("button");
btn.addEventListener("mouseout",function(){
    console.log("Mouse out from btn");
});
let heading = document.querySelector("h1");
heading.addEventListener("mouseout",function(){
    console.log("Mouse out from headings");
});
let inp = document.querySelector("#user");
inp.addEventListener("keypress",function(){
    console.log("Key is press");
});
let p = document.querySelector(".box");
p.addEventListener("scroll",function(){
    console.log("para is scroll");
});
let img = document.querySelector("#img");
img.addEventListener("load",function(){
    console.log("Image is Load");
});
img.src="cybercriminal.jpg";
Qs2.Create a button on the page using JavaScript.Add an event listener to the button that changes the button’s color to green when it is clicked

let btn = document.createElement("button");

btn.innerText = "Click Me";
console.log(btn);
document.body.append(btn);

btn.addEventListener("click",function(){
     btn.style.color="red";
      btn.style.backgroundColor="green";
       btn.style.width="300px";
       btn.style.height="300px";
});
.Qs3.Create an input element on the page with a placeholder ”enter your name”and an H2 heading on the page inside HTML.The purpose of this input element is to enter a user ’s name so it should only input letters from a-z,A-Z and space(all other characters should not be detected).When ever the user inputs their name,their input should be dynamically visible inside the heading.[Please note that no other character apart from the allowed characters should be visible in the heading]

let input = document.querySelector("#name");

input.addEventListener("input", function () {
  this.value = this.value.replace(/[^A-Za-z]/g, "");
});

let h2 = document.querySelector("h2");
input.addEventListener("input", function () {
  h2.innerText = input.value;
});
