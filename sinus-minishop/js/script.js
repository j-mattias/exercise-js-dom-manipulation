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
addressRef.innerHTML = "Cool skateboards <br> Evergreen Terrace 742, <br> Springfield";

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

// 12
const createMenuOption = document.createElement("a");
createMenuOption.textContent = "About";
createMenuOption.href = "#";
const menuRef = document.querySelector("header > nav > a:last-of-type");
menuRef.after(createMenuOption);

// 13
addProduct(
  document.querySelector("main"),
  "img/hoodie-forrest.png",
  "Sinus Hoodie",
  "Forest",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.",
  "add to cart"
);

function addProduct(insert, img, title, subtitle, text, btnText) {
  const productRef = document.createElement("article");
  const figureRef = document.createElement("figure");
  const imgRef = document.createElement("img");
  imgRef.src = img;
  imgRef.alt = `${subtitle} hoodie`;
  figureRef.appendChild(imgRef);
  const h2Ref = document.createElement("h2");
  h2Ref.textContent = title;
  const h3Ref = document.createElement("h3");
  h3Ref.textContent = subtitle;
  const pRef = document.createElement("p");
  pRef.textContent = text;
  const buttonRef = document.createElement("button");
  buttonRef.textContent = btnText;

  productRef.append(figureRef, h2Ref, h3Ref, pRef, buttonRef);
  insert.appendChild(productRef);
}

// 14
logoRef.addEventListener("click", () => {
  console.log("found you!");
});

// 15
const productRefs = document.querySelectorAll("main > article");
productRefs.forEach((productRef) => {
  productRef.addEventListener("click", () => {
    let productName = "";
    for (const el of productRef.childNodes) {
      if (el.tagName === "H3") {
        productName = el.textContent;
      }
    }
    console.log(`Hi, I'm article ${productName}`);
  });
});





// const createProduct = document.createElement("article");
// createProduct.classList.add("art-4");
// const createFigure = document.createElement("figure");
// const createImg = document.createElement("img");
// createImg.src = "img/hoodie-forrest.png";
// createImg.alt = "Forest hoodie";
// const createH2 = document.createElement("h2");
// createH2.textContent = "Sinus Hoodie";
// const createH3 = document.createElement("h3");
// createH3.textContent = "Forest";
// const createP = document.createElement("p");
// createP.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.";
// const createButton = document.createElement("button");
// createButton.textContent = "add to cart";
// const mainRef = document.querySelector("main");
// createFigure.appendChild(createImg);
// createProduct
//   .insertAdjacentElement("beforeend", createFigure)
//   .insertAdjacentElement("afterend", createH2)
//   .insertAdjacentElement("afterend", createH3)
//   .insertAdjacentElement("afterend", createP)
//   .insertAdjacentElement("afterend", createButton);
// mainRef.appendChild(createProduct);