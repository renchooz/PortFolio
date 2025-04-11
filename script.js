var typed = new Typed('#element', {
    strings: ['Web Developer', 'And Also','A Responsive Developer'],
    typeSpeed: 50,
  });
 let sec2 = document.body.querySelector(".section-2")
 let box = document.body.querySelectorAll(".box")
 let menu = document.body.querySelector(".menu")
 let fixed_scr = document.body.querySelector(".fixed-menu")
 let main = document.querySelector(".main")
 
main.addEventListener("click",function(){
  fixed_scr.style.right = "-100%";
})
 menu.addEventListener("click",function(){
  fixed_scr.style.right = 0;
 })

 sec2.addEventListener("mouseenter",function(){
  box.forEach(function(s){
    s.style.display = "block"
    s.style.filter = "blur(0px)"
  })
  
 })
