// For Navbar Functionlity
var navbar =  document.querySelector("#wrap")
window.addEventListener("scroll",()=>{
    if(document.documentElement.scrollTop>50){
        navbar.classList.add("navbar-scroll")
    }
    else{
        navbar.classList.remove("navbar-scroll")
    }
})