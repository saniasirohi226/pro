var tl = gsap.timeline()
tl.from("#nav h3",{
    y: -50,
    duration: .5,
    // delay: 0.2,
    opacity: 0,
    stagger:.2
    
})
tl.from("#center h1",{
    x:-500,
    opacity:0,
    duration:.8,
    stagger:.2,
    
})
tl.from("#img img",{
    y:100,
    rotate:360,
    opacity:0, 
    duration: 0.5,
    stagger:0.3
})
var head = document.querySelectorAll("h3");
head.forEach(function(heading){
heading.addEventListener("mouseover",function(){
heading.style.color="yellow";
});
head.forEach(function(heading){
    heading.addEventListener("mouseleave",function(){
        heading.style.color="white";
    });
})
});

