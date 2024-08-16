var doublClick= document.querySelector("#container")

var lov= document.querySelector("i")

doublClick.addEventListener("dblclick", function(){
    lov.style.transform= 'translate(-50%, -50%) scale(1)';
    lov.style.opacity=0.9;

    setTimeout(() => {
        lov.style.opacity=0;
    }, 1500);
   setTimeout(function(){
    lov.style.transform='translate(-50%, -50%) scale(0)';
   }, 2500) 
})
