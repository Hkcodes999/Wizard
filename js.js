//===============lenis=====================//

const lenis = new Lenis();

lenis.stop();

document.body.classList.add('no-scroll'); 




//===========================HAMBURGER=============================================//

if (window.innerWidth <= 768) {
    var menu = document.querySelector("#nav-left #menu");
    var rnav = document.querySelector("#nav-right");
    var links = document.querySelectorAll("#nav-right a");

    function closeNav() {
        rnav.classList.remove("active1");
        menu.classList.add("ri-menu-3-line");
        menu.classList.remove("ri-close-circle-line");

        gsap.fromTo(rnav,
            { x: 0, opacity: 1 },
            { x: 300, opacity: 0, duration: 0.5, ease: "power2.in" }
        );
    }

    menu.addEventListener("click", function () {
        var show = rnav.classList.toggle("active1");

        this.classList.toggle("ri-menu-3-line");
        this.classList.toggle("ri-close-circle-line");

        if (show) {
            gsap.fromTo(rnav,
                { x: 300, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
            );

            gsap.fromTo("#nav-right a",
                { y: -100, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.1 }
            );
        } else {
            closeNav();
        }
    });

    links.forEach(function (link) {
        link.addEventListener("click", closeNav);
    });

    document.addEventListener("click", function (e) {
        if (
            rnav.classList.contains("active1") &&
            !rnav.contains(e.target) &&
            !menu.contains(e.target)
        ) {
            closeNav();
        }
    });
}


//============================SWIPER JS=======================================================//

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoHeight: true,
  autoplay:true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

  


//===============================SCROLL HELPER===============================================//

window.addEventListener('load', function(){
    ScrollTrigger.refresh();
});

//===============================LOADER=======================================//

var p1TL = gsap.timeline()

p1TL.from("#loader h3",{
    x:-50,
    opacity:0,
    stagger:0.3
})

p1TL.from("#loader span, #progress", {
    x:-50,
    opacity:0,
    stagger:0.3
})

var num = document.querySelector("#loader h4");
var progress = document.querySelector("#bar #progress");
var count = 0;

var int = setInterval(function(){

    if(count === 99){
        clearInterval(int);
    }

    count++
    num.textContent=count+"%";
    progress.style.width=count+"%";

},28)

p1TL.to("#loader h3",{
    x:-50,
    opacity:0,
    stagger:0.3
})

p1TL.to("#loader span, #progress", {
    opacity:0,
    stagger:0.1
})

p1TL.to("#loader",{
    y:"-100%",
    opacity: 0,
    duration: 0.30,
    display: "none",
    onComplete: function() {
        // Add this to your existing onComplete:
        document.body.classList.remove('no-scroll');
        lenis.start();
        
        // Now set up the Lenis scroll listeners
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
    } 
})



//===============================PAGE 1=======================================//



p1TL.from("#nav-left #star", {
    x:40,
    opacity:0,
    stagger:0.1,
    rotate:"180deg",
    duration:0.5
})

p1TL.from("#nav-left h2", {
    x:40,
    opacity:0,
    stagger:0.1,
    duration:0.3
})

p1TL.from("#nav-left #rs, #nav-left #menu",{
    y:-80,
    opacity:0,
    stagger:0.1,
    duration:0.5
},"amine")


p1TL.from("#nav-right a, #nav-right i",{
    y:-80,
    opacity:0,
    stagger:0.1,
    duration:0.3
},"anime")

p1TL.from("#center-left h2,#center-left p,#center-left button",{
    x:-50,
    opacity:0,
    stagger:0.3
},"same")

p1TL.from("#center-right img",{
    x:100,
    opacity:0
},"same")

p1TL.from("#bottom img",{
    y:100,
    opacity:0,
    stagger:0.2
})

//====================PAGE 2====================================================//
const p1elem = document.querySelectorAll(".elem");

p1elem.forEach(p1ele => {
    p1ele.addEventListener("mouseenter", () => {
        gsap.to(p1ele, {
            scale: 1.02,
            boxShadow: "none",
            duration: 0.6,
            ease: "power2.out"
        });
    });

    p1ele.addEventListener("mouseleave", () => {
        gsap.to(p1ele, {
            scale: 1,
            boxShadow: "0px 10px 0px black",
            duration: 0.6,
            ease: "power2.inOut"
        });
    });
});



var p2TL = gsap.timeline({
    scrollTrigger:{
        trigger:"#section2",
        start:"top 70%",
        end:"top 20%",
        scrub:2,
    }
})

p2TL.from("#s2-top h3,#s2-top p",{
    x:100,
    opacity:0,
    duration:1,
    stagger:1
})

p2TL.from("#s2-center #left",{
    x:-100,
    opacity:0,
    stagger:2
},"anime")

p2TL.from("#s2-center #right",{
    x:100,
    opacity:0,
    stagger:2
},"anime")


//========================PAGE 3===========================================//

var p3TL = gsap.timeline({
    scrollTrigger:{
        trigger:"#section3",
        start:"top 60%",
        end:"top 20%",
        scrub:2
    }
})

p3TL.from("#s3-center",{
    x:100,
    opacity:0,
})

p3TL.from("#s3-center-left h3,#s3-center-left p,#s3-center-left a",{
    y:50,
    opacity:0,
    stagger:0.5
})

p3TL.from("#s3-center-right img",{
    x:100,
    opacity:0,
})


//=====================PAGE 4==============================================//

var p4TL = gsap.timeline({
    scrollTrigger:{
        trigger:"#section4",
        start:"top 70%",
        end:"top 20%",
        scrub:2
    }
})

p4TL.from("#s4-top h3,#s4-top p",{
    x:50,
    opacity:0,
    duration:1.5,
    stagger:0.75
})

p4TL.from(".s4-elem h3,.s4-elem a",{
    x:50,
    opacity:0,
    duration:1.5,
    stagger:1
})

//===================================PAGE 5=============================================//

var elements = document.querySelectorAll(".s5-elem");

elements.forEach(function(elem) {
    var plusIcon = elem.querySelector(".s5-elem-top-right i");
    var bottomContent = elem.querySelector(".s5-elem-bottom");

    elem.addEventListener("click", function() {

        // Close all others before opening current
        elements.forEach(function(otherElem) {
            if (otherElem !== elem) {
                otherElem.querySelector(".s5-elem-bottom").classList.remove("active");
                otherElem.querySelector(".s5-elem-top-right i").classList.remove("ri-close-circle-line");
                otherElem.querySelector(".s5-elem-top-right i").classList.add("ri-add-circle-line");
            }
        });

        // Toggle current
        bottomContent.classList.toggle("active");
        plusIcon.classList.toggle("ri-add-circle-line");
        plusIcon.classList.toggle("ri-close-circle-line");
    });
});

elements.forEach(elems => {
    elems.addEventListener("mouseenter", function(){
        gsap.to(elems, { 
            backgroundColor: "#b9ff66",
            scale: 1.02, 
            boxShadow: "none", 
            duration: 0.5,
            ease: "power2.inOut"
        });
    })

    elems.addEventListener("mouseleave", function(){
        gsap.to(elems,{ 
            backgroundColor: "rgba(128, 128, 128, 0.121)",
            scale: 1,
            boxShadow: "0px 10px 0px black",
            duration: 0.5,
            ease: "power2.inOut"
        });
    })
});


var p5TL = gsap.timeline({
    scrollTrigger:{
        trigger:"#section5",
        start:"top 70%",
        end:"top 10%",
        scrub:2
    }
})

p5TL.from("#s5-top h3, #s5-top p",{
    x:100,
    opacity:0,
    stagger:0.75
})

p5TL.from("#s5-center .s5-elem",{
    y:100,
    opacity:0,
    stagger:1
})

//============================PAGE 6=================================================//

const elems = document.querySelectorAll('.s6-elem');

elems.forEach(elemes => {
  elemes.addEventListener('mouseenter', () => {
    gsap.to(elemes,{ 
        backgroundColor: "#b9ff66",
        scale: 1.02,
        boxShadow: "none",
        duration: 0.5,
        ease: "power2.inOut"
    });
  });

  elemes.addEventListener('mouseleave', () => {
    gsap.to(elemes, {
        backgroundColor: "rgba(128, 128, 128, 0.121)",
        scale: 1,
        boxShadow: "0px 10px 0px black",
        duration: 0.5,
        ease: "power2.inOut"
    });
  });
});

var p6TL = gsap.timeline({
    scrollTrigger:{
        trigger:"#section6",
        start:"top 80%",
        end:"top 10%",
        scrub:2,
    }
})

p6TL.from("#s6-top h3, #s6-top p",{
    x:100,
    opacity:0,
    stagger:0.5
})

p6TL.from("#s6-center .s6-elem",{
    y:100,
    opacity:1,
    stagger:2,
    duration:3
})

//===================================PAGE 7====================================================//

var p7TL = gsap.timeline({
    scrollTrigger:{
        trigger:"#section7",
        start:"top 70%",
        end:"top 10%",
        scrub:2
    }
})

p7TL.from("#s7-top h3,#s7-top p",{
    x:50,
    opacity:0,
    stagger:0.5
})

p7TL.from("#s7-center",{
    y:100,
    opacity:0,
})

//============================PAGE 8======================================================//

var p8TL = gsap.timeline({
    scrollTrigger:{
        trigger:"#section8",
        start:"top 70%",
        end:"top 10%",
        scrub:2
    }
})

p8TL.from("#s8-top h3, #s8-top p",{
    x:50,
    opacity:0,
    stagger:1
})

p8TL.from("#s8-center",{
    x:-50,
    opacity:0,
    stagger:1
})

//==============================PAGE 9==========================================================//

var p9TL = gsap.timeline({
    scrollTrigger:{
        trigger:"#section9",
        start:"top 70%",
        end:"top 70%",
        scrub:2
    }
})

p9TL.from("#s9-middle",{
    y:100,
    opacity:0
})
