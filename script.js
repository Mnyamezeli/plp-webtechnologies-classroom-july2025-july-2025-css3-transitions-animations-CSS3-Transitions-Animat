// Global scope variable
const box = document.querySelector(".box");
const button = document.getElementById("animateBtn");

// Function with parameters and return value
function toggleAnimation(element, animationType) {
  if (!element) return false; // return value for invalid input

  // Scope: local variable
  let applied = false;

  if (animationType === "grow") {
    element.classList.toggle("grow");
    applied = true;
  } else if (animationType === "spin") {
    element.classList.toggle("spin");
    applied = true;
  }

  return applied; // return boolean result
}

// Event listener that demonstrates scope & triggers animation
button.addEventListener("click", () => {
  // Alternate between grow and spin animations
  const random = Math.random() > 0.5 ? "grow" : "spin";
  const result = toggleAnimation(box, random);

  console.log(`Animation "${random}" applied:`, result);
});
