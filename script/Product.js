
// SCROLLABLE
const slider = document.getElementById("suggestion");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});


// ADDING TO BAG

let button = document.getElementById("bag")
button.addEventListener("click",function(){
  window.location.href = "cart.html";
})


// HAMBURGER SECTION
let ham = document.getElementById("ham-burger");
ham.addEventListener("click",function(){
  this.classList.toggle("is-active");
  if (this.classList.contains('is-active')){
    openNav();
  } else {
    closeNav();
  }

})
function openNav(){
  console.log("open");
  document.getElementById("burger").style.display = "initial";
}
function closeNav(){
  console.log("close nav")
  document.getElementById("burger").style.display = "none";
}