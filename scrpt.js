let cstatus=document.querySelector("h5")

let addfriend=document.querySelector("#add")

let remove= document.querySelector("#remove")
addfriend.addEventListener("click", function(){
    cstatus.style.color="green"
    document.querySelector("h5").textContent="Friends"
})
remove.addEventListener("click", function(){
    cstatus.style.color="blue"
    document.querySelector("h5").textContent="Stranger"
})