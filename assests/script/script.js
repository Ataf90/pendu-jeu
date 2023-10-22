console.log("script chargé ma gueule");

// -------------------------Generateur de mots --------------------
let mots = [
  "jacuzzi",
  "manches",
  "jukebox",
  "bazooka",
  "clavier",
  "ballons",
  "biscuit",
  "aquagym",
  "cubitus",
  "estomac",
  "algebre",
  "racines",
  "trousse",
  "homards",
  "neutron",
  "hache",
  "anticonstitutionnel",
  "rubis",
  "palindrome",
  "carburateur",
];
// ------------- généré mon mot aleéatoire
let motAleatoire = mots[Math.floor(Math.random() * mots.length)];
motAleatoire = motAleatoire.toUpperCase();
const arrayMotAleatoire = motAleatoire.split("");
console.log(arrayMotAleatoire);
let lettresRestantes = motAleatoire.length;
console.log(motAleatoire);

// ------------------------------crée mes paramètres----------------------------------------

let lettresClavier = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let saisie = [];
let trouveMot = [];
for (let i = 0; i < motAleatoire.length; i++) {
  trouveMot[i] = "_";
}
let nombreDeVies = 5;
let trouve = false;
const pendu = [
  "/assests/img/deux.png",
  "/assests/img/trois.png",
  "/assests/img/quatre.png",
  "/assests/img/cinq.png",
  "/assests/img/six.png",
  "/assests/img/sept.png",
];

let indexImage = 0;
//---------------attacher mes element html avec js ------------------------------

let main = document.getElementById("main");
let cadreImage = document.getElementById("pendu");

document.getElementById("mot_a_trouver").innerHTML = trouveMot.join(" ");

let image = document.createElement("img");
image.setAttribute("id", "img_pendu");
image.setAttribute("src", "/assests/img/un.png");
cadreImage.appendChild(image);

let cadreResultat = document.getElementById("resultat");

let image2 = document.createElement("img");
image2.setAttribute("src", "");
image2.setAttribute("id", "image_resultat");
cadreResultat.appendChild(image2);

let cadreClavier = document.getElementById("cadre_clavier");
let clavier = document.createElement("div");
clavier.classList.add("clavier");
cadreClavier.appendChild(clavier);

for (let index = 0; index < 26; index++) {
  let bouton = document.createElement("button");
  bouton.innerText = lettresClavier[index];
  bouton.classList.add("bouton");
  bouton.setAttribute("id", index);
  clavier.appendChild(bouton);
}
let boutonRefresh = document.createElement("button");
boutonRefresh.setAttribute("id", "bouton_refresh");
boutonRefresh.innerText = "REJOUER";
boutonRefresh.addEventListener("click", () => {
  location.reload();
});
// --------------------- Jeu ---------------------------------------

let essai = document.querySelectorAll(".bouton");
essai.forEach((unBouton) => {
  unBouton.addEventListener("click", (eventClick) => {
    let ecoute = eventClick.target.innerText;
    unBouton.setAttribute("disabled", "");
    for (let j = 0; j < motAleatoire.length; j++) {
      if (motAleatoire[j].includes(ecoute)) {
        lettresRestantes--;
        saisie.push(ecoute);
        console.log("saisie = " + saisie);
        trouve = true;
        trouveMot[j] = ecoute;
        if (lettresRestantes == 0) {
          image2.setAttribute("src", "/assests/img/gagner.jpg");
          console.log("C'EST GAGNÉ");
          clavier.style.display = "none";
          cadreResultat.appendChild(boutonRefresh);
          break;
        }
      }
      console.log("lettres restantes = " + lettresRestantes);
    }
    if (trouve === false) {
      nombreDeVies--;
      indexImage++;
      image.setAttribute("src", pendu[indexImage]);
    }

    console.log(nombreDeVies);
    console.log("nombre de vies = " + nombreDeVies);

    if (nombreDeVies === 0) {
      resultat = "PERDU";
      console.log("PERDU");
      image2.setAttribute("src", "/assests/img/perdu.png");
      clavier.style.display = "none";
      cadreResultat.appendChild(boutonRefresh);
    }
    trouve = false;
    console.log(trouveMot);
    document.getElementById("mot_a_trouver").innerHTML = trouveMot.join(" ");
  });
});

//-----------crée une celule-----------------
// for (let index = 0; index < motAleatoire.length; index++) {
//   let celule = document.createElement("div");
//   celule.classList.add("celule-devine");
//   motSecret.appendChild(celule);
// }

// // for (let index = 0; index < arrayMotMystere.length; index++) {
// //   celule.innerText += arrayMotMystere[index] + '_';
// // }

// //-------------crée container---------------
// let container = document.createElement("div");
// container.classList.add("container");
// main.appendChild(container);
// //-------------- crée l'afficheur mots-------
// let afficheMots = document.createElement("div");
// afficheMots.classList.add = "affiche-mots";
// container.appendChild(afficheMots);
// //--------------crée alpha buttons-------------
// for (let index = 0; index < alphabet.length; index++) {
//   let alphaBtn = document.createElement("button");
//   alphaBtn.innerText = alphabet[index];
//   alphaBtn.classList.add("alpha-btn");
//   alphaBtn.setAttribute('id', "mon_mots");
//   container.appendChild(alphaBtn);
// }
// //-------------crée mon function pour gérrer mes buttons   ---------
// let examiner = document.querySelectorAll(".alpha-btn");
// examiner.forEach((unBtn, indexBtn) => { /// unBtn =>>> container de mon evenment de chaque click de button
//   unBtn.addEventListener("click", (eventClick) => {
//     console.log("Index : ", indexBtn + " " + unBtn);
//     if (saisie.includes(unBtn.innerText)) {
//       console.log("Vous avez déjà trouvé cette lettre.");
//     } else {
//       saisie.push(unBtn.innerText);
//       if (motAleatoire.includes(unBtn.innerText)) {
//         console.log("il est examiner -c'est  OK");
//         unBtn.style.backgroundColor = "gray";
//         unBtn.setAttribute("disabled", "");
//         nombreRestant--;

//         // console.log("index :", indexTiret);
//         // console.log("unTiret :", unTiret);
//         if (nombreRestant == 0) {
//           console.log("lettres restantes = " + nombreRestant);
//           console.log("vous avez gagné !");
//         }
//         document.querySelectorAll(".mot-secret > div").forEach((unTiret, indexTiret) => {
//           for (let indexMotMystere = 0; indexMotMystere < motAleatoire.length; indexMotMystere++) {
//             if (motAleatoire[indexMotMystere] === unBtn.innerText && indexMotMystere == indexTiret) {
//               // console.log("arrayMotMystere[indexMotMystere] :", motAleatoire[indexMotMystere]);
//               // console.log("unBtn.innerText :", unBtn.innerText);

//               unTiret.innerText = motAleatoire[indexMotMystere];
//             }
//           }
//           console.log(unBtn.innerText);
//         })
//       } else {
//         console.log("c'est n'ai pas bon ");
//         indexImage++;
//         image.setAttribute("src", `./assests/img/pendu${indexImage}.png`)
//         nombreDevie--;
//         console.log("nombre de vies restantes =   " + nombreDevie);
//         if (nombreDevie === 0) {
//           console.log("vous avez perdu !");
//         }
//       }
//     }
//     console.log(saisie);
//   })
// })
