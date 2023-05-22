//Rappel des types de données
let sting = "Chaine";
let number = 25;
let boolean = true;
let maVariable; // type undefined

// Tableau
let array = ["Bordeaux", "Toulouse", "Nantes"];

// Dans un tableau, on a des crochets, dans un "objet" on a des accolades
// On commence par index 0
// console.log(array[1]);   // Affiche Toulouse
// console.log(array[2][2]);   // Affiche le "n" de Nantes

let array2 = ["Bordeaux", 25, true, ["Toulouse", "Nantes"], { nom: "Dupont" }];
// console.log(array2[3][1]); // Affiche Nantes
// console.log(array2[4].nom);   // Affiche Dupont
// console.log(array2[4]["nom"]); // Affiche Dupont

let objet = {
  pseudo: "Denis",
  age: 33,
  technos: ["Javascript", "React", "NodeJs"],
  admin: false,
};

// console.log(objet.pseudo); // Affiche Denis
// console.log(objet["pseudo"]); // Affiche Denis
// console.log(objet.technos[1]); // Affiche React
// console.log(objet.technos[0][1]); // Affiche a de Javascript

// objet.adresse = "22 rue du code"; // Ajoute une propriété adresse à l'objet
// On peut aussi écrire objet["adresse"] = "22 rue du code";
// On peut modifier le type d'une propriété d'un objet

let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["CSS", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Nikola",
    age: 42,
    technos: ["Php", "React", "NodeJs"],
    admin: true,
  },
];

// console.log(data[0].pseudo); // Affiche Denis
// console.log(data[2].technos[0]); // Affiche Php

//---------------------------------------------
// Les structures de contrôle
//---------------------------------------------

// La condition if / else
if (data[0].age > data[1].age) {
  // console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
  // Valeur si faux
}

// if (valeur a tester) valeur si vrai // Si on a qu'une seule instruction, on peut écrire la condition sans les accolades

// valeur a tester ? valeur si vrai : valeur si faux; // Condition ternaire

// While
let w = 0;

while (w < 10) {
  w++;
  // console.log("La valeur de w est de : " + w);
}

// Do while
let d = 0;

do {
  d++;
  // console.log(d);
} while (d < 5);

// La boucle for
// Deux facons de l'écrire

// Façon 1
for (user of data) {
  // document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`; // Affiche les pseudos et les ages (avec les backticks et accolade dollar) dans une liste
  // Le backtick sur mon clavier est en dessous du £ => ``
  // Chaque element de ce tableau est appelé ici "user", on pourrait l'appeler autrement (ex: for (truc of data))
}

// Façon 2
// on déclare une variable i (index) qui commence à 0, on l'incrémente de 1 à chaque tour de boucle, et on s'arrête quand i est égal à la longueur du tableau
for (i = 0; i < data.length; i++) {
  // console.log(i); // Affiche les index
  // console.log(data[i].technos); // Affiche les technos dans la console
  // document.body.innerHTML += `<h2>${data[i].pseudo}</h2>`; // Affiche les pseudos dans des h2
}

// Switch
document.body.addEventListener("click", (e) => {
  //console.log(e.target.id); // Affiche l'élément sur lequel on a cliqué
  // au lieu de créer des if/else en cascade, on peut utiliser un switch
  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "violet";
      break;
    case "python":
      document.body.style.background = "blue";
      break;
    default: // Valeur par défaut si aucune des conditions n'est remplie
      null;
  }
});

// -------------------------------------------
// Les Méthodes
// -------------------------------------------

// ---------------
// Méthodes String
// ---------------

// Une méthode est une fonction icluse dans le code source de JS
let string2 = "Javascript est un langage orienté objet";

//typeof // Permet de connaitre le type d'une variable
// console.log(typeof string2); // Affiche string

// Eval + parseInt // Eval permet d'évaluer une expression (ex: 1 + 2) // parseInt permet de transformer un string en nombre
// console.log(eval(parseInt("1") + 2)); // Affiche 3
// console.log(isNaN(string2)); // Affiche true (car string2 n'est pas un nombre)

