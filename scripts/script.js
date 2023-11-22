let listeInputRadio = document.querySelectorAll(".zoneChoix input");
console.log(listeInputRadio);

function afficherResultat(score, nbMotsproposes) {
    // Affichage du score de l'utilisateur
    console.log("Votre score est de " + score + " sur " + nbMotsproposes)
}

function choisirPhrasesOuMots() {
    //Tant que l'uitilisateur n'a pas choisi "mots" ou "phrases" on lui redemande
    let choix = prompt("Veuillez choisir la liste: mots ou phrases")
    while (choix !== "mots" && choix !== "phrases") {
        choix = prompt("Veuillez choisir la liste: mots ou phrases")
    }
    return choix
}

function lancerBoucleDeJeu(listePropositions) {
    let score = 0
    for (let i = 0; i < listePropositions.length; i++) {
        motUtilisateur = prompt('Entrez le mot : ' + listePropositions[i])
        if (motUtilisateur === listePropositions[i]) {
            score++
        }

    }
    return score
}    

function lancerLeJeu() {
    let choix = choisirPhrasesOuMots()
    let score = 0
    let nbMotsProposes = 0

    if (choix === 'mots') {
        score = lancerBoucleDeJeu(listeMots)
        nbMotsProposes = listeMots.length
    } else {
        score = lancerBoucleDeJeu(listePhrases)
        nbMotsProposes = listePhrases.length
    }

    afficherResultat(score, nbMotsProposes)
}