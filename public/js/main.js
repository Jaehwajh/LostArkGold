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

function handleGoldClick(gold, selector, clickCounter, maxClicks, gateClass, totalGoldId, raidId) {
    return function(element) {
        if (clickCounter < maxClicks) {
            const goldValue = parseInt(element.dataset.value);

            const chestId = element.dataset.target;
            const bonusChest = document.getElementById(chestId);
            bonusChest.classList.toggle("show");    

            // Total Raid Gold
            selector.push(goldValue);

            const total = selector.reduce((a, b) => a + b);

            // Raid Gold Output
            const totalGold = document.getElementById(totalGoldId);
            totalGold.innerHTML = total + "g";

            // Total Roster Gold
            gold.push(goldValue);
            const charTotalGold = gold.reduce((a, b) => a + b);
            const rosterTotalGold = document.getElementById("rosterGold");
            rosterTotalGold.innerHTML = " " + charTotalGold + "g";

            element.style.pointerEvents = 'none';

            clickCounter++;

            if (clickCounter === maxClicks) {
                // Disable all clickable elements
                const clickableElements = document.querySelectorAll(`.${gateClass}`);
                clickableElements.forEach(element => {
                    element.style.pointerEvents = 'none';
                });
            };
            
            if(clickCounter >= 1){
                const selectedRaid = document.getElementById(`${raidId}`);
                selectedRaid.style.border = "thin solid white" ;
            };
        }
    };
}

let charGold = [];

let valtanGoldSelector = [];
let valClick = 0;
const getValtanGold = handleGoldClick(charGold, valtanGoldSelector, valClick, 2, 'valGate', 'valtan-gold', 'valtan');

let vykasGoldSelector = [];
let vyClick = 0;
const getVykasGold = handleGoldClick(charGold, vykasGoldSelector, vyClick, 2, 'vyGate', 'vykas-gold', 'vykas');

let clownGoldSelector = [];
let clownClick = 0;
const getClownGold = handleGoldClick(charGold, clownGoldSelector, clownClick, 3, 'clownGate', 'clown-gold', 'kakulSaydon');

let brelGoldSelector = [];
let brelClick = 0;
const getBrelGold = handleGoldClick(charGold, brelGoldSelector, brelClick, 4, 'brelGate', 'brel-gold', 'brelshaza');

let kayangelGoldSelector = [];
let kayaClick = 0;
const getKayangelGold = handleGoldClick(charGold, kayangelGoldSelector, kayaClick, 3, 'kayaGate', 'kaya-gold', 'kayangel');

let akkanGoldSelector = [];
let akkanClick = 0;
const getAkkanGold = handleGoldClick(charGold, akkanGoldSelector, akkanClick, 4, 'akkanGate', 'akkan-gold', 'akkan');


function handleCheckboxClick(gold, checkboxId, totalGoldId) {
    return function(element) {
        const checkbox = document.getElementById(checkboxId);
        const goldValue = parseInt(checkbox.dataset.value);
        const valueToAdd = checkbox.checked ? -goldValue : goldValue;

        gold.push(valueToAdd);

        const total = gold.reduce((a, b) => a + b);

        // Update Raid Gold Output
        const totalGold = document.getElementById(totalGoldId);
        totalGold.innerHTML = total + "g";

        // Update Roster Total Gold
        const charTotalGold = gold.reduce((a, b) => a + b);
        const rosterTotalGold = document.getElementById("rosterGold");
        rosterTotalGold.innerHTML = " " + charTotalGold + "g";
    };
}

// Valtan
const handleValtanHardCheckbox = handleCheckboxClick(charGold, 'valhmg1Chest', 'valtan-gold');
const handleValtanHardCheckbox2 = handleCheckboxClick(charGold, 'valhmg2Chest', 'valtan-gold');
const handleValtanNormalCheckbox = handleCheckboxClick(charGold, 'valnmg1Chest', 'valtan-gold');
const handleValtanNormalCheckbox2 = handleCheckboxClick(charGold, 'valnmg2Chest', 'valtan-gold');

