"use strict";
const totalParagraph = document.querySelector(".total");
const snackButtons = document.querySelectorAll(".snack-button");
let total = 0;

snackButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const cost = button.getAttribute("data-cost");
    total += parseInt(cost);
    console.log(total);
    totalParagraph.textContent = `Total: $${total.toFixed(2)}`;
  });
});

const form = document.querySelector(".two form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const addInput = document.querySelector("#howMany").value;
  const whichCoin = document.querySelector("#whichCoin").value;
  for (let i = 0; i < addInput; i++) {
    const newCoin = document.createElement("div");
    newCoin.classList.add("howMany", "whichCoin");
    newCoin.textContent = whichCoin;
    bank.append(newCoin);
  }
});
