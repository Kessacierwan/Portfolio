let contourmodals = document.querySelector(".contourmodals")

//PUISSANCE4// MODAL // 
let firstA = document.querySelector(".firstA")
let myModalp4 = document.querySelector(".myModalp4")

function openModalp4 (){
myModalp4.style.display="block"
contourmodals.style.display="block"
}

function closeModalp4(){
    myModalp4.style.display = "none"
    contourmodals.style.display="none"

}

let gamecontainerp4 = document.querySelector("#gamecontainerp4");
let table = []; // création du tableau 2D
let divreponse = document.querySelector("#divreponse")
let winner = null;
let gameOver = false


for (let row = 0; row < 7; row++) {
  table[row] = []; // initialisation de chaque ligne
  let rowElement = document.createElement("div");
  rowElement.className = "row";
  gamecontainerp4.appendChild(rowElement);
  for (let col = 0; col < 6; col++) {
    let caseElement = document.createElement("div");
    caseElement.className = "puissancequatrecase";
    rowElement.appendChild(caseElement);
    table[row][col] = null; // initialisation de chaque case
  }
}

let turn = "player1";
let puissancequatrecase = document.querySelectorAll(".puissancequatrecase");

let lap = 1;
puissancequatrecase.forEach((element, index) => {
  element.addEventListener("click", function () {
    let row = Math.floor(index / 6);
    let col = index % 6;
    if (lap % 2 === 0 && table[row][col] === null) {
      table[row][col] = "red";
    } else if (lap % 2 !== 0 && table[row][col] === null) {
      table[row][col] = "blue";
    }

    gravity();

    // Mettre à jour les éléments HTML
    for (let r = 0; r < 7; r++) {
      for (let c = 0; c < 6; c++) {
        let element = puissancequatrecase[r * 6 + c];
        if (table[r][c] === "red") {
          element.style.backgroundColor = "red";
        } else if (table[r][c] === "blue") {
          element.style.backgroundColor = "blue";
        } else {
          element.style.backgroundColor = "";
        }
      }
    }

    lap++;
    checkWin();
  });
});
function checkWin() {
  // vérification des lignes
  for (let row = 0; row < 7; row++) {
    for (let col = 0; col < 4; col++) {
      if (table[row][col] && table[row][col] === table[row][col + 1] && table[row][col] === table[row][col + 2] && table[row][col] === table[row][col + 3]) {
        winner = table[row][col];
        break;
      }
    }
  }
  // vérification des colonnes
  for (let col = 0; col < 6; col++) {
    for (let row = 0; row < 4; row++) {
      if (table[row][col] && table[row][col] === table[row + 1][col] && table[row][col] === table[row + 2][col] && table[row][col] === table[row + 3][col]) {
        winner = table[row][col];
        break;
      }
    }
  }
  // vérification des diagonales
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 3; col++) {
      if (table[row][col] && table[row][col] === table[row + 1][col + 1] && table[row][col] === table[row + 2][col + 2] && table[row][col] === table[row + 3][col + 3]) {
        winner = table[row][col];
        break;
      }
    }
  }
  for (let row = 3; row < 7; row++) {
    for (let col = 0; col < 3; col++) {
      if (table[row][col] && table[row][col] === table[row - 1][col + 1] && table[row][col] === table[row - 2][col + 2] && table[row][col] === table[row - 3][col + 3]) {
        winner = table[row][col];
        break;
      }
    }
  }
  if (winner !== null) {
    divreponse.innerHTML = `Le joueur ${winner === "red" ? "1" : "2"} a gagné !`;
            divreponse.style.color = "white"
        divreponse.style.fontSize = "20px"
gameOver = true
  }
}



function gravity() {
  for (let row = 0; row < 7; row++) {
    let col = table[row].length - 1; 
    while (col >= 0) {
      if (table[row][col]!== null) {
        let newCol = col;
        while (newCol < table[row].length - 1 && table[row][newCol + 1] === null) {
          table[row][newCol + 1] = table[row][newCol];
          table[row][newCol] = null;
          newCol++;
        }
      }
      col--;
    }
  }
}

