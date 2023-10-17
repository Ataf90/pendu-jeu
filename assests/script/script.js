//------------crée mon tableau de alpha lists-----------
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
];

//--------Crée mes paramètres ------------
const devineMots = ['dragon', 'flemme', 'bleu', 'coder', 'manger', 'jouer', 'dormir', 'monstre', 'console', 'boire', 'baleine', 'chat', 'dauphin',
  'huile', 'angle', 'armoire', 'banc', 'bureau', 'cabinet', 'carreau', 'chaise', 'classe', 'coin', 'couloir', 'dossier'];
let mot;
let devine = [];
let devineStocke = "chaise";
const arrayMotMystere = devineStocke.split('');
console.log(arrayMotMystere);
let laVie;
let compteVraiDevine;
let espace = "_";
let porteMots;
//------------------crée mon alératoire----------
// function porterMonAleratoire() {
//   motAleratoire = motAleratoire.upperCase();
//   return motAleratoire = Math.floor(Math.random() * devineMots.length);
// }
// let propreAleratoire = porterMonAleratoire();

// console.log(motAleratoire);
/// ----------crée en cadren 'affichage------
let main = document.createElement("main");
document.body.appendChild(main);
//--------------crée mon imgae-------------
let imgpendu = document.createElement("image");
imgpendu.classList.add("img-pendu");
main.appendChild(imgpendu);
//-----------crée mon motSécret--------------
let motSecret = document.createElement("div");
motSecret.classList.add("mot-secret");
main.appendChild(motSecret);
//-----------crée celule-----------------
let celule = document.createElement("div");
celule.classList.add("celule-devine");
celule.innerText = "_";
motSecret.appendChild(celule);
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
examiner.forEach((unBtn, index) => {
  unBtn.addEventListener("click", (eventClick) => {
    console.log("Index : ", index + " " + unBtn);
    if (devine.includes(unBtn.innerText)) {
      console.log("Vous avez déjà trouvé cette lettre.");
    } else {
      devine.push(unBtn.innerText);
      if (arrayMotMystere.includes(unBtn.innerText)) {
        console.log("il est examiner -c'est  OK");
        console.log(unBtn.innerText);
      } else {
        console.log("c'est n'ai pas convient de mon tableau list ");
      }
    }
    console.log(devine);
  })
})



