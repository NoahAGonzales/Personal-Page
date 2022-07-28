let expandMenu = function() {
   document.getElementById('menu').style = "width: 100%; height: 100%; z-index: 1;"
   document.getElementById('menu-bg').style = "width: 4000px; height: 4000px; margin-left: -2000px; margin-top: -2000px; z-index: 1; transition-delay: 0s;"
   document.getElementsByTagName('body')[0].style = "overflow-y: hidden;"
   document.getElementById('menu-icon').style = "opacity: 0; z-index: 2"
   document.getElementById('x-icon').style = "opacity: 100%; z-index: 3;"
   document.getElementsByTagName('nav')[0].style = "z-index: 1; width: 100%; height: 100%; opacity: 1; top: 0; left: 0;"

   document.getElementsByClassName('nav-link')[0].style = "opacity: 100%; transition-delay: 0.6s; transition-duration: 1s;"
   document.getElementsByClassName('nav-link')[1].style = "opacity: 100%; transition-delay: 0.8s; transition-duration: 1s;"
   document.getElementsByClassName('nav-link')[2].style = "opacity: 100%; transition-delay: 1s; transition-duration: 1s;"
   
} 

let closeMenu= function() {
   document.getElementById('menu').style = "z-index: 0;"
   document.getElementById('menu-bg').style = "width: 0px; height: 0px; margin-left: 30px; margin-top: 30px; z-index: -2; transition-delay: 1s;"
   document.getElementsByTagName('body')[0].style = "overflow-y: scroll;"
   document.getElementById('menu-icon').style = "opacity: 100%; z-index: 3"
   document.getElementById('x-icon').style = "opacity: 0; z-index: 2;"
   document.getElementsByTagName('nav')[0].style = "z-index: -2; opacity: 1; transition-delay: 2s; width: 0; height: 0; top: -500px; left: -500px;"

   document.getElementsByClassName('nav-link')[0].style = "opacity: 0; transition-delay: 0.1s; transition-duration: 0.5s;"
   document.getElementsByClassName('nav-link')[1].style = "opacity: 0; transition-delay: 0.3s; transition-duration: 0.5s;"
   document.getElementsByClassName('nav-link')[2].style = "opacity: 0; transition-delay: 0.5s; transition-duration: 0.5s;"
}