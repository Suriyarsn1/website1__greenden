//Slide menu//
//selection variable//
var menubar=document.querySelector("#menubar")
var close1=document.querySelector("#close1")
var menubox=document.querySelector("#menubox")

menubar.addEventListener("click",function(){
    
    menubox.style.right="0"
})
close1.addEventListener("click",function(){
  
    menubox.style.right="-50%"
})

