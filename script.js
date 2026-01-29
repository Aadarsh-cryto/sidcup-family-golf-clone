var cur =   document.querySelector('#cursor')
var blur =   document.querySelector('#cursor-blur')
   document.addEventListener("mousemove",function(dets){
cur.style.left = dets.x + "px";
cur.style.top = dets.y + "px";
blur.style.left = dets.x-250 + "px";
blur.style.top = dets.y-250 + "px";
   })
  



    gsap.registerPlugin(ScrollTrigger);

// BLACK OVERLAY FADE ON SCROLL
gsap.to("#overlay", {
  opacity: 1,
  scrollTrigger: {
    trigger: "#page1",
    start: "top -25%",  // fade starts when page1 scrolls past
    end: "top -70%",    // fade ends
    scrub: true,
    // markers: true // uncomment to debug
  }
});

// NAV SHRINK + COLOR CHANGE
gsap.to("#nav", {
  backgroundColor: "#000",
  height: "120px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#page1",
    start: "top -10%",
    end: "top -11%",
    scrub: 3
  }
});
