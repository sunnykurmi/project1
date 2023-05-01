function init() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
    locoScroll.on('scroll', ScrollTrigger.update);
    ScrollTrigger.scrollerProxy('#main', {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        pinType: document.querySelector('#main').style.transform ? 'transform' : 'fixed'
    });
    ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
    ScrollTrigger.refresh();
}
init()

// document.querySelector('#main').addEventListener('mousemove',function(dets){
//     document.querySelector("#circle").style.left = `${dets.clientX}px`
//     document.querySelector("#circle").style.top = `${dets.clientY}px`
// })
// document.querySelector('#nav').addEventListener('mousemove',function(dets){
//     document.querySelector("#circle").style.left = `${dets.clientX}px`
//     document.querySelector("#circle").style.top = `${dets.clientY}px`
// })

gsap.fromTo("#loadbox",{
    opacity:0,
    y:20
},{
    opacity:1,
    y:0,
    delay:.2
})

gsap.to("#b4child",{
    duration:2,
    delay:.5,
    y:"-97.20%",
    ease: "power3.inOut"
})
gsap.to("#b3child",{
    duration:2,
    delay:.7,
    y:"-80%",
    ease: "power3.inOut"
})
gsap.to("#b2child",{
    duration:2,
    delay:.9,
    y:"-50%",
    ease: "power3.inOut"
})
gsap.to("#b1child",{
    duration:2,
    delay:1,
    y:"-50%",
    ease: "power3.inOut"
})
gsap.to("#loadbar",{
    duration:2,
    delay:.4,
    width:"100%",
    ease: "power3.inOut"

})
gsap.fromTo("#loadertxt h6",{
    y:100
},{
    y:0,
    stagger:.1,
    duration:1,
    delay:.2
})
gsap.to("#loadbar",{
    opacity:0,
    delay:2
})
gsap.to("#loadbox,#loadertxt h6",{
    opacity:0,
    y:-30,
    delay:2.2
})

gsap.to("#loader",{
    y:"-100%",
    delay:2.5,
    duration:1,
    backgroundColor:"transparent"
})



document.querySelectorAll('#page7 h1').forEach(function(h){
    h.addEventListener('mousemove',function(dets){
        document.querySelector("#page7>img").style.left = `${(dets.clientX)+0}px`
        document.querySelector("#page7>img").style.top = `${(dets.clientY)-50}px`
        document.querySelector("#page7>img").style.opacity=1
        document.querySelector("#page7>img").style.width="15%"
    })
})
document.querySelectorAll('#page7 h1').forEach(function(h){
    h.addEventListener('mouseleave',function(dets){
        document.querySelector("#page7>img").style.left = `${(dets.clientX)+0}px`
        document.querySelector("#page7>img").style.top = `${(dets.clientY)-50}px`
        document.querySelector("#page7>img").style.opacity=0
        document.querySelector("#page7>img").style.width=0
    })
})
document.querySelector(".s1").addEventListener("mousemove", function () {
    document.querySelector(".s1").style.color="red"
})
document.querySelector(".s2").addEventListener("mousemove", function () {
    document.querySelector(".s2").style.color="#D68240"
})
document.querySelector(".s3").addEventListener("mousemove", function () {
    document.querySelector(".s3").style.color="#02aad3"
})
document.querySelector(".s1").addEventListener("mouseleave", function () {
    document.querySelector(".s1").style.color="#342221"
})
document.querySelector(".s2").addEventListener("mouseleave", function () {
    document.querySelector(".s2").style.color="#342221"
})
document.querySelector(".s3").addEventListener("mouseleave", function () {
    document.querySelector(".s3").style.color="#342221"
})
document.querySelector(".s1").addEventListener("mousemove", function () {
    document.querySelector(".s4").style.color="white"
})
document.querySelector(".s2").addEventListener("mousemove", function () {
    document.querySelector(".s5").style.color="white"
})
document.querySelector(".s3").addEventListener("mousemove", function () {
    document.querySelector(".s6").style.color="white"
})
document.querySelector(".s1").addEventListener("mouseleave", function () {
    document.querySelector(".s4").style.color="#342221"
})
document.querySelector(".s2").addEventListener("mouseleave", function () {
    document.querySelector(".s5").style.color="#342221"
})
document.querySelector(".s3").addEventListener("mouseleave", function () {
    document.querySelector(".s6").style.color="#342221"
})


var elem = document.querySelectorAll("#page7-txt1")
elem.forEach(function (e) {
    var a = e.getAttribute("data-img")
    e.addEventListener("mouseenter", function () {
        document.querySelector("#page7>img").setAttribute("src", a)
    })
})

// gsap.fromTo('child',{
// scrollTrigger:{
//     trigger:'parent',
//     scrub:true,
//     markers:true,
//     start:'top 50%',
//     end:'top 0%',
// },
// })

