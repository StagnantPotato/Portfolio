// PHASE: CONTACT_TOGGLE
function toggleContact(index) {
  const output = document.getElementById(`contact${index}`);
  output.classList.toggle("show");
}

// PHASE: TYPEWRITER_CONFIG
const target = document.getElementById("typing-target");
const text =
  "I specialize in building desktop and web applications using C# and VB.NET.";
const TYPING_SPEED = 60;
const DELETING_SPEED = 30;
const PAUSE_BEFORE_DELETE = 3000; // How long to stay visible
const PAUSE_BEFORE_RETYPE = 500;

let charIndex = 0;
let isDeleting = false;

// PHASE: ANIMATION_LOOP
function runTypewriter() {
  const currentText = target.textContent;

  // LOGIC: DETERMINE_STATE
  if (!isDeleting && charIndex < text.length) {
    // STATE: TYPING
    target.textContent = text.substring(0, charIndex + 1);
    charIndex++;
    setTimeout(runTypewriter, TYPING_SPEED);
  } else if (isDeleting && charIndex > 0) {
    // STATE: DELETING
    target.textContent = text.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(runTypewriter, DELETING_SPEED);
  } else {
    // STATE: SWITCHING
    isDeleting = !isDeleting;

    // Add a longer pause when the full sentence is visible
    const delay = isDeleting ? PAUSE_BEFORE_DELETE : PAUSE_BEFORE_RETYPE;
    setTimeout(runTypewriter, delay);
  }
}

// PHASE: INITIALIZATION
window.addEventListener("load", () => {
  // Start after the panel animations settle
  setTimeout(runTypewriter, 1000);
});
