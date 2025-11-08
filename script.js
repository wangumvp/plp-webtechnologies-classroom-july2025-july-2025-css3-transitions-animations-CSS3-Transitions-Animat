/* ===== Part 2: JS Functions with Scope, Parameters, Return Values ===== */
const box = document.getElementById('box');

// Global variable
let boxPosition = 0;

// Function to move box right
function moveBox(distance) {
  // Local variable inside function
  boxPosition += distance;
  box.style.left = boxPosition + "px";
  return boxPosition; // Return the new position
}

// Function to move box left
function moveBoxLeft(distance) {
  boxPosition -= distance;
  box.style.left = boxPosition + "px";
  return boxPosition;
}

// Event listeners for buttons
document.getElementById('moveRightBtn').addEventListener('click', () => {
  const pos = moveBox(50); // Move right 50px
  console.log("Box moved right to:", pos);
});

document.getElementById('moveLeftBtn').addEventListener('click', () => {
  const pos = moveBoxLeft(50); // Move left 50px
  console.log("Box moved left to:", pos);
});

/* =====  Modal Popup Logic ===== */
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex'; // Show modal
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none'; // Hide modal
});

// Close modal if user clicks outside modal content
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});


/* ===== Part 3: Trigger CSS Animation via JS ===== */
const spinBtn = document.getElementById('spinBtn');

function triggerSpin(element) {
  // Remove class to reset animation if still running
  element.classList.remove('spin');

  // Trigger reflow to restart animation
  void element.offsetWidth;

  // Add class to start animation
  element.classList.add('spin');

  return "Spin triggered!";
}

spinBtn.addEventListener('click', () => {
  const message = triggerSpin(box);
  console.log(message);
});
