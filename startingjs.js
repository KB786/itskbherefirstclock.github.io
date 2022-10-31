


function time(){
    let a= new Date();
    function hours(a){
        if(a.getHours()==0){
            return 12;
        }
        if(a.getHours()>12){
            return a.getHours()-12;
        }
        if(a.getHours()>0 && a.getHours()<=12){
            return a.getHours();
        }
        }
        function session(a){
            if(a.getHours()<12){
                return "AM";
            }else{
                return "PM";
            }
        }


        
        let b=hours(a)+":"+a.getMinutes()+":"+a.getSeconds()+" " +session(a);
        

let x="Today: "+(a.getDate())+" / "+(a.getMonth()+1)+" / "+a.getFullYear();
document.getElementById('DateMainScript').innerHTML=x;

let y=a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();
document.getElementById('ClockMainScript').innerHTML=b;




}


var run = setInterval(time,1000);


let clock= document.querySelector("#ClockMainScript");


function colorchange(color){
    const colorresp = document.querySelector("body");

    colorresp.style.backgroundColor = color;
}
const boxes = document.querySelectorAll("button");

// boxes.forEach(button=>{
//     button.addEventListener('mouseenter',function sizechange(){
//         // button.setAttribute('style','color: blue');
//         // button.setAttribute('style','width: 20vh');
//         console.log("Mouse Entered !");

//     });
//     button.addEventListener('mouseleave',function sizechange1(){
//         // button.setAttribute('style','color: blue');
//         // button.setAttribute('style','width: 20vh');
//         console.log("Mouse Exited !");

//     });
// })
function daybtnchange(){
    const btn=document.getElementById('daybtn');
btn.style.width='18vw';
btn.style.height='9vh';

}
function daybtnchange1(){
    const btn=document.getElementById('daybtn');
btn.style.width='16vw';
btn.style.height='8vh';

}
function nightbtnchange(){
    const btn2=document.getElementById('nightbtn');
btn2.style.width='18vw';
btn2.style.height='9vh';

}
function nightbtnchange1(){
    const btn2=document.getElementById('nightbtn');
btn2.style.width='16vw';
btn2.style.height='8vh';

}
function truthreverse(a){

    if(a==true){
        return false;
    }
    if(a==false){
        return true;
    }
}