const id = document.getElementById('id');
const pw = document.getElementById('pw');
const chpw = document.getElementById('chpw');
let saveid = null;
let savepw = null;
let saveshpw = null;
const getid = ()=>{
    saveid = id.value;
}
const getpw = ()=>{
    savepw = pw.value;
}
const getchpw = ()=>{
    savechpw = chpw.value;
}
const al = ()=>{
    alert(`id: ${saveid} pw: ${savepw}님 환영합니다.`);
}
let joinpg = document.getElementById('join');
joinpg.addEventListener("click", function(){
  window.location.href = "./join.html";
});