document.getElementById('valhmg1Chest').addEventListener('change', handleValtanHardCheckbox);
document.getElementById('valhmg2Chest').addEventListener('change', handleValtanHardCheckbox2);
document.getElementById('valnmg1Chest').addEventListener('change', handleValtanNormalCheckbox);
document.getElementById('valnmg2Chest').addEventListener('change', handleValtanNormalCheckbox2);

// Vykas
const handleVykasHardCheckbox = handleCheckboxClick(charGold, 'vyhmg1Chest', 'vykas-gold');
const handleVykasHardCheckbox2 = handleCheckboxClick(charGold, 'vyhmg2Chest', 'vykas-gold');
const handleVykasNormalCheckbox = handleCheckboxClick(charGold, 'vynmg1Chest', 'vykas-gold');
const handleVykasNormalCheckbox2 = handleCheckboxClick(charGold, 'vynmg2Chest', 'vykas-gold');

document.getElementById('vyhmg1Chest').addEventListener('change', handleVykasHardCheckbox);
document.getElementById('vyhmg2Chest').addEventListener('change', handleVykasHardCheckbox2);
document.getElementById('vynmg1Chest').addEventListener('change', handleVykasNormalCheckbox);
document.getElementById('vynmg2Chest').addEventListener('change', handleVykasNormalCheckbox2);

// Clown
const handleClownNormalCheckbox = handleCheckboxClick(charGold, 'ksnmg1Chest', 'clown-gold');
const handleClownNormalCheckbox2 = handleCheckboxClick(charGold, 'ksnmg2Chest', 'clown-gold');
const handleClownNormalCheckbox3 = handleCheckboxClick(charGold, 'ksnmg3Chest', 'clown-gold');

document.getElementById('ksnmg1Chest').addEventListener('change', handleClownNormalCheckbox);
document.getElementById('ksnmg2Chest').addEventListener('change', handleClownNormalCheckbox2);
document.getElementById('ksnmg3Chest').addEventListener('change', handleClownNormalCheckbox3);

// Brelshaza
const handleBrelHardCheckBox = handleCheckboxClick(charGold, 'brelhmg1Chest', 'brel-gold');
const handleBrelHardCheckBox2 = handleCheckboxClick(charGold, 'brelhmg2Chest', 'brel-gold');
const handleBrelHardCheckBox3 = handleCheckboxClick(charGold, 'brelhmg3Chest', 'brel-gold');
const handleBrelHardCheckBox4 = handleCheckboxClick(charGold, 'brelhmg4Chest', 'brel-gold');
const handleBrelNormalCheckBox = handleCheckboxClick(charGold, 'brelnmg1Chest', 'brel-gold');
const handleBrelNormalCheckBox2 = handleCheckboxClick(charGold, 'brelnmg2Chest', 'brel-gold');
const handleBrelNormalCheckBox3 = handleCheckboxClick(charGold, 'brelnmg3Chest', 'brel-gold');
const handleBrelNormalCheckBox4 = handleCheckboxClick(charGold, 'brelnmg4Chest', 'brel-gold');

document.getElementById('brelhmg1Chest').addEventListener('change', handleBrelHardCheckBox);
document.getElementById('brelhmg2Chest').addEventListener('change', handleBrelHardCheckBox2);
document.getElementById('brelhmg3Chest').addEventListener('change', handleBrelHardCheckBox3);
document.getElementById('brelhmg4Chest').addEventListener('change', handleBrelHardCheckBox4);
document.getElementById('brelnmg1Chest').addEventListener('change', handleBrelNormalCheckBox);
document.getElementById('brelnmg2Chest').addEventListener('change', handleBrelNormalCheckBox2);
document.getElementById('brelnmg3Chest').addEventListener('change', handleBrelNormalCheckBox3);
document.getElementById('brelnmg4Chest').addEventListener('change', handleBrelNormalCheckBox4);

// Kayangel
const handleKayangel
const handleKayangel
const handleKayangel
const handleKayangel
const handleKayangel
const handleKayangel

document.getElementById()
document.getElementById()
document.getElementById()
document.getElementById()
document.getElementById()
document.getElementById()

// Akkan

const handleAkkan
const handleAkkan
const handleAkkan
const handleAkkan
const handleAkkan
const handleAkkan

document.getElementById()
document.getElementById()
document.getElementById()
document.getElementById()
document.getElementById()
document.getElementById()