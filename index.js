document.getElementById("b1").onclick=function(){
    let x=document.getElementById("sel1").value;
    x=Number(x);
    let y= ((x-32)*5)/9;
    document.getElementById("d").innerHTML= "Temperatur in Celcius is " + y;

}