let lastelement;
const form = document.querySelector("form");

form.addEventListener("click", clickHandler);

function clickHandler(e) {
  if (lastelement !== undefined) {
    lastelement.classList.add("x");
  }
  const value = e.target.value;
  console.log(value);

  const element = document.querySelector(`.${value}`);
  // if (element === null) {
  //   return;
  // }

  console.log(element);

  // if (element === null) {
  //   console.log("currenlt there are no options");
  //   return;
  // }
  const elementAll = document.querySelector(".all").children;

  console.log(elementAll);
  for (let i = 0; i < elementAll.length; i++) {
    if (value === "all") {
      elementAll[i].style.display = "block";
    }
    if (element === null) {
      elementAll[i].style.display = "none";
    }
    if (value !== "all" && element !== null) {
      if (elementAll[i].classList.value !== element.classList.value) {
        elementAll[i].style.display = "none";
      }
      if (elementAll[i].classList.value === element.classList.value) {
        elementAll[i].style.display = "block";
      }
    }
  }
}
