/*------------Page 1------------*/

gsap.from(".page1 h1",{
    y:-100, 
    opacity: 0,
    duration: 1,
    delay: 0.3,
    stagger: 0.4
});

gsap.from(".page1 .line",{
    x:-100, 
    opacity: 0,
    duration: 2,
    delay: 1
});

gsap.from(".page1 .about-me",{
    x:100, 
    opacity: 0,
    duration:1,
    delay: 2
});

gsap.from(".page1 img",{
    opacity: 0,
    duration:1.5,
    delay: 2.3
});

/*------------Page 2------------*/

gsap.from(".page2 h1",{
    y:-100, 
    opacity: 0,
    duration: 21,
    // delay: 5,
    stagger: 0.4,
    scrollTrigger:{
        trigger: ".page2 h1",
        scroller: "body",
        // markers: true,
        // start: "top 50%",
        scrub: true
    } 
})

// gsap.from(".page2 .line2",{
//     x:-60, 
//     opacity: 0,
//     duration: 1,
//     // delay: 6,
//     scrollTrigger:{
//         trigger: ".page2 line2",
//         scroller: "body",
//         // markers: true,
//         // start: "top 10%",
//         scrub: true
//     } 
// })

gsap.from(".page2 h2",{
    x:-60, 
    opacity: 0,
    duration: 0.1,
    // delay: 0.2,
    scrollTrigger:{
        trigger: ".page2 h2",
        scroller: "body",
        // markers: true,
        // start: "top 10%",
        scrub: true
    } 
})
