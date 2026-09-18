async function greet(){
    Abo.gf();
    return "Hello";
}

greet()
.then((result)=>{
     console.log("Promised was Resolved");
})
.catch(()=>{
    console.log("Promises was Rejected");
})

