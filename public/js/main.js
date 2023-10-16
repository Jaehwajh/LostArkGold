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
        const goldValue = parseInt(element.dataset.value);

        const chestId = element.dataset.target;
        const bonusChest = document.getElementById(chestId);
        bonusChest.classList.toggle("show")

        clownGoldSelector.push(goldValue);
        console.log(clownGoldSelector);

        const clownTotal = clownGoldSelector.reduce((a,b) => a+b);
        const clownGold = document.getElementById("clown-gold");
        clownGold.innerHTML = clownTotal + "g";

        element.style.pointerEvents = 'none';

        clownClick++;

        if (clownClick === 3) {
            // Disable all clickable elements
            const clickableElements = document.querySelectorAll('.clownGate');
            clickableElements.forEach(element => {
                element.style.pointerEvents = 'none';
            });
        };
    }
}

// Brelshaza Gold
let brelGoldSelector = [];
let brelClick = 0;

function getBrelGold(element){
    if(brelClick < 4){
        const goldValue = parseInt(element.dataset.value);

        const chestId = element.dataset.target;
        const bonusChest = document.getElementById(chestId);
        bonusChest.classList.toggle("show")

        brelGoldSelector.push(goldValue);
        console.log(brelGoldSelector);

        const brelTotal = brelGoldSelector.reduce((a,b) => a+b);
        const brelGold = document.getElementById("brel-gold");
        brelGold.innerHTML = brelTotal + "g";

        element.style.pointerEvents = 'none';

        brelClick++;

        if (brelClick === 4) {
            // Disable all clickable elements
            const clickableElements = document.querySelectorAll('.brelGate');
            clickableElements.forEach(element => {
                element.style.pointerEvents = 'none';
            });
        };
    }
}


// Kayangel Gold
let kayangelGoldSelector = [];
let kayaClick = 0;

function getKayangelGold(element){
    if(kayaClick < 3){
        const goldValue = parseInt(element.dataset.value);

        const chestId = element.dataset.target;
        const bonusChest = document.getElementById(chestId);
        bonusChest.classList.toggle("show")

        kayangelGoldSelector.push(goldValue);
        console.log(kayangelGoldSelector);

        const kayaTotal = kayangelGoldSelector.reduce((a,b) => a+b);
        const kayaGold = document.getElementById("kaya-gold");
        kayaGold.innerHTML = kayaTotal + "g";

        element.style.pointerEvents = 'none';

        kayaClick++;

        if (vyClick === 3) {
            // Disable all clickable elements
            const clickableElements = document.querySelectorAll('.kayaGate');
            clickableElements.forEach(element => {
                element.style.pointerEvents = 'none';
            });
        };
    }
}

// Akkan Gold
let akkanGoldSelector = [];
let akkanClick = 0;
function getAkkanGold(element){
    if(akkanClick < 3){
        const goldValue = parseInt(element.dataset.value);

        const chestId = element.dataset.target;
        const bonusChest = document.getElementById(chestId);
        bonusChest.classList.toggle("show")

        akkanGoldSelector.push(goldValue);
        console.log(akkanGoldSelector);

        const akkanTotal = akkanGoldSelector.reduce((a,b) => a+b);
        const akkanGold = document.getElementById("akkan-gold");
        akkanGold.innerHTML = akkanTotal + "g";

        element.style.pointerEvents = 'none';

        akkanClick++;

        if (akkanClick === 4) {
            // Disable all clickable elements
            const clickableElements = document.querySelectorAll('.akkanGate');
            clickableElements.forEach(element => {
                element.style.pointerEvents = 'none';
            });
        };
    }
}