// length
// console.log(string2.length); // Affiche 37 (longueur de la chaine de caractères)
// console.log(string2[5]); // Affiche r
// console.log(string2.indexOf("est")); // Affiche 11 (car est commence à l'index 11) et retourne -1 si le terme n'est pas trouvé

// slice
// let newString = string2.slice(2); // Affiche vascript est un langage orienté objet
//let newString = string2.slice(5, 17); // Affiche ript est un l (on commence à l'index 5 et on s'arrête à l'index 17)

//split
// let newString = string2.split(" "); // Affiche ["Javascript", "est", "un", "langage", "orienté", "objet"] Découpe la chaine de caractères à chaque espace et crée un Tableau

// to lowercase et to uppercase
// let string3 = "Javascript";
// console.log(string3.toLowerCase()); // Affiche javascript
// console.log(string3.toUpperCase()); // Affiche JAVASCRIPT

// replace
// let string4 = "Javascript est un langage orienté objet";
// console.log(string4.replace("Javascript", "PHP")); // Affiche PHP est un langage orienté objet

// ----------------
// Méthodes Number
// ----------------

let number2 = 42.1234;
let numberString = "42.1234 est un nombre";

// toFixed
// console.log(number2.toFixed(2)); // Affiche 42.12 (on garde 2 chiffres après la virgule)

// ParseInt et parseFloat
// console.log(parseInt(numberString)); // Affiche 42 (on garde que la partie entière) et retourne NaN si le terme n'est pas trouvé (ex: parseInt("test")) et il faut que le nombre soit au début de la chaine de caractères
// console.log(parseFloat(numberString)); // Affiche 42.12 (on garde la partie entière et la partie décimale)

// Math -----------
// console.log(Math.PI); // Affiche 3.141592653589793

// Math.round
// console.log(Math.round(number2)); // Affiche 42 (arrondi)

// Math.floor
// console.log(Math.floor(number2)); // Affiche 42 (arrondi à l'entier inférieur)

// Math.ceil
// console.log(Math.ceil(number2)); // Affiche 43 (arrondi à l'entier supérieur)

// Math.pow
// console.log(Math.pow(2, 7)); // Affiche 128 (2 puissance 7)

// Math.sqrt
// console.log(Math.sqrt(16)); // Affiche 4 (racine carrée)

// Math.random
// console.log(Math.random()); // Affiche un nombre aléatoire entre 0 et 1
// console.log(Math.round(Math.random() * 100)); // Affiche un nombre aléatoire entre 0 et 100
// console.log(Math.floor(Math.random() * 100)); // Affiche un nombre aléatoire entre 0 et 99

// ----------------

// Méthodes Array -------------

let array3 = ["Javascript", "PHP", "Python"];
let array4 = ["Ruby", "Solidity"];

// concat
// -----Methode 1 :
let newArray = array3.concat(array4); // On concatène array3 et array4 dans une nouvelle variable
// console.log(newArray); // Affiche ["Javascript", "PHP", "Python", "Ruby", "Solidity"]

// -----Methode 2 :
// let newArray = [...array3, ...array4]; console.log(newArray) ;// Affiche ["Javascript", "PHP", "Python", "Ruby", "Solidity"] // ... permet de décomposer un tableau (spread operator)

// join
// console.log(array3.join(" ")); // Affiche Javascript PHP Python (on peut mettre ce qu'on veut entre les éléments)

// slice
// console.log(newArray.slice(2)); // Affiche ["Python", "Ruby", "Solidity"] (on commence à l'index 2)
// console.log(newArray.slice(2, 4)); // Affiche ["Python", "Ruby"] (on commence à l'index 2 et on s'arrête à l'index 4)

// indexOf
// console.log(newArray.indexOf("Python")); // Affiche 2 (car Python commence à l'index 2)

