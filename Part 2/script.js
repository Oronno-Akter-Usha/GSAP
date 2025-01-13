gsap.from("#section1 .box", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
});

gsap.from("#section2 h1", {
  opacity: 0,
  duration: 2,
  x: 500,
  scrollTrigger: {
    trigger: "#section2 h1",
    scroller: "body",
    markers: true,
    start: "top 50%",
  },
});

gsap.from("#section2 h2", {
  opacity: 0,
  duration: 2,
  x: -500,
  scrollTrigger: {
    trigger: "#section2 h2",
    scroller: "body",
    markers: true,
    start: "top 50%",
  },
});
