// let url = "https://catfact.ninja/fact";

// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let re = await getFact();

//     // console.log(re);

//     let p = document.querySelector("#Result");
//     p.innerText = re;
// });

// async function getFact() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch (e) {
//         console.log("Error", e);
//         return "Fact nahi mila";
//     }
// }

// let url2 = "https://dog.ceo/api/breeds/image/random";

// let btn = document.querySelector("button");

// btn.addEventListener("click" , async ()=>{
//  let link = await getimg();

//  let img = document.querySelector("#Result");
//  img.setAttribute("src",link);
// });

// async function getimg() {
//     try{
//         let res = await axios.get(url2);
//         return res.data.message;
//     }
//     catch(e){
//         console.log("Image was not found",e);
//         return "/";
//     }
// }

// let url3 = "https://dog.ceo/api/breeds/image/random";

// async function API() {
//   try {
//     let res = await axios.get(url3);
//     console.log(res.data);
//   } catch (err) {
//     console.log(err);
//   }
// }

let url4 = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let val = document.querySelector("input").value;
  console.log(val);
  let result = await Get(val);
  Fin(result);
});
function Fin(result) {
  let list = document.querySelector("#list");
  list.innerText ="";
  for (resu of result) {
    console.log(resu.name);

    let li = document.createElement("li");
    li.innerText = resu.name;
    list.appendChild(li);
  }
}

async function Get(val) {
  try {
    let res = await axios.get(url4 + val);
    return res.data;
  } catch (err) {
    return err;
  }
}
