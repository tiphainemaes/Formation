const maFamille = {
    nom : "Maes",
    prenom : "Tiphaine",
    age : 27,
    neeALille : true,
    paysVisite : ["France", "Italie", "Belgique", "Allemagne", "Malte", "Espagne", "Pays Bas", "Angleterre"],
    monConjoint : {
        nom : "Decottignies",
        prenom : "Julien",
        age : 29
    },
    mesParents : [
        {
            nom : "Maes",
            prenom : "Frederic",
            parente : "Père",
            age : 58
        },
        {
            nom : "Maes",
            prenom : "Fabienne",
            parente : "Mère",
            age : 57
        }
    ],
    mesFreresEtSoeurs : [
        {
            nom : "Maes",
            prenom : "Morgane",
            parente : "Grande Soeur", 
            age : 28
        },
        {
            nom : "Maes",
            prenom : "Théo",
            parente : "Petit Frère", 
            age : 24
        },
        {
            nom : "Maes",
            prenom : "Betty",
            parente : "Petite Soeur", 
            age : 20
        },
    ]
}

console.log(maFamille);
console.log(JSON.stringify(maFamille));

