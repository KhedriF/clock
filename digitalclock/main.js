let first=document.getElementById("first");
let sec=document.getElementById("sec");
let third=document.getElementById("third");
let first1=document.getElementById("first1").offsetTop;
let first2=document.getElementById("first2").offsetTop;
let first3=document.getElementById("first3").offsetTop;

first.addEventListener("click",function () {
window.scrollTo({
    top:first1,
    behavior:'smooth'
})
});
sec.addEventListener("click",function () {
    window.scrollTo({
        top:first2,
        behavior:'smooth'
    })
});
third.addEventListener("click",function () {
    window.scrollTo({
        top:first3,
        behavior:'smooth'
    })
});

let demo=document.getElementById("demo");
function clock() {
let data=new Date();
demo.innerText=data.toLocaleTimeString();
}
setInterval(clock,1000);