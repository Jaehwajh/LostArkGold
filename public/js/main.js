// Onclick

// More Info

  document.addEventListener('DOMContentLoaded', () => {
    const moreButtons = document.querySelectorAll('.more');
  
    moreButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const raidInfo = event.target.nextElementSibling;
        
        document.querySelectorAll('.raid-info').forEach((info) => {
            if (info !== raidInfo && info.classList.contains('show')) {
              info.classList.remove('show');
            }
          });

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

// Raid Gold

function handleGoldClick(selector, clickCounter, maxClicks, gateClass, totalGoldId) {
    return function(element) {
        if (clickCounter < maxClicks) {
            const goldValue = parseInt(element.dataset.value);

            const chestId = element.dataset.target;
            const bonusChest = document.getElementById(chestId);
            bonusChest.classList.toggle("show");

            selector.push(goldValue);

            const total = selector.reduce((a, b) => a + b);
            const totalGold = document.getElementById(totalGoldId);
            totalGold.innerHTML = total + "g";

            element.style.pointerEvents = 'none';

            clickCounter++;

            if (clickCounter === maxClicks) {
                // Disable all clickable elements
                const clickableElements = document.querySelectorAll(`.${gateClass}`);
                clickableElements.forEach(element => {
                    element.style.pointerEvents = 'none';
                });
            };
        }
    };
}

let valtanGoldSelector = [];
let valClick = 0;
const getValtanGold = handleGoldClick(valtanGoldSelector, valClick, 2, 'valGate', 'valtan-gold');

let vykasGoldSelector = [];
let vyClick = 0;
const getVykasGold = handleGoldClick(vykasGoldSelector, vyClick, 2, 'vyGate', 'vykas-gold');

let clownGoldSelector = [];
let clownClick = 0;
const getClownGold = handleGoldClick(clownGoldSelector, clownClick, 3, 'clownGate', 'clown-gold');

let brelGoldSelector = [];
let brelClick = 0;
const getBrelGold = handleGoldClick(brelGoldSelector, brelClick, 4, 'brelGate', 'brel-gold');

let kayangelGoldSelector = [];
let kayaClick = 0;
const getKayangelGold = handleGoldClick(kayangelGoldSelector, kayaClick, 3, 'kayaGate', 'kaya-gold');

let akkanGoldSelector = [];
let akkanClick = 0;
const getAkkanGold = handleGoldClick(akkanGoldSelector, akkanClick, 4, 'akkanGate', 'akkan-gold');

let charGold = [];