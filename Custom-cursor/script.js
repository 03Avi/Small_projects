var main= document.querySelector("#main")
var cursor= document.querySelector(".cursor")

main.addEventListener("mousemove", function(logs){
    cursor.style.left= logs.x+"px"
    cursor.style.top= logs.y+"px"
})