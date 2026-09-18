let url = "https://catfact.ninja/fact";

let p = document.querySelector("#Result");


let btn = document.querySelector("button");
  btn.addEventListener("click" , async()=>{
  let Result = await.Api();

    });


async function Api() {
  try {
    let res = await axios.get(url);
    console.log(res.data.fact);
  } catch (err) {
    console.log("ERROR", err);
  }
}
Api();