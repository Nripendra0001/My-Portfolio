const roles = [
  "Hi, I'm Nirpendra Kumar Pandey ",
  "Full Stack Developer",
  "SarkariNext Creator",
  "Building Real Products"
];

let i = 0;
let j = 0;
let isDeleting = false;

const el = document.getElementById("typing");

function typeEffect() {
  const word = roles[i];

  // ❌ cursor yaha add nahi karna (ye problem tha)
  el.textContent = word.substring(0, j);

  if (!isDeleting) {
    j++;
    if (j > word.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    j--;
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 40 : 80);
}

window.onload = typeEffect;