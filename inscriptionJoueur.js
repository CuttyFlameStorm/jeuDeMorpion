


// *********Block JOUEUR 1 ******
const champInputJoueur1 = document.getElementById("Joueur1");
const info1 = document.getElementById("infoDeSaisieNomJoueur1");

champInputJoueur1.addEventListener("focus", () => {
    info1.style.display = "block";
});
champInputJoueur1.addEventListener("blur", () => {
    info1.style.display = "none";
});
//--
const selectAvatarJoueur1 = document.getElementById("Avatar1");
const info2 = document.getElementById("infoAvatar1");

selectAvatarJoueur1.addEventListener("focus", () => {
    info2.style.display = "block";
});
selectAvatarJoueur1.addEventListener("blur", () => {
    info2.style.display = "none";
});

// *********Block JOUEUR 2 ******
const champInputJoueur2 = document.getElementById("Joueur2");
const info3 = document.getElementById("infoDeSaisieNomJoueur2");

champInputJoueur2.addEventListener("focus", () => {
    info3.style.display = "block";
});
champInputJoueur2.addEventListener("blur", () => {
    info3.style.display = "none";
});
//--
const selectAvatarJoueur2 = document.getElementById("Avatar2");
const info4 = document.getElementById("infoAvatar2");

selectAvatarJoueur2.addEventListener("focus", () => {
    info4.style.display = "block";
});
selectAvatarJoueur2.addEventListener("blur", () => {
    info4.style.display = "none";
});

const apparition1 = document.getElementById("divAvat1");
const apparition2 = document.getElementById("divJoueur2");
const apparition3 = document.getElementById("divAvat2");

const VerifInputJoueur1 = document.getElementById("Joueur1");
const VerifSelectAvatar1 = document.getElementById("Avatar1");
const VerifInputJoueur2 = document.getElementById("Joueur2");



// --------APPARITION SUCCESSIVE DES INPUTS-------
VerifInputJoueur1.addEventListener("input", () => {
    if (VerifInputJoueur1.value !== "") {
        apparition1.style.display = "block";
    } else {
        apparition1.style.display = "none";
    }
});

VerifSelectAvatar1.addEventListener("input", () => {
    if (VerifSelectAvatar1.value !== "") {
        apparition2.style.display = "block";
    } else {
        apparition2.style.display = "none";
    }
});

VerifInputJoueur2.addEventListener("input", () => {
    if (VerifInputJoueur2.value !== "") {
        apparition3.style.display = "block";
    } else {
        apparition3.style.display = "none";
    }
});


//--------------Sauvegarde des noms des Joueurs dans une Varialbe Respectives -


const ChampGameStart = document.getElementById("GameStart");
const save = document.getElementById("savingJoueur");
const formulaire = document.getElementById("myForm");
const newgame = document.getElementById("reset");

// save.addEventListener("onclick", (event) => {
//     event.preventDefault();
//     // Ton code de traitement ici
// const joueur1 = document.getElementById("Joueur1").value;
// const avatar1 = document.getElementById("Avatar1").value;
// const joueur2 = document.getElementById("Joueur2").value;
// const avatar2 = document.getElementById("Avatar2").value;

// // Utilise les variables joueur1, avatar1, joueur2, avatar2 

// // console.log("Joueur 1:", joueur1);
// // console.log("Avatar 1:", avatar1);
// // console.log("Joueur 2:", joueur2);
// // console.log("Avatar 2:", avatar2);

// formulaire.style.display = "none";
// ChampGameStart.style.display = "block";

// });

function goToPlay() {
    
    const joueur1 = document.getElementById("Joueur1").value;
    const avatar1 = document.getElementById("Avatar1").value;
    const joueur2 = document.getElementById("Joueur2").value;
    const avatar2 = document.getElementById("Avatar2").value;
    
    if (joueur1 !== "" && avatar1 !== "" && joueur2 !== "" && avatar2 !== ""){
    formulaire.style.display = "none";
    ChampGameStart.style.display = "block";
    console.log("Joueur1");
    console.log("Avatar1");
    console.log("Joueur2");
    console.log("Avatar2");
    console.log("variables backuped");
    console.log("apparition de la table jeu et apparition du bouton 'nouveau Jeu'");
    newgame.style.display = "block";  
    } 
      alert("Passez d'abord par l'inscription");
    
}

    
