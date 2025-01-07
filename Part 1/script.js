// ----- Box animation -----

// gsap.to("#box1", {
//   x: 1200,
//   duration: 2,
//   delay: 1,
// });

// gsap.from("#box2", {
//   x: 1200,
//   duration: 2,
//   delay: 1,
// });

// gsap.to("#box1", {
//   x: 1200,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
//   backgroundColor: "blue",
//   borderRadius: "50%",
// });

// ----- Text animation -----

// gsap.from("h1", {
//   color: "red",
//   duration: 2,
//   delay: 1,
// });

// ----- stagger property -----
// gsap.from("h1", {
//   opacity: 0,
//   duration: 2,
//   y: 30,
//   delay: 1,
//   stagger: 1,
// });

// ----- repeat property ------
// gsap.to("#box", {
//   x: 1200,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
//   repeat: -1,
// });

// ----- yoyo property -----
gsap.to("#box", {
  x: 1200,
  duration: 2,
  delay: 1,
  rotate: 360,
  repeat: -1,
  yoyo: true,
});
