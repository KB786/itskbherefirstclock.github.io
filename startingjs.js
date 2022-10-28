let clockmain= document.getElementById("clockholder");
let a= new Date();
if (a.getHours()<12 && a.getHours()>0){
        c = a.getHours();
        d = "AM";
}
if(a.getHours()==0){
    c=a.getHours()+12;
    d="AM";
}
    if(a.getHours()==12 ){
        c =a.getHours();
        d= "PM";
    }
    if(a.getHours>12){
        c=a.getHours()-12;
        d="PM";
    }

let b  = a.toLocaleDateString()+ "   " + c +":" + a.getMinutes() +":"+a.getSeconds() +" " + d;
console.log(b);
// clockmain.appendChild(a);

let clock= document.querySelectorAll("#ClockMainScript");
clock.innerHTML = b;
// const colorresp = document.querySelector("body");
function colorchange(color){
    const colorresp = document.querySelector("body");

    colorresp.style.backgroundColor = color;
}

if(a.getHours()<=6){
    const colorresp2 = document.querySelector("body");
    colorresp2.style.backgroundColor = "#333333";
}else{
    const colorresp2 = document.querySelector("body");
    colorresp2.style.backgroundColor = "white";
}