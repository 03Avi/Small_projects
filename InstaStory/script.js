 var arr= [{
    dp:"https://images.unsplash.com/photo-1517423568366-8b83523034fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NDR8NDcxMjA1MHx8ZW58MHx8fHx8",story:"https://images.unsplash.com/photo-1481456384069-0effc539ab7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8NDcxMjA1MHx8ZW58MHx8fHx8"
 },
 {
    dp:"https://images.unsplash.com/photo-1521913626209-0fbf68f4c4b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Njd8NDcxMjA1MHx8ZW58MHx8fHx8",story:"https://images.unsplash.com/photo-1496151428281-1d6de673b58e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8NDcxMjA1MHx8ZW58MHx8fHx8"
 },
 {
    dp:"https://images.unsplash.com/photo-1534829178390-5312a631a68e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NzZ8NDcxMjA1MHx8ZW58MHx8fHx8",story:"https://images.unsplash.com/photo-1570642053027-6507c6fb60ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8NDcxMjA1MHx8ZW58MHx8fHx8"
 },
 {
    dp:"https://images.unsplash.com/photo-1507789836536-5386aa392006?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8ODZ8NDcxMjA1MHx8ZW58MHx8fHx8",story:"https://images.unsplash.com/photo-1484689228555-fd6bc1b28b7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MzB8NDcxMjA1MHx8ZW58MHx8fHx8"
 },
 {
    dp:"https://images.unsplash.com/photo-1524549110215-6624d76a0b0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",story:"https://images.unsplash.com/photo-1485550409059-9afb054cada4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MzJ8NDcxMjA1MHx8ZW58MHx8fHx8"
 },
 {
    dp:"https://images.unsplash.com/photo-1615266508040-7c47f7339963?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",story:"https://images.unsplash.com/photo-1442528010304-834a5d4f3925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MzZ8NDcxMjA1MHx8ZW58MHx8fHx8"
 }
]
var stories= document.querySelector(".stories")
var container= ""
arr.forEach(function(data, indx){
    container += `<div id="story">
                <img id="${indx}" src="${data.dp}" alt="">
            </div>`
})
stories.innerHTML= container

stories.addEventListener("click", function(data){
    document.querySelector("#fullScreen").style.display= "block"
    document.querySelector("#fullScreen").style.backgroundImage= `url(${arr[data.target.id].story})`
    setTimeout(function(){
        document.querySelector("#fullScreen").style.display= "none"

        document.querySelector("#fullScreen").style.backgroundImage= "none"
    },3000)
});