const mybuttom=document.getElementById("mybuttom");
const myLabel=document.getElementById("myLabel");
let radomnum;
const max=6;
const min=1;
mybuttom.onclick=function()
{
 randomnum=Math.floor(Math.random()*max)+min;
 myLabel.textContent=randomnum;
}