//CLICK LE CLOWN // MODAL //
let mymodalclickleclown = document.querySelector(".mymodalclickleclown")
let fondpourclickleclown = document.querySelector(".fondpourclickleclown")
function openmodalclickleclown (){
    gamecontainerclown.style.display="block"
    fondpourclickleclown.style.display="block"

    }
    
    function closeModalclickleclown(){
        gamecontainerclown.style.display = "none"
        fondpourclickleclown.style.display = "none"

    }

    let count = 0

let intervalId = null;

function randomize(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;

}

let clown = document.querySelector('#clown');
let gamecontainerclown = document.querySelector("#gamecontainerclown")
let countdiv = document.querySelector("#countdiv")
let countp = document.querySelector("#countp")
let button1 = document.querySelector("#button1")
let button2 = document.querySelector("#button2")
let button3 = document.querySelector("#button3")
let second;

function moveclown() {
    let randomY = randomize(0, 100);
    let randomX = randomize(0, 100)

    clown.style.top = randomY + "%"
    clown.style.left = randomX + "%"

}
intervalId = setInterval(function () {
    moveclown();
    if(second==0){
        onclick = null
    }
}, 2000)

function clearTimeoutAll() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
}


function clicked() {                                                    //compteur de click on clown
    count++
    countp.innerHTML = "votre score : " + count
}

function playsound() {                                                  //jouer un son au click on clown
    const audio = document.querySelector("#myaudio")
    audio.play();   
}



function clickbutton1() {                                       
    clearTimeoutAll()
    intervalId = setInterval(function () {
        moveclown();
    }, 2000)
}


function clickbutton2() {
    clearTimeoutAll()
    intervalId = setInterval(function () {
        moveclown();

    }, 1000)
}

function clickbutton3() {
    clearTimeoutAll()
    intervalId = setInterval(function () {
        moveclown();

    }, 300)
}

button1.addEventListener("click", clickbutton1);
button2.addEventListener("click", clickbutton2);
button3.addEventListener("click", clickbutton3);



function startTimer() {
    const timerElement = document.querySelector("#timer");
    let second = 30; // define the initial timer value

    function updateTimer() {
      if (second >= 0) {                //il reste du temps
        timerElement.innerText = "il reste : " + second + " seconds"
        second--;
        setTimeout(updateTimer, 1000);
      } else {                      //le temps est écoulé
        timerElement.innerText = "temps écoulé";
        
        if (count == 0){
            timerElement.innerHTML = "tu pue la merde"
            
        } else if (count >0 && count < 15){
            timerElement.innerHTML = "t'es pas très bon faut le dire.."
        } else if (count > 15 && count < 30){
            timerElement.innerHTML ="ca clique ici"
        } else { 
            timerElement.innerHTML = "t'es le goat woula "
        }

   
        clearTimeoutAll(); // clear the interval when time is up
       

      }
    }
    updateTimer();
  }
  
  // Call the startTimer function when you want to start the timer
 timer.innerHTML = startTimer();





 //LE PENDU // MODAL //
let gamecontainerpendu = document.querySelector(".gamecontainerpendu")


function openmodaldupendu(){
    gamecontainerpendu.style.display = "block"
    fondpourclickleclown.style.display="block"

}

function closemodaldupendu(){
    gamecontainerpendu.style.display = "none"
    fondpourclickleclown.style.display="none"

}


function togreen(element) {
    element.style.backgroundColor = "green";
}

function tored(element) {
    element.style.backgroundColor = "red"
}
function randomize(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}
let monmot = ""
let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let mottab = [
    "BONJOUR", "PUANT", "NOOB", "COUCOU"
]
let noresp = []
let resp = []
let random = randomize(0, mottab.length - 1)
monmot = mottab[random]
let divcreationalphabet = document.querySelector("#divcreationalphabet")
let memory = ""
let mylettres = document.querySelectorAll(".classlettre")           //rendre les lettre cliquables
let motadeviner = document.querySelector("#motadeviner")
let hiddenWord = "_".repeat(monmot.length)
motadeviner.innerHTML = hiddenWord
resp.push(monmot[0])
let essainumber = 5
let roundmax = essainumber

