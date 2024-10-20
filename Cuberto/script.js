Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {
    videos: ["./0.mp4", "./2.mp4", "./3.mp4" ]
});

var setter=document.querySelector("#imgL");

gsap.to(".elemLeft", {
    scrollTrigger:{
       trigger: "#fimage",
       pin: true,
       start: "top top",
       end: "bottom bottom",
       endTrigger: ".last",
       scrub: 1
    },
    y:"-300%",
    ease: Power1
})

let sections= document.querySelectorAll(".elemLeft");

Shery.imagEffect(".imgs", {
    style:5,
    config:{
        onMouse: {value:1}
    },
    slideStyle: (setScroll) =>{
        sections.forEach(function(section, idx){
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                scrub: 1,
                onUpdate: function(prog){
                    setScroll(prog.progress+idx);
                }
            });
        });
    },
});
