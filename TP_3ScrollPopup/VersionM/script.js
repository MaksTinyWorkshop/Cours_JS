// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours
let popup = document.getElementById("popup");
let justone = true;

window.addEventListener("scroll", () => {
  let navbar = document.getElementById("navbar");
  let img = document.getElementById("imgImprovise");

  console.log(window.scrollY);

  if (window.scrollY > 1300 && justone) {
    popup.style.opacity = 1;
    popup.style.transform = "translateX(0)";
    justone = false;
  } else if (window.scrollY > 200) {
    img.style.opacity = 1;
    img.style.transform = "translateX(0)";
  } else if (window.scrollY > 20) {
    navbar.style.height = "50px";
  } else {
    navbar.style.height = "90px";
  }
});

window.addEventListener("click", () => {
  let closeBtn = document.getElementById("closeBtn");

  closeBtn.addEventListener("click", () => {
    popup.style.opacity = 0;
    popup.style.transform = "translateX(100%)";
    popup.style.transition = "1s ease-out forwards";
  });
});
