const stars = document.querySelectorAll(".star");
const text = document.getElementById("text");
let selected = 0; // hover effect
stars.forEach((star, index) => {
  star.addEventListener("mousemove", (e) => {
    const rect = star.getBoundingClientRect();
    const isHalf = e.clientX - rect.left < rect.width / 2;
    let value = index + 1;
    if (isHalf) value -= 0.5;
    highlight(value);
  });
  star.addEventListener("click", (e) => {
    const rect = star.getBoundingClientRect();
    const isHalf = e.clientX - rect.left < rect.width / 2;
    selected = index + 1;
    if (isHalf) selected -= 0.5;
    updateText(selected);
  });
}); // reset on leave
document.getElementById("rating").addEventListener("mouseleave", () => {
  highlight(selected);
}); // highlight logic
function highlight(value) {
  stars.forEach((star, i) => {
    star.classList.remove("full", "half");
    if (i < Math.floor(value)) {
      star.classList.add("full");
    } else if (i === Math.floor(value) && value % 1 !== 0) {
      star.classList.add("half");
    }
  });
} // text output
function updateText(val) {
  let msg = val <= 2 ? "Poor" : val <= 3.5 ? "Good" : "Excellent";
  text.textContent = `${msg} (${val})`;
} // init
highlight(0);
