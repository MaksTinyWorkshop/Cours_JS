// Créer un événément au scroll

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)
let previousScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll > previousScroll) {
    document.querySelector("nav").style.top = "-60px";
  } else {
    document.querySelector("nav").style.top = "0";
  }
  previousScroll = currentScroll; // update previousScroll
});
