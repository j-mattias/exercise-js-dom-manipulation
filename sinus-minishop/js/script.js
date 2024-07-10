// Code here!
// 1
const ashHoodieRef = document.querySelector(".art-1 > h3");
ashHoodieRef.textContent = "Potato";

// 2
const homeRef1 = document.querySelector("header > nav > a:first-child");
homeRef1.textContent = "Start";
const homeRef2 = document.querySelector("footer > section > article > a:first-of-type");
homeRef2.textContent = "Start";

// 3
const contactRef1 = document.querySelector("header > nav > a:last-of-type");
contactRef1.textContent = "Mail Us";
const contactRef2 = document.querySelector("footer > section > article > a:last-of-type");
contactRef2.textContent = "Mail Us";

// 4
const fireHoodieRef = document.querySelector(".art-2 > p");
fireHoodieRef.textContent = "Red is fire, red equals fast.";

// 5
const firstButtonRef = document.querySelector("button");
firstButtonRef.textContent = "Out of Stock";
firstButtonRef.style.backgroundColor = "red";

// 6
const waterHoodieFigRef = document.querySelector(".art-3 figure");
waterHoodieFigRef.style.backgroundColor = "#26cedf";

// 7
const addressRef = document.querySelector("footer > section > article:nth-child(2) > p");
addressRef.textContent = "Cool skateboards Evergreen Terrace 742, Springfield";

// 8
const pRefs = document.querySelectorAll("p");
pRefs.forEach((pRef) => {
  pRef.style.color = "purple";
});

// 9
const buttonRefs = document.querySelectorAll("button");
buttonRefs.forEach((buttonRef) => {
  buttonRef.textContent = "add to cart";
});

// 10
homeRef1.classList.add("active");
homeRef2.classList.add("active");

// 11
const logoRef = document.querySelector(".logo");
logoRef.classList.remove("logo");