// forEach
// newArray.forEach((element) => {
//   console.log(element); // Affiche chaque élément du tableau
// });

// every
// console.log(newArray.every((prout) => prout === "PHP")); // Affiche false (car tous les éléments ne sont pas égaux à PHP)
// renvoie true si TOUS les éléments du tableau sont égaux à PHP

// some
// console.log(newArray.some((language) => language === "PHP")); // Affiche true (car au moins un élément est égal à PHP)
// renvoie true si AU MOINS UN élément du tableau est égal à PHP

// shift
// newArray.shift(); // Supprime le premier élément du tableau
// console.log(newArray); // Affiche ["PHP", "Python", "Ruby", "Solidity"]

// pop
// newArray.pop(); // Supprime le dernier élément du tableau
// console.log(newArray); // Affiche ["Javascript", "PHP", "Python", "Ruby"]

// splice
// const restArray = array3.splice(1, 1, "C++"); // Supprime 1 élément à partir de l'index 1 et ajoute C++ à la place
// console.log(array3); // Affiche ["Javascript", "C++", "Python"]
// console.log(restArray); // Affiche ["PHP"] (élément supprimé)

// IMPORTANT //

let arrayNumber = [4, 74, 28, 12, 1];

// reduce
// console.log(arrayNumber.reduce((a, b) => a + b));
// Affiche 119 (additionne tous les éléments du tableau et retourne un nombre)

// push
// arrayNumber.push("Coucou");
// console.log(arrayNumber);
// Affiche [4, 74, 28, 12, 1, "Coucou"] (ajoute Coucou à la fin du tableau)
arrayNumber.push(17);

// FILTER, SORT, MAP // LE TRIO GAGNANT //

// filter
// console.log(arrayNumber.filter((number) => number > 10));
// Affiche [74, 28, 12, 17] (retourne un tableau avec les éléments supérieurs à 10)

// sort
//console.log(arrayNumber.sort());
// La methode sort peut causer des problèmes juste comme ca avec les nombres car il trie les éléments comme des strings donc alphabetiquement (ex: 12 > 4 car 1 > 4) Il range avec les index
// On l'agrémente d'une fonction pour trier les nombres
// console.log(arrayNumber.sort((a, b) => a - b)); // a et b etant des conventions
// Affiche [1, 4, 12, 17, 28, 74] (retourne un tableau trié par ordre croissant)
// console.log(arrayNumber.sort((a, b) => b - a)); // a et b etant des conventions
// Affiche [74, 28, 17, 12, 4, 1] (retourne un tableau trié par ordre décroissant)
// console.log(arrayNumber.sort((a, b) => b - a).reverse()); // a et b etant des conventions
// Affiche [1, 4, 12, 17, 28, 74] (retourne un tableau trié par ordre croissant)
// On peut multiplier les méthodes pour filtrer et ensuite trier
// console.log(arrayNumber.filter((number) => number > 10).sort((a, b) => a - b));
// Affiche [12, 17, 28, 74] (retourne un tableau trié par ordre croissant et supérieur à 10)

// map
// Même chose que forEach mais retourne un tableau
//document.body.innerHTML = arrayNumber
//  .map((number) => `<li>${number}</li>`)
//  .join("");
// Affiche une liste HTML avec les éléments du tableau (4, 74, 28, 12, 1, 17) (on peut mettre ce qu'on veut entre les éléments) puis on utilise join pour enlever les virgules

// ----------------
// Methode Objects
// ----------------

// Si on veut afficher un map de nos utilisateurs
/* document.body.innerHTML = data
  .filter((user) => user.admin === false) // On filtre les utilisateurs qui ne sont pas admin
  .filter((user) => user.pseudo.includes("Den")) // On filtre les utilisateurs dont le pseudo contient Den
  .sort((a, b) => b.age - a.age) // On trie les utilisateurs par ordre décroissant d'âge
  .map(
    (user) =>
      `
  <div class= "user-card">
    <h2>${user.pseudo}</h2>
    <p>Age : ${user.age}</p>
    <p>Statut : ${user.admin ? "Modérateur" : "Membre"}</p>
  </div>
`
  ) // On map les utilisateurs pour afficher leurs infos
  .join(""); // On utilise join pour enlever les virgules
 */

