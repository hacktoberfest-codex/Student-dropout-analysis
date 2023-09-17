var crsr=document.querySelector(".cursor")

var blur=document.querySelector(".cursor-blur")


document.addEventListener("mousemove",function(move){
    crsr.style.left=move.x+"px"
    crsr.style.top=move.y+"px"
    blur.style.left=move.x-250+"px"
    blur.style.top=move.y-250+"px"

})

var h4all = document.querySelectorAll(".nav h4")
h4all.forEach(function(elem){
   elem.addEventListener("mouseenter",function(){
    crsr.style.scale=3
    crsr.style.border="1px solid #000000"
    crsr.style.backgroundColor="transparent"

   })
   elem.addEventListener("mouseleave",function(){
    crsr.style.scale=1
    crsr.style.border="0px solid #0c4158"
    crsr.style.backgroundColor="#0c4158"

   })
})


document.addEventListener("mousemove",function(move){
    

})


gsap.to(".nav",{
    backgroundColor : "#F8F0E5",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to(".main",{
  background: "linear-gradient(to left bottom,#1189bc,#3a6179)",
    scrollTrigger:{
      trigger:".main",
      scroller:"body",
    //    markers:true,
       start:"top -25%",
       end:"top -70 %",
       scrub:2
    } 
  })

  gsap.from(".about-us img,.about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
         trigger:".about-us",
         scroller:"body",
        //  markers:true,
         start:"top 70%",
         end:"top 65%",
         scrub:1
    }
  })
 

  gsap.from(".colon1",{
        y:-70,
        x:-70,
        scrollTrigger:{
            trigger:".colon1",
            scroller:"body",
            start:"top 50%",
            end:"top 47%",
            scrub:3

        }
  })

  gsap.from(".colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:".colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 47%",
        scrub:3

    }
})

