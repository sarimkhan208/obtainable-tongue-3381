
console.log("ok")
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

// CAROUSEL SECTION

let cont = document.getElementById("carousel")
let image = document.createElement("img")
let arr = ["https://images-static.nykaa.com/uploads/aa5a6aa1-6cc9-47ec-b31e-cd96e48dd5f5.jpg?tr=w-1200,cm-pad_resize",
            "https://images-static.nykaa.com/uploads/b428a11f-c4fa-4865-b56b-8889f85e0059.jpg?tr=w-1200,cm-pad_resize",
            "https://images-static.nykaa.com/uploads/efecb96d-ecf8-4500-9fd0-d4f57f5e0ec2.png?tr=w-1200,cm-pad_resize",
            "https://images-static.nykaa.com/uploads/86f9dc3b-88ec-477b-b5cd-8da509a38ca8.jpg?tr=w-1200,cm-pad_resize",
            "https://images-static.nykaa.com/uploads/7250c4ef-daf6-4f77-ab9d-ea897b773904.jpg?tr=w-1200,cm-pad_resize",
            "https://images-static.nykaa.com/uploads/42f8176c-8ca3-43e1-991a-32dfa4ca16f7.jpg?tr=w-1200,cm-pad_resize",
            "https://images-static.nykaa.com/uploads/3ebd3715-0853-4673-8797-87d1d9d0b74c.jpg?tr=w-1200,cm-pad_resize"]
image.src = arr[0]
cont.append(image);
let index = 1
setInterval(function(){
  if(index == 5){index=0}
  image.src = arr[index]
  cont.append(image)
  index++;
},3000)

// HAMBURGER SECTION
let ham = document.getElementById("ham-burger");
let ham2 = document.getElementById("ham-burger");
ham.addEventListener("click",function(){
  document.getElementById("burger").style.display = "initial";
})


// Product
let productCont = document.getElementById("feature-cont");
productCont.addEventListener("click",function(){
  window.location.href = "product.html"
})
let productCont1 = document.getElementById("suggestion");
productCont1.addEventListener("click",function(){
  window.location.href = "product.html"
})
let productCont2 = document.getElementById("top-brand-container");
productCont2.addEventListener("click",function(){
  window.location.href = "product.html"
})