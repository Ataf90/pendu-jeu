//------------crée mon tableau de alpha lists-----------
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
];

//--------Crée mes paramètres ------------
const devineMots = ['dragon', 'flemme', 'bleu', 'coder', 'manger', 'jouer', 'dormir', 'monstre', 'console', 'boire', 'baleine', 'chat', 'dauphin',
  'huile', 'angle', 'armoire', 'banc', 'bureau', 'cabinet', 'carreau', 'chaise', 'classe', 'coin', 'couloir', 'dossier'];
let devine = [];
let devineStocke = "";
const arrayMotMystere = devineStocke.split('');
console.log(arrayMotMystere);
// let laVie;
// let compteVraiDevine;
let espace = "_";
let porteMots;
let nombreDevie = 7;
let nombreRestant = arrayMotMystere.length;
console.log(nombreRestant);
//------------------crée mon alératoire----------
let motAleatoire = devineMots[Math.floor(Math.random() * devineMots.length)]; /// crée mot aléatoire

console.log(motAleatoire);
/// ----------crée en cadren 'affichage------
let main = document.createElement("main");
document.body.appendChild(main);
//--------------crée mon imgae-------------
let imgpendu = document.createElement("image");
imgpendu.classList.add("img-pendu");
imgpendu.setAttribute("id", "img-pendu")
main.appendChild(imgpendu);
//-----------crée mon motSécret--------------
let motSecret = document.createElement("div");
motSecret.classList.add("mot-secret");
main.appendChild(motSecret);
//-----------crée une celule-----------------
for (let index = 0; index < motAleatoire.length; index++) {
  let celule = document.createElement("div");
  celule.classList.add("celule-devine");
  motSecret.appendChild(celule);
}

// for (let index = 0; index < arrayMotMystere.length; index++) {
//   celule.innerText += arrayMotMystere[index] + '_';
// }

//-------------crée container---------------
let container = document.createElement("div");
container.classList.add("container");
main.appendChild(container);
//-------------- crée l'afficheur mots-------
let afficheMots = document.createElement("div");
afficheMots.classList.add = "affiche-mots";
container.appendChild(afficheMots);
//--------------crée alpha buttons-------------
for (let index = 0; index < alphabet.length; index++) {
  let alphaBtn = document.createElement("button");
  alphaBtn.innerText = alphabet[index];
  alphaBtn.classList.add("alpha-btn");
  alphaBtn.setAttribute('id', "mon_mots");
  container.appendChild(alphaBtn);
}
//-------------crée mon function pour gérrer mes buttons   ---------
let examiner = document.querySelectorAll(".alpha-btn");
examiner.forEach((unBtn, indexBtn) => { /// unBtn =>>> container de mon evenment de chaque click de button
  unBtn.addEventListener("click", (eventClick) => {
    console.log("Index : ", indexBtn + " " + unBtn);
    if (devine.includes(unBtn.innerText)) {
      console.log("Vous avez déjà trouvé cette lettre.");
    } else {
      devine.push(unBtn.innerText);
      if (motAleatoire.includes(unBtn.innerText)) {
        console.log("il est examiner -c'est  OK");
        unBtn.style.backgroundColor = "gray";
        unBtn.setAttribute("disabled", "")
        nombreRestant--;
        // console.log("index :", indexTiret);
        // console.log("unTiret :", unTiret);
        if (nombreRestant === 0) {
          console.log("vous avez gagné");
        }
        document.querySelectorAll(".mot-secret > div").forEach((unTiret, indexTiret) => {
          for (let indexMotMystere = 0; indexMotMystere < motAleatoire.length; indexMotMystere++) {
            if (motAleatoire[indexMotMystere] === unBtn.innerText && indexMotMystere == indexTiret) {
              // console.log("arrayMotMystere[indexMotMystere] :", motAleatoire[indexMotMystere]);
              // console.log("unBtn.innerText :", unBtn.innerText);
              unTiret.innerText = "-" + motAleatoire[indexMotMystere] + "-";
              if (nombreRestant == 0) {
                let message = document.createElement("p");
                message.innerText = "vous avez gagné !";
              }
            }
          }
          console.log(unBtn.innerText);
        })
      } else {
        console.log("c'est n'ai pas bon ");
        nombreDevie--;
        console.log(nombreDevie);
        if (nombreDevie === 0) {
          console.log("vous avez perdu !");
        }
      }
    }
    console.log(devine);
  })
})



