"use strict";
const btn = document.querySelectorAll("button");
const showdetail = document.querySelectorAll(".showdetail");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function clickbtn() {
    const content = this.nextElementSibling;
    btn.forEach((element) => {
      element.classList.remove("active");
    });

    showdetail.forEach((element) => {
      if (element !== btn[i].nextElementSibling) {
        element.classList.add("hidden");
      }
    });
    if (content.classList.contains("hidden")) {
      content.classList.remove("hidden");
      btn[i].classList.add("active");
    } else {
      content.classList.add("hidden");
    }
  });
}
