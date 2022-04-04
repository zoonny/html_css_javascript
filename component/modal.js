const modal = document.querySelector(".modal");
const openBtn = document.querySelector("button[class=btn_open]");
const closeBtn = document.querySelector("button[class=btn_close]");
const modalBackground = modal.querySelector(".modal_background");

function displayModal() {
    modal.classList.toggle("hidden");
}

openBtn.addEventListener("click", displayModal);
closeBtn.addEventListener("click", displayModal);
modalBackground.addEventListener("click", displayModal);

displayModal();