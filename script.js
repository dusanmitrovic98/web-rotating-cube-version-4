const scene = document.getElementById("scene");

// Function to generate a random number between min and max
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

// Create and add cubes to the scene
for (let i = 0; i < 50; i++) {
  const cube = document.createElement("div");
  cube.classList.add("cube");
  cube.style.left = `${getRandom(0, 100)}%`;
  cube.style.top = `${getRandom(0, 100)}%`;
  cube.style.transform = `translateZ(${getRandom(-200, 200)}px)`;
