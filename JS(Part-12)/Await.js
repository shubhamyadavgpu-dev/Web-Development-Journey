function getnum(){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        let num = Math.floor(Math.random()*10)+1;
        console.log(num);
        resolve();
     },1000)
    });
}

async function demo(){
    await getnum();
    await getnum();
    await getnum();
    await getnum();

}

let p = document.querySelector("p");

function changecolor(color , delay){
  return new Promise((resolve , reject) =>{
  setTimeout(()=>{
    let ran = Math.floor(Math.random()*5)+1;
    if(ran > 3){
        reject("promise rejected");
    }
    p.style.backgroundColor=color;
    console.log(`color change to ${color}`);
   resolve("color changed");
  } , delay);
});
}
async function demo(){
  try{
     await changecolor("red",1000);
   await changecolor("yellow",1000);
   await changecolor("green",1000);
   await changecolor("pink",1000);
   await changecolor("purple",1000);
  } 
  catch{
    let a = 23;
    console.log("Error detected");
    console.log(a);
  }
}