// ----------------
// DATES
// ----------------

// Date Classique
let date = new Date();
//console.log(date); // Affiche la date du jour

// Date avec un timestamp
let timestamp = Date.parse(date); // On récupère le timestamp de la date du jour
//console.log(timestamp); // Affiche le timestamp de la date du jour

// isoString
let iso = date.toISOString(); // On récupère la date du jour au format ISO

function dateParser(chaine) {
  // On crée une fonction pour parser la date
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }); // On crée une nouvelle date avec la chaine de caractère passée en paramètre et on la formate
  return newDate; //
}

// ----------------
// Destucturing
// ----------------

let moreData = {
  destVar: ["element1", "element2"],
};

const { destVar } = moreData; // On crée une constante destVar qui récupère la valeur de moreData.destVar

let array5 = [70, 80, 90];
let [x, y, z] = array5; // On crée 3 constantes x, y et z qui récupèrent les valeurs de array5

// Par exemple, sur iso
const dateDestructuring = (chaine) => {
  // On crée une fonction qui prend en paramètre une chaine de caractère
  let newDate = chaine.split("T")[0]; // On récupère la date du jour au format ISO et on la split pour ne garder que la date
  [y, m, d] = newDate.split("-"); // On crée 3 constantes y, m et d qui récupèrent les valeurs de newDate (année, mois et jour) en les splittant par - (ex: 2021-07-28)
  return [d, m, y].join("/"); // On retourne un tableau avec les valeurs de d, m et y séparées par / (ex: 28/07/2021)
};
// console.log(dateDestructuring(iso));

// ----------------
// Les Datasets
// ----------------

// On peut ajouter des attributs à nos éléments HTML avec data- (ex: data-lang="Javascript") et les récupérer avec dataset dans le JS (ex: h3js.dataset.lang)

const h3js = document.getElementById("javascript");
console.log(h3js.dataset); // Affiche "Javascript" (on récupère la valeur de data-lang)

const h3 = document.querySelectorAll("h3");

// h3.forEach((language) => console.log(language.dataset.lang)); // Affiche "Javascript", "Python", "Php" (on récupère la valeur de data-lang de chaque h3)

// ----------------
// Les Regex
// ----------------

let mail = "from_scratch33@gmail.com";
// search
//console.log(mail.search(/from/)); // Affiche 0 (on récupère l'index de la première occurence de "from") renvoie -1 si il ne trouve pas

// replace
//console.log(mail.replace(/from/, "de")); // Affiche "de_scratch33@gmailcom" (on remplace la première occurence de "from")

// match -----------

// console.log(mail.match(/from/)); // Affiche ["from"] (on récupère la première occurence de "from") renvoie null si il ne trouve pas
// console.log(mail.match(/FRom/i)); // Affiche ["from"] (on récupère la première occurence de "from" en ignorant la casse)
// console.log(mail.match(/[123]/)); // Affiche ["3"] (on récupère la première occurence de 1, 2 ou 3) renvoie null si il ne trouve pas

// match toutes les lettres
// console.log(mail.match(/[a-z]/)); // Affiche ["f"] (on récupère la première occurence de a à z) renvoie null si il ne trouve pas

//matcher tous les chiffres
// console.log(mail.match(/\d/)); // Affiche ["3"] (on récupère la première occurence de 0 à 9) renvoie null si il ne trouve pas

//match un mail
// console.log(mail.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)); // Affiche ["from_scratch33@gmail.com"]

let separator = 265264849;

// un peu creer une regex pour séparer les milliers
console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")); // Affiche 265 264 849 (on remplace les 3 derniers chiffres par un espace)
