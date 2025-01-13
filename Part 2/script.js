gsap.from("#section1 .box", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
});
gsap.from("#section2 .box", {
  scale: 0,
  opacity: 0,
  duration: 2,
  rotate: 720,
  scrollTrigger: {
    trigger: "#section2 .box",
    scroller: "body",
    markers: true,
    start: "top 60%",
    end: "top 30%",
    scrub: 2,
    pin: "true",
  },
});
