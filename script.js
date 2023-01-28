"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  // modal.style.display = 'block'(would have done same thing as removing the hidden class)
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

const closeModals = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModals);
overlay.addEventListener("click", closeModals);
document.addEventListener("keydown", function (event) {
  console.log(event.key);
  // helps to identify the key that was clicked via accessing the key object
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModals();
  }
});