let alreadyused = document.querySelector("#alreadyused")

for (let i = 0; i < alphabet.length; i++) {                         //creation de mes lettres 

    let lettrecliquable = document.createElement("button")
    lettrecliquable.innerHTML = alphabet[i]
    divcreationalphabet.appendChild(lettrecliquable)
    lettrecliquable.style.border = "2px solid black"
    lettrecliquable.style.padding = "2px"
    lettrecliquable.style.margin = "2px "
    lettrecliquable.className = "classlettre"
    lettrecliquable.style.padding = "5px"
    lettrecliquable.style.borderRadius = "20px"
    lettrecliquable.style.marginBottom = "10px"

    lettrecliquable.addEventListener("click", (event) => {
        if (resp.join("") === monmot) { // si le mot du joueur est égal au mot à trouver
            // Arrêter le jeu
            gameOver();
            return;
        }

        let str = ""
        let letterFinded = false
        memory = event.target.textContent;                          // get the text content of the clicked element and add it to memory
        essainumber--
        document.querySelector

        let essai = document.querySelector("#essainumber")
        essai.innerHTML = "nombre d'essai restant :" + essainumber
        if (essainumber == 0) {
            divvictoire.innerHTML = "vous avez perdu"
            divvictoire.style.color = "red"
            divvictoire.style.fontSize = "100px"
            gameOver()
        }

        for (let i = 0; i < monmot.length; i++) {

            if (monmot[i] === memory.toUpperCase()) {           //check si la lettre fait parti du mot

                str += memory.toUpperCase()            // si oui
                resp[i] = memory.toUpperCase();
                letterFinded = true

                if (resp.join("") === monmot) {                     // si le mot du joueur est égal au mot a trouver
                    let divvictoire = document.querySelector("#divvictoire")
                    divvictoire.innerHTML = "Bravo, vous avez gagné"
                    divvictoire.style.color = "red"
                    divvictoire.style.fontSize = "100px"
                }
            }
            else if (monmot[i] != memory.toUpperCase()) {                                      //si non 
                str += hiddenWord[i]

            }
        }
        hiddenWord = str
        motadeviner.innerHTML = hiddenWord
        if (letterFinded == true) {
            togreen(lettrecliquable);

        } else {
            noresp.push(memory.toUpperCase())
            tored(lettrecliquable)
            alreadyused.innerHTML = "lettres deja utilisées : " + noresp.join(" ");
            document.querySelector("#imagependu").src = `./assets/img/pendu${roundmax - essainumber}.png`
        }
    });
}

let asheFigmacontainer = document.querySelector(".asheFigmacontainer")
let mymodalFigma= document.querySelector(".mymodalFigma")
function closemodalFigma(){
    asheFigmacontainer.style.display="none"
    contourmodals.style.display = "none"
}

function openmodalFigma(){
    asheFigmacontainer.style.display="block"
    contourmodals.style.display = "block"
    mymodalFigma.style.zIndex="10"

}

let divpremierepage = document.querySelector(".divpremierepage")
let divdeuxiemepage = document.querySelector(".divdeuxiemepage")
let divtroisiemepage = document.querySelector(".divtroisiemepage")

function clickflechegauche(){
  divpremierepage.style.display = "none"      /* cache la page 1 */
  divdeuxiemepage.style.display="block"
  divdeuxiemepage.classList.add('animate-in')       /* affiche page 2 */

}

function clickflechedroite(){
    divpremierepage.style.display = "none"
  divtroisiemepage.style.display="block"
  divtroisiemepage.classList.add('animate-in')       /* affiche page 2 */

  
}

function clickonflechegauche2(){
    divpremierepage.style.display = "block"
  divtroisiemepage.style.display="none"
  divpremierepage.classList.add('animate-in')      


}

function clickonflechedroite2(){
  divpremierepage.style.display = "block"
divdeuxiemepage.style.display="none"
divpremierepage.classList.add('animate-in')      

}





