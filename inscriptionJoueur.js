

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