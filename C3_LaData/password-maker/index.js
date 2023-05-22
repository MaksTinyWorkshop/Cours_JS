// Creer une fonction qui genere un mot de passe aleatoire quand on appuie sur le bouton

const dataLowercase = "abcdefghijklmnopqrstuvwxyz"; // Données
const dataUppercase = dataLowercase.toUpperCase(); // Données
const dataNumbers = "0123456789"; // Données
const dataSymbols = "!@#$%^&*\"'()_+=-{}[]"; // Données
const rangeValue = document.getElementById("password-length"); // Range
const passwordOutput = document.getElementById("password-output");

function generatePassword() {
  // Fonction qui genere le mot de passe
  let data = []; // Tableau qui contiendra les données
  let password = ""; // Mot de passe

  if (lowercase.checked) data.push(...dataLowercase); // Si la checkbox est cochée, on ajoute les données dans le tableau
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    // Si le tableau est vide
    alert("Veuillez sélectionner des Critères"); // Affiche une alerte
    return; // Stop la fonction
  }

  for (i = 0; i < rangeValue.value; i++) {
    // Boucle qui genere le mot de passe
    password += data[Math.floor(Math.random() * data.length)]; // Ajoute une lettre aleatoire dans le mot de passe
  }
  passwordOutput.value = password; // Affiche le mot de passe dans l'input

  passwordOutput.select(); // Selectionne le mot de passe
  document.execCommand("copy"); // Copie le mot de passe

  generateButton.textContent = "Copié !"; // Change le texte du bouton
  setTimeout(() => {
    generateButton.textContent = "Générer mot de passe";
  }, 2000); // Remet le texte du bouton apres 2 secondes
}

generateButton.addEventListener("click", generatePassword);
