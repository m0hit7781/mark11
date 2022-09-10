const luckyNum = document.querySelector("#lucky-num");
const bday = document.querySelector("#bday");
const form = document.querySelector(".form");
const section = document.querySelector("section");
const result = document.querySelector(".result");
const model = document.querySelector(".model");
const modelBtn = document.querySelector(".model-btn");
const img = document.querySelector(".img");

img.style.display = "none";
model.style.display = "none";

setTimeout(() => {
  model.style.display = "";
}, 5000);

modelBtn.addEventListener("click", () => {
  model.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const dateSum = bday.value.split("-").reduce((a, c) => {
    return Number(a) + Number(c);
  }, 0);
  const luckyNumber = Number(luckyNum.value);

  const areYouLucky = dateSum % luckyNumber === 0 ? true : false;
  luckyNum.value = "";
  bday.value = "";

  section.classList.add("lucky-section");

  if (areYouLucky) {
    result.textContent = "Congratulations, Your Birthday is Lucky.";
  } else {
    result.innerHTML = `
      <h2>You are not lucky.</h2> 
      <p>OHHH! You're missed by ${
        dateSum % luckyNumber
      } days from being lucky.</p>
    `;
  }
});