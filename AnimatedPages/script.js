gsap.to(".imagebox", {
    ease: Expo.easeInout,
    width: "100%",
    duration: 1,
    stagger: 1.5
})
gsap.to(".text h1", {
    ease: Expo.easeInout,
    stagger: 1.5,
    top:0
})
gsap.to(".text h1", {
    delay:1,
    ease: Expo.easeInout,
    stagger: 1.5,
    top:"-100%"
})