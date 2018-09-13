
// =================Step One======================================

const current = document.querySelector("#Current");

const imgs = document.querySelectorAll(".imgs img");

const opacity = 0.8;

// Set first img opacity
imgs[0].style.opacity = opacity;

// ===========================Step two==========================
imgs.forEach(img => img.addEventListener("click", imgClick));

function imgClick(e) {
  // Reset opacity after the img is clicked
  imgs.forEach(img => (img.style.opacity = 1));

  // Change current image to src of clicked image
  current.src = e.target.src;

  // Add fade in class
  current.classList.add("fade-in");
  // Remove fade-in class
  setTimeout(() => current.classList.remove("fade-in"), 500);

  // Change opacity to opacity var

  e.target.style.opacity = opacity;
}

// imgs.forEach(img =>
//   img.addEventListener("click", e => (current.src = e.target.src))
// );

// // Shortened version
//
// // const current [current, imgs] = [document.querySelector('#Current'), document.querySelectorAll('.imgs img')];
// imgs.forEach(img =>
//   img.addEventListener("click", e => (current.src = e.target.src))
// // );
//  function imgClick(e){
//     current.src = e.target.src.
// }
