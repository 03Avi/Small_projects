var active= 4;

var mnc= document.querySelectorAll(".mindot")
var sec= document.querySelectorAll(".sec")
gsap.to(mnc[active-1], {
    opacity: 1,
})

gsap.to(sec[active-1], {
    opacity: 1,
})

mnc.forEach(function(item, index){
    item.addEventListener("click",function(){
        gsap.to(".circular-nav", {
            rotate: (4-(index+1))*10,
            ease: Expo.easeInOut,
            duration:0.3
        })
        opacityChange();
        gsap.to(this, {
            opacity:1
        })
        gsap.to(sec[index], {
            opacity:1
        })
    })
})

function opacityChange(){
    gsap.to(mnc,{
        opacity:0.2
    })
    gsap.to(sec,{
        opacity:0.2
    })
}
gsap.to(".circular-nav", {
    rotate:0,
    ease: Expo.easeInOut,
    duration: 2
}) 
