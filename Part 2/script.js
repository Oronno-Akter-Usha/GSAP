gsap.from("#section1 .box", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
});
gsap.from("#section2 .box", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
  scrollTrigger: "#section2 .box",
});
