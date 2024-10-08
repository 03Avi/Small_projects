var dataDot =document.querySelector("#dot");
var frames = document.querySelectorAll(".frame");
const lerp = (x, y, a) => x * (1 - a) + y * a;

frames.forEach(frame => {
    frame.addEventListener('mousemove', function(dets) {
        var dimensions = frame.getBoundingClientRect();
        var startX = dimensions.x;
        var endX = dimensions.x + dimensions.width;
    
        var maps= gsap.utils.mapRange(startX, endX, 0, 1, dets.clientX);
    
        
        gsap.to(dataDot, {
            scale: 6
        })
    
        gsap.to(frame.children,{
            color: "#863b2a",
            duration: .4,
            y : "-5vw"
        })
    
        gsap.to(frame.children,{ 
            x: lerp(-50, 50, maps),
            duration: .3
        })
    })
    frame.addEventListener('mouseleave', function(dets) {
        gsap.to(frame.children,{
            color: "#16100d",
            duration:.4,
            y: 0
        })
        gsap.to(dataDot, {
            scale: 1
        })
        gsap.to(frame.children,{ 
            x: 0,
            duration: .3
        })
    })
});
window.addEventListener("mousemove", function(dets){
    gsap.to(dataDot, {
        x: dets.clientX,
        y: dets.clientY,
        duration: .15,
        ease: Expo
    })
}) 


