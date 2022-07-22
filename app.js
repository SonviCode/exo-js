function finSimilaire(str, fin) {

    const lengthSecondWord = fin.length;

    const sliceFirstWord = str.slice(-lengthSecondWord);

    if(sliceFirstWord === fin){
        return "La fin est similaire"
    }
    else {
        return "La fin ne correspond pas"
    }

}

console.log(finSimilaire("oursb", "rsb"));



// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui vous informe si les lettres(second arguments),
// correspondent à la fin du mot(premier argument).
// Si elles correspondent, retournez "La fin est similaire"
// Sinon "La fin ne correspond pas".