gsap.to("#page1",{
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        scrub:2,
        pin:true,
        // markers:true,
        start:"top 0%",
        end:"top -70%"
    }
})

gsap.fromTo("#vid",{
    height:"10%"
    
},{
    scrollTrigger:{
    trigger:"#vid",
    scroller:"#main",
    scrub:2,
    // markers:true,
    start:"top 45%"
},
height:"100%"
})

gsap.fromTo("#page1txt:nth-child(1)",{
    x:-20
},{
    scrollTrigger:{
    trigger:"#vid",
    scroller:"#main",
    scrub:2,
    // markers:true,
    start:"top 45%"
},
x:0
})
gsap.fromTo("#page1txt:nth-child(2)",{
    x:90
},{
    scrollTrigger:{
    trigger:"#vid",
    scroller:"#main",
    scrub:2,
    // markers:true,
    start:"top 45%"
},
x:0
})
gsap.fromTo("#page1txt:nth-child(3)",{
    x:-190
},{
    scrollTrigger:{
    trigger:"#vid",
    scroller:"#main",
    scrub:2,
    // markers:true,
    start:"top 45%"
},
x:0
})
gsap.fromTo("#page1txt:nth-child(4)",{
    x:120
},{
    scrollTrigger:{
    trigger:"#vid",
    scroller:"#main",
    scrub:2,
    // markers:true,
    start:"top 45%"
},
x:0
})


var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        scrub:2,
        pin:true,
    }
})
tl.fromTo("#slidingpic",{
    x:"0%"
},{
    x:"-190%"
})
gsap.fromTo("#page3 h3,#page3 h1",{
    y:150,
},{
    scrollTrigger:{
        trigger:"#page3 h3,#page3 h1",
        scroller:"#main",
        // scrub:2,
        // markers:true,
        start:"top 100%",
    },
    y:0

})

gsap.fromTo("#page3 span:nth-child(3)",{
    x:-200
},{
    scrollTrigger:{
    trigger:"#page3 span:nth-child(3)",
    scroller:"#main",
    scrub:2,
    // markers:true,
    start:"top 100%",
    start:"top 100%"
},
x:-100
})
gsap.fromTo("#page3 span:nth-child(4)",{
    x:200
},{
    scrollTrigger:{
    trigger:"#page3 span:nth-child(4)",
    scroller:"#main",
    scrub:2,
    // markers:true,
    start:"top 100%",
    start:"top 100%"
},
x:100
})

gsap.fromTo("#page7-txt1 h1,#page7-txt1 h4",{
    y:200,
},{
    scrollTrigger:{
        trigger:"#page7-txt1 h1,#page7-txt1 h4",
        scroller:"#main",
        // scrub:2,
        // markers:true,
        start:"top 70%",
    },
    y:0
})

gsap.fromTo("#page8 h3,#page8 h1",{
    y:200,
},{
    scrollTrigger:{
        trigger:"#page8 h3,#page8 h1",
        scroller:"#main",
        // scrub:2,
        // markers:true,
        start:"top 70%",
    },
    y:0
})


gsap.fromTo(".page8span1",{
    x:200
},{
    scrollTrigger:{
    trigger:".page8span1",
    scroller:"#main",
    scrub:2,
    // markers:true,
    start:"top 100%",
    start:"top 100%"
},
x:100
})
gsap.fromTo(".page8span2",{
    x:-300
},{
    scrollTrigger:{
    trigger:".page8span2",
    scroller:"#main",
    scrub:2,
    // markers:true,
    start:"top 100%",
    start:"top 100%"
},
x:-100
})
gsap.fromTo(".page8span3",{
    x:-200
},{
    scrollTrigger:{
    trigger:".page8span3",
    scroller:"#main",
    scrub:2,
    // markers:true,
    start:"top 100%",
    start:"top 100%"
},
x:0
})
gsap.fromTo(".page8span4",{
    x:300
},{
    scrollTrigger:{
    trigger:".page8span4",
    scroller:"#main",
    scrub:2,
    // markers:true,
    start:"top 100%",
    start:"top 100%"
},
x:200
})


gsap.to("#page9,#page8",{
    scrollTrigger:{
        trigger:'#page9',
        scroller:"#main",
        scrub:4,
        start:"top 40%",
        end:"top 10%"
    },
    backgroundColor:"#201616"
})

var page9 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page9",
        scroller:"#main",
        pin:true,
        start:"top top",
        scrub:2,
    }
})
page9.fromTo("#page9 h1",{
    x:1200
},{
    x:-1500
},"hello")
page9.fromTo("#page9 h3",{
    y:1200
},{
    y:0
},"hello")
page9.fromTo("#page9 h6",{
    y:1200
},{
    y:0
},"hello")
page9.fromTo("#page9 img",{
    y:1800,
    opacity:0
},{
    y:0,
    opacity:1
},"hello")

page9.to("#page9 img",{
    y:-700
})
