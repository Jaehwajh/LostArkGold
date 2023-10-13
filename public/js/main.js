// Onclick

// More Info

  document.addEventListener('DOMContentLoaded', () => {
    const moreButtons = document.querySelectorAll('.more');
  
    moreButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const raidInfo = event.target.nextElementSibling;
        raidInfo.classList.toggle('show');
      });
    });
  });   

// Modal

function modalHandler(id, val) {
    let modal = document.getElementById(`modal-${id}`);
    if (val) {
        fadeIn(modal);
    } else {
        fadeOut(modal);
    }
}

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= 0.1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
}

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "flex";
    (function fade() {
        let val = parseFloat(el.style.opacity);
        if (!((val += 0.2) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
}


// Valtan Gold
let valtanGoldSelector = []; 
let valClick = 0

function getValtanGold(element){
    if(valClick < 2){
        const goldValue = parseInt(element.dataset.value);

        const chestId = element.dataset.target;
        const bonusChest = document.getElementById(chestId);
        bonusChest.classList.toggle("show");
    
        valtanGoldSelector.push(goldValue);
    
        const valtanTotal = valtanGoldSelector.reduce((a,b) => a+b);
        const valtanGold = document.getElementById("valtan-gold");
        valtanGold.innerHTML = valtanTotal + "g";

        element.style.pointerEvents = 'none';

        valClick++;

        if (valClick === 2) {
            // Disable all clickable elements
            const clickableElements = document.querySelectorAll('.valGate');
            clickableElements.forEach(element => {
                element.style.pointerEvents = 'none';
            });
        };
    };  
};

// Vykas Gold

let vykasGoldSelector = [];
let vyClick = 0;

function getVykasGold(element){
    if(vyClick < 2){
        const goldValue = parseInt(element.dataset.value);

        const chestId = element.dataset.target;
        const bonusChest = document.getElementById(chestId);
        bonusChest.classList.toggle("show")

        vykasGoldSelector.push(goldValue);
        console.log(vykasGoldSelector);

        const vykasTotal = vykasGoldSelector.reduce((a,b) => a+b);
        const vykasGold = document.getElementById("vykas-gold");
        vykasGold.innerHTML = vykasTotal + "g";

        element.style.pointerEvents = 'none';

        vyClick++;

        if (vyClick === 2) {
            // Disable all clickable elements
            const clickableElements = document.querySelectorAll('.vyGate');
            clickableElements.forEach(element => {
                element.style.pointerEvents = 'none';
            });
        };
    };
};

// Kakul-Saydon Gold

let clownGoldSelector = [];
let clownClick = 0;

function getClownGold(element){
    if(clownClick < 3){

    }
}

// Brelshaza Gold
let brelGoldSelector = [];
let brelClick = 0;

function getBrelGold(element){
    if(brelClick < 4){

    }
}


// Kayangel Gold
let kayangelGoldSelector = [];
let kayaClick = 0;

function getKayangelGold(element){
    if(kayaClick < 3){

    }
}

// Akkan Gold
let akkanGoldSelector = [];
let akkanClick = 0;

function getAkkanGold(element){
    if(akkanClick < 3){
        
    }
}