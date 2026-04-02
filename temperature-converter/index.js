const textBox=document.getElementById("textBox");
const tofahreniet=document.getElementById("tofahreniet");
const tocelsius=document.getElementById("tocelsius");
const tresult=document.getElementById("result");
let temp;
function convert() {
    if(tofahreniet.checked)
    {
        temp=Number(textBox.value);
        temp=temp*9/5+32;
        result.textContent=temp.toFixed(1)+"ºF";
    }
    else if(tocelsius.checked)
    {
        temp=Number(textBox.value);
        temp=(temp-32)*(5/9);
        result.textContent=temp.toFixed(1)+"ºC";
    }
    else{
        result.textContent=`select a unit`;
    }

}