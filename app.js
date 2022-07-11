//ceka importe la bibliotheque "prompt-sync" qui permet de recuperer des entrees d'utilisateurs
const prompt = require("prompt-sync")({ sigint: true });

// Ca, ca sert a afficher du texte dans la console mais ne bloque pas le code (ca continue aux lignes dessous )
console.log("coucou lolo");

// ca affiche un texte et attends une entrée.  ca attends (bloque le code)
const name = prompt("Quel est ton nom?");
console.log(`Hey Salut ${name}`);
console.log("ou encore");
console.log("salut " + name);

// Maintenant un exemple plus compliqué
if (prompt("veux tu faire une addition ?") == "oui") {
	const a = prompt("ton premier nombre ?");
	const b = prompt("ton deuxieme nombre ?");
	let addition = a + b;
	console.log("le resultat est " + addition);
	prompt("bizarre non?");
	prompt("et la ?");
	addition = Number(a) + Number(b);
	console.log("le resultat est " + addition);
	prompt("c'est mieux non?");
	prompt("sais tu pourquoi?");
	console.log("ca, c'est le type de a => " + typeof a);
	console.log("ca, c'est le type de Number(a) => " + typeof Number(a));
} else console.log("tu veux pas ?");

// Maintenant les boucles
let nombreEssai = 0;
while (nombreEssai < 10) {
	prompt("a chaque fois que tu fait entrée, cela ajoute 1 à nombreEssai");
	console.log("nombre d'essai = ", nombreEssai);

	//ceci incremente la variable
	nombreEssai++; // equivalent a nombreEssai=nombreEssai+1
}

// maintenant avoir un nombre aleatoire
let aleat = Math.random(); // donne un nombre en 0 et 1 avec plein de chiffre
console.log(aleat);
console.log(aleat * 100); // donne un nombre en 0 et 100 avec plein de chiffre
// et pour un nombre entier
console.log(Math.round(aleat * 100));
console.log(" maintenant sers toi de tout ca pour faire le jeux du juste prix !");
console.log(" trouve un nombre entre 0 et 1000 !");
console.log(" avec 15 essai !");
