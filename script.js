"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");
// console.log(btnOpenModal);
const openModal = function () {
  // working with classes
  // console.log("button clicked");

  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  // modal.style.display = "block";
};

const closeModal = function () {
  // overlay.addEventListener("click");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// "Esc" key press event
document.addEventListener("keydown", function (e) {
  // console.log("A key was pressed");
  console.log(e.key);
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
    // console.log("Escape was pressed");
  }
});
