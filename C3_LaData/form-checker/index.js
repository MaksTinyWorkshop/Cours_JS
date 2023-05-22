const form = document.querySelector("form"); // On sélectionne le formulaire
const inputs = document.querySelectorAll(
  // On sélectionne tous les inputs
  'input[type="text"], input[type="password"]'
);

const progessBar = document.getElementById("progress-bar"); // On sélectionne la progress bar
let pseudo, email, password, confirmPass; // On initialise les variables

const errorDisplay = (tag, message, valid) => {
  // On crée une fonction qui va afficher les erreurs
  const container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container > span");

  if (!valid) {
    container.classList.add("error");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = message;
  }
};

// On crée une fonction qui va vérifier le pseudo
const pseudoChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay("pseudo", "Le pseudo doit contenir entre 3 et 20 caractères");
    pseudo = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay(
      "pseudo",
      "Le pseudo ne doit pas contenir de caractères spéciaux"
    );
    pseudo = null;
  } else {
    errorDisplay("pseudo", "", true);
    pseudo = value;
  }
};

// On crée une fonction qui va vérifier le mail
const mailChecker = (value) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay("email", "Le mail n'est pas valide");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};

// On crée une fonction qui va vérifier le mot de passe
const passwordChecker = (value) => {
  progessBar.classList = ""; // On enlève toutes les classes de la progress bar

  if (
    !value.match(
      //regex pour le mdp contenant au moins 8 caractères, une majuscule, un chiffre et un caractère spécial
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
    )
  ) {
    errorDisplay(
      "password",
      "Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial"
    );
    progessBar.classList.add("progressRed");
    password = null;
  } else if (value.length < 12) {
    progessBar.classList.add("progressBlue");
    errorDisplay("password", "", true);
    password = value;
  } else {
    progessBar.classList.add("progressGreen");
    errorDisplay("password", "", true);
    password = value;
  }
  if (confirmPass) confirmChecker(confirmPass);
};

// On crée une fonction qui va vérifier le confirm password
const confirmChecker = (value) => {
  if (value !== password || value == "") {
    errorDisplay("confirm", "La confirmation ne correspond pas");
    confirmPass = false;
  } else {
    errorDisplay("confirm", "", true);
    confirmPass = true;
  }
};

inputs.forEach((input) => {
  // Pour chaque input
  input.addEventListener("input", (e) => {
    // On écoute l'événement input
    switch (e.target.id) {
      case "pseudo":
        pseudoChecker(e.target.value);
        break;
      case "email":
        mailChecker(e.target.value);
        break;
      case "password":
        passwordChecker(e.target.value);
        break;
      case "confirm":
        confirmChecker(e.target.value);
        break;
      default:
        null;
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); // On empêche l'envoi du formulaire quand on le soumet on empêche le comportement par défaut

  if (pseudo && email && password && confirmPass) {
    const data = {
      pseudo: pseudo,
      email: email,
      password: password,
    };

    console.log(data);
    inputs.forEach((input) => (input.value = "")); // On vide les champs
    progessBar.classList = ""; // On enlève toutes les classes de la progress bar

    pseudo = null;
    email = null;
    password = null;
    confirmPass = null;
    alert("Inscription validée");
  } else {
    alert("Veuillez remplir correctement les champs");
  }
});
