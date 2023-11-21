let score = 0

let choix = prompt("Veuillez choisir la liste: mots ou phrases")
while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("Veuillez choisir la liste: mots ou phrases")
}

if (choix === "mots") {
    for (let i = 0; i < listeMots.length; i++) {
        // Déclaration de la variable contenant le mot saisi par l'utilisateur
        // Le prompt sert à afficher une popup demandant à l'utilisateur de saisir un mot
        let motUtilisateur = prompt('Entrez le mot : ' + listeMots[i])

        // Vérification du mot saisi par l'utilisateur : on vérifie qu'il correspond au premier mot du tableau "listeMots"
        if (motUtilisateur === listeMots[i]) {
            score++
        }
    }
    // Affichage du score de l'utilisateur
    console.log("Votre score est de " + score + " sur " + listeMots.length)
} else {
    for (let i = 0; i < litePhrases.length; i++) {
        let motUtilisateur = prompt('Entrez la phrse : ' + litePhrases[i])
        if (motUtilisateur === litePhrases[i]) {
            score++
        }
    }

    // Affichage du score de l'utilisateur
    console.log("Votre score est de " + score + " sur " + litePhrases.length)
}