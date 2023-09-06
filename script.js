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
  cube.style.animation = `rotate ${getRandom(5, 10)}s linear infinite`;
  scene.appendChild(cube);

  for (let j = 0; j < 10; j++) {
    const face = document.createElement("div");
    face.classList.add("face");
    face.style.transform = `rotateY(${j * 60}deg) translateZ(20px)`;
    cube.appendChild(face);
  }
}
