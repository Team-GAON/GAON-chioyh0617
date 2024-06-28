const id = document.getElementById('id');
const pw = document.getElementById('pw');
const chpw = document.getElementById('chpw');

let saveid = null;
let savepw = null;
let savechpw = null;

const getid = ()=>{
    saveid = id.value;
    console.log(saveid)
}
const getpw = ()=>{
    savepw = pw.value;
    console.log(savepw)
}
const getchpw = ()=>{
    savechpw = chpw.value;
    console.log(savechpw)
}

const al = ()=>{
    if(savepw != savechpw)
        alert("비밀번호가 맞지 않습니다.")
    else{
        alert(`id: ${saveid} pw: ${savepw} ${savechpw}님 환영합니다.`);
    }
    }
