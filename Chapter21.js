const add = (a,b)=>{
    return a + b ;
};

const sub = (c ,d) =>{
    return c-d;
}
const mul = ( e ,f)=>{
    return e * f ;
}
module.exports = {
    add, //"I want other files to be able to use add."
    sub,
    mul,
};
