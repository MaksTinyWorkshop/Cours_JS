// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

// Ranger la sidebar si on click sur le contenu principal

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : id > classe > baliseHt

const sidebar = document.getElementById("side-bar");
const content = document.querySelector(".content");

btn.addEventListener("click", function () {
  sidebar.classList.toggle("active");

  btn.children[0].classList.toggle("span1"); // On cible le premier enfant de la balise btn
  btn.children[1].classList.toggle("span2"); // On cible le deuxième enfant de la balise btn
  btn.children[2].classList.toggle("span3"); // On cible le troisième enfant de la balise btn

  content.addEventListener("click", function () {
    sidebar.classList.remove("active");
  });
});

// EN CORRECTION
/* Sans se faire chier à ajouter au btn une classlist span1 avec le java etc => 

aller dans le css et déclarer : 
.active span {
  position: absolute;
} 
.active span:nth-child(1) {
  transform: rotate(45deg);
} 
etc... pour le 2 et 3
  */
