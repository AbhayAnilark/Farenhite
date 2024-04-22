
document.getElementById("b1").onclick=function(){
    let x=document.getElementById("sel1").value;
    x=Number(x);
    let y= ((x-32)*5)/9;
    y=y.toFixed(2);

    document.getElementById("d").innerHTML= "INPUT : " + x + "<br>";
    document.getElementById("d").innerHTML+= "Temperatur in Celcius is " + y;

}
document.getElementById("b2").onclick=function(){
    let x=document.getElementById("sel1").value;
    x=Number(x);
    let y= 9*x/5 + 32; 
    y=y.toFixed(2);

    document.getElementById("d").innerHTML= "INPUT : " + x + "<br>";
    document.getElementById("d").innerHTML+= "Temperatur in Celcius is " + y;

}