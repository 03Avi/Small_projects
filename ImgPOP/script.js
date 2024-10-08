
const throttleFunction = (func, delay) => {

    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        console.log(now - prev, delay);

        if (now - prev > delay) {
            prev = now;

            
            return func(...args);
        }
    }
}
document.querySelector("#main").addEventListener("mousemove",
    throttleFunction((dets) => {
        var div=document.createElement("div");

        div.classList.add("imgdiv");
        div.style.left= dets.clientX+"px";
        div.style.top= dets.clientY+"px";

        var img=document.createElement("img");
        img.setAttribute("src", "https://images.unsplash.com/photo-1728136504997-d83a9c655d0c?q=80&w=1580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

        div.appendChild(img);
        document.body.appendChild(div);

        gsap.to(img, {
            y: "0",
            ease: Power2,
            duration: .4
        })
        gsap.to(img, {
            y: "100%",
            delay: .6,
            ease: Power3
        })
        setTimeout(() => div.remove(), 1500);
    }, 200));