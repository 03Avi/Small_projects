var member= document.querySelectorAll(".member")


member.forEach(function(index){
    var imag= index.childNodes[3]
    index.addEventListener("mouseenter", function(){
        index.style.backgroundColor="rgb(46, 26, 2)"
        imag.style.opacity=1
    })
    index.addEventListener("mouseleave", function(){
        index.style.backgroundColor="transparent"
        imag.style.opacity=0
    })
    index.addEventListener("mousemove", function(data){
        imag.style.left=data.x+"px"
        imag.style.top=data.y+"px"
        
    })
})