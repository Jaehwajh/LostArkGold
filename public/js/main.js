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

function handleCheckboxClick(gold ,selector, checkboxId, totalGoldId) {
    return function(element) {
        const checkbox = document.getElementById(checkboxId);
        const goldValue = parseInt(checkbox.dataset.value);

        if (checkbox.checked) {
            selector.push(-goldValue) // Subtract gold value
            gold.push(-goldValue)
        } else {
            selector.push(goldValue) // Add gold value back
            gold.push(goldValue)
        }

        const total = selector.reduce((a, b) => a + b);

        // Update Raid Gold Output
        const totalGold = document.getElementById(totalGoldId);
        totalGold.innerHTML = total + "g";

        // Update Roster Total Gold
        const charTotalGold = gold.reduce((a, b) => a + b);
        const rosterTotalGold = document.getElementById("rosterGold");
        rosterTotalGold.innerHTML = " " + charTotalGold + "g";
    };
}

let charGold = [];

let valtanGoldSelector = [];
let valClick = 0;
const getValtanGold = handleGoldClick(charGold, valtanGoldSelector, valClick, 2, 'valGate', 'valtan-gold', 'valtan');
const handleValtanNormalCheckbox = handleCheckboxClick(charGold, valtanGoldSelector, 'valnmg1Chest', 'valtan-gold');
const handleValtanNormalCheckbox2 = handleCheckboxClick(charGold, valtanGoldSelector, 'valnmg2Chest', 'valtan-gold');
const handleValtanHardCheckbox = handleCheckboxClick(charGold, valtanGoldSelector, 'valhmg1Chest', 'valtan-gold');
const handleValtanHardCheckbox2 = handleCheckboxClick(charGold, valtanGoldSelector, 'valhmg2Chest', 'valtan-gold');

document.getElementById('valnmg1Chest').addEventListener('change', handleValtanNormalCheckbox);
document.getElementById('valnmg2Chest').addEventListener('change', handleValtanNormalCheckbox2);
document.getElementById('valhmg1Chest').addEventListener('change', handleValtanHardCheckbox);
document.getElementById('valhmg2Chest').addEventListener('change', handleValtanHardCheckbox2);

let vykasGoldSelector = [];
let vyClick = 0;
const getVykasGold = handleGoldClick(charGold, vykasGoldSelector, vyClick, 2, 'vyGate', 'vykas-gold', 'vykas');
const handleVykasNormalCheckbox = handleCheckboxClick(charGold, vykasGoldSelector, 'vynmg1Chest', 'vykas-gold');
const handleVykasNormalCheckbox2 = handleCheckboxClick(charGold, vykasGoldSelector, 'vynmg2Chest', 'vykas-gold');
const handleVykasHardCheckbox = handleCheckboxClick(charGold, vykasGoldSelector, 'vyhmg1Chest', 'vykas-gold');
const handleVykasHardCheckbox2 = handleCheckboxClick(charGold, vykasGoldSelector, 'vyhmg2Chest', 'vykas-gold');

document.getElementById('vynmg1Chest').addEventListener('change', handleVykasNormalCheckbox);
document.getElementById('vynmg2Chest').addEventListener('change', handleVykasNormalCheckbox2);
document.getElementById('vyhmg1Chest').addEventListener('change', handleVykasHardCheckbox);
document.getElementById('vyhmg2Chest').addEventListener('change', handleVykasHardCheckbox2);

let clownGoldSelector = [];
let clownClick = 0;
const getClownGold = handleGoldClick(charGold, clownGoldSelector, clownClick, 3, 'clownGate', 'clown-gold', 'kakulSaydon');
const handleClownNormalCheckbox = handleCheckboxClick(charGold, clownGoldSelector, 'ksnmg1Chest', 'clown-gold');
const handleClownNormalCheckbox2 = handleCheckboxClick(charGold, clownGoldSelector, 'ksnmg2Chest', 'clown-gold');
const handleClownNormalCheckbox3 = handleCheckboxClick(charGold, clownGoldSelector, 'ksnmg3Chest', 'clown-gold');

document.getElementById('ksnmg1Chest').addEventListener('change', handleClownNormalCheckbox);
document.getElementById('ksnmg2Chest').addEventListener('change', handleClownNormalCheckbox2);
document.getElementById('ksnmg3Chest').addEventListener('change', handleClownNormalCheckbox3);

let brelGoldSelector = [];
let brelClick = 0;
const getBrelGold = handleGoldClick(charGold, brelGoldSelector, brelClick, 4, 'brelGate', 'brel-gold', 'brelshaza');
const handleBrelNormalCheckBox = handleCheckboxClick(charGold, brelGoldSelector, 'brelnmg1Chest', 'brel-gold');
const handleBrelNormalCheckBox2 = handleCheckboxClick(charGold, brelGoldSelector, 'brelnmg2Chest', 'brel-gold');
const handleBrelNormalCheckBox3 = handleCheckboxClick(charGold, brelGoldSelector, 'brelnmg3Chest', 'brel-gold');
const handleBrelNormalCheckBox4 = handleCheckboxClick(charGold, brelGoldSelector, 'brelnmg4Chest', 'brel-gold');
const handleBrelHardCheckBox = handleCheckboxClick(charGold, brelGoldSelector, 'brelhmg1Chest', 'brel-gold');
const handleBrelHardCheckBox2 = handleCheckboxClick(charGold, brelGoldSelector, 'brelhmg2Chest', 'brel-gold');
const handleBrelHardCheckBox3 = handleCheckboxClick(charGold, brelGoldSelector, 'brelhmg3Chest', 'brel-gold');
const handleBrelHardCheckBox4 = handleCheckboxClick(charGold, brelGoldSelector, 'brelhmg4Chest', 'brel-gold');

document.getElementById('brelnmg1Chest').addEventListener('change', handleBrelNormalCheckBox);
document.getElementById('brelnmg2Chest').addEventListener('change', handleBrelNormalCheckBox2);
document.getElementById('brelnmg3Chest').addEventListener('change', handleBrelNormalCheckBox3);
document.getElementById('brelnmg4Chest').addEventListener('change', handleBrelNormalCheckBox4);
document.getElementById('brelhmg1Chest').addEventListener('change', handleBrelHardCheckBox);
document.getElementById('brelhmg2Chest').addEventListener('change', handleBrelHardCheckBox2);
document.getElementById('brelhmg3Chest').addEventListener('change', handleBrelHardCheckBox3);
document.getElementById('brelhmg4Chest').addEventListener('change', handleBrelHardCheckBox4);

let kayangelGoldSelector = [];
let kayaClick = 0;
const getKayangelGold = handleGoldClick(charGold, kayangelGoldSelector, kayaClick, 3, 'kayaGate', 'kaya-gold', 'kayangel');
const handleKayangelNormalCheckbox = handleCheckboxClick(charGold, kayangelGoldSelector, 'kayanmg1Chest', 'kaya-gold');
const handleKayangelNormalCheckbox2 = handleCheckboxClick(charGold, kayangelGoldSelector, 'kayanmg2Chest', 'kaya-gold');
const handleKayangelNormalCheckbox3 = handleCheckboxClick(charGold, kayangelGoldSelector, 'kayanmg3Chest', 'kaya-gold');
const handleKayangelHardCheckbox = handleCheckboxClick(charGold, kayangelGoldSelector, 'kayahmg1Chest', 'kaya-gold');
const handleKayangelHardCheckbox2 = handleCheckboxClick(charGold, kayangelGoldSelector, 'kayahmg2Chest', 'kaya-gold');
const handleKayangelHardCheckbox3 = handleCheckboxClick(charGold, kayangelGoldSelector, 'kayahmg3Chest', 'kaya-gold');

document.getElementById('kayanmg1Chest').addEventListener('change', handleKayangelNormalCheckbox);
document.getElementById('kayanmg2Chest').addEventListener('change', handleKayangelNormalCheckbox2);
document.getElementById('kayanmg3Chest').addEventListener('change', handleKayangelNormalCheckbox3);
document.getElementById('kayahmg1Chest').addEventListener('change', handleKayangelHardCheckbox);
document.getElementById('kayahmg2Chest').addEventListener('change', handleKayangelHardCheckbox2);
document.getElementById('kayahmg3Chest').addEventListener('change', handleKayangelHardCheckbox3);

let akkanGoldSelector = [];
let akkanClick = 0;
const getAkkanGold = handleGoldClick(charGold, akkanGoldSelector, akkanClick, 4, 'akkanGate', 'akkan-gold', 'akkan');

const handleAkkanNormalCheckbox = handleCheckboxClick(charGold, akkanGoldSelector, 'aknmg1Chest', 'akkan-gold');
const handleAkkanNormalCheckbox2 = handleCheckboxClick(charGold, akkanGoldSelector, 'aknmg2Chest', 'akkan-gold');
const handleAkkanNormalCheckbox3 = handleCheckboxClick(charGold, akkanGoldSelector, 'aknmg3Chest', 'akkan-gold');
const handleAkkanHardCheckbox = handleCheckboxClick(charGold, akkanGoldSelector, 'akhmg1Chest', 'akkan-gold');
const handleAkkanHardCheckbox2 = handleCheckboxClick(charGold, akkanGoldSelector, 'akhmg2Chest', 'akkan-gold');
const handleAkkanHardCheckbox3 = handleCheckboxClick(charGold, akkanGoldSelector, 'akhmg3Chest', 'akkan-gold');

document.getElementById('aknmg1Chest').addEventListener('change', handleAkkanNormalCheckbox);
document.getElementById('aknmg2Chest').addEventListener('change', handleAkkanNormalCheckbox2);
document.getElementById('aknmg3Chest').addEventListener('change', handleAkkanNormalCheckbox3);
document.getElementById('akhmg1Chest').addEventListener('change', handleAkkanHardCheckbox);
document.getElementById('akhmg2Chest').addEventListener('change', handleAkkanHardCheckbox2);
document.getElementById('akhmg3Chest').addEventListener('change', handleAkkanHardCheckbox3);


const valtanGold = {};
const vykasGold = {};
// const goldArr = {};
let totalRosterGold = 0

function logCharacterId(element, characterId, idPrefix) {
    const goldValue = parseInt(element.dataset.value);

    console.log(`Clicked on Character ID: ${characterId}, Gold Value: ${goldValue}`);

    element.disabled = true;
    // if (!goldArr[characterId]) {
    //     goldArr[characterId] = [];
    // }

    if (idPrefix === 'valtan-gold-') {
        if (!valtanGold[characterId]) {
            valtanGold[characterId] = [];
        }
        valtanGold[characterId].push(parseInt(goldValue));
        console.log(`Character ${characterId} Gold Values:`, valtanGold[characterId]);
    } else if (idPrefix === 'vykas-gold-') {
        if (!vykasGold[characterId]) {
            vykasGold[characterId] = [];
        }
        vykasGold[characterId].push(parseInt(goldValue));
        console.log(`Character ${characterId} Gold Values:`, vykasGold[characterId]);
    }
    
    // Push the gold value into the character's array
    // goldArr[characterId].push(goldValue);
    // console.log(`Character ${characterId} Gold Values:`, goldArr[characterId]);

    // const totalGold = goldArr[characterId].reduce((a,b) => a+b, 0);



    // const characterElement = document.getElementById(`${idPrefix}${characterId}`);
    // if (characterElement) {
    //     characterElement.innerHTML = `Total Gold: ${totalGold}g`;
    // }

    const characterElement = document.getElementById(`${idPrefix}${characterId}`);
    if (characterElement) {
        let totalGold;
        switch (idPrefix) {
            case 'valtan-gold-':
                totalGold = valtanGold[characterId].reduce((a, b) => a + b, 0);
                break;
            case 'vykas-gold-':
                totalGold = vykasGold[characterId].reduce((a, b) => a + b, 0);
                break;
            default:
                // Handle other cases if needed
        }
        characterElement.innerHTML = `Total Gold: ${totalGold}g`;
    }

    totalRosterGold += parseInt(goldValue);
    
    // Update the HTML element displaying total earnings
    const totalEarningsElement = document.getElementById("rosterGold");
    if (totalEarningsElement) {
        totalEarningsElement.innerHTML = `${totalRosterGold}g`;
    }

    const bonusChest = element.nextElementSibling;
    if (bonusChest) {
        bonusChest.classList.toggle('show');
    }

    // const gateContainer = element.parentElement.parentElement.parentElement.parentElement.parentElement;
    // if (goldArr[characterId].length > 0) {
    //     gateContainer.classList.add('highlighted');
    // }
    const gateContainer = element.parentElement.parentElement.parentElement.parentElement.parentElement;

    const goldArrForCharacter = idPrefix === 'valtan-gold-'
        ? valtanGold[characterId]
        : vykasGold[characterId];
    
    if (goldArrForCharacter.length > 0) {
        gateContainer.classList.add('highlighted');
    } else {
        gateContainer.classList.remove('highlighted'); // Remove class if there are no gold values
    }
}



function subtractValueFromCharacterGold(element, characterId, idPrefix) {
    const goldValue = element.dataset.value;
    console.log(`Subtracting value ${goldValue} from Character ID: ${characterId}`);
    
    element.disabled = true;
    // // Check if the character ID already has an array, if not, create one
    // if (!goldArr[characterId]) {
    //     goldArr[characterId] = [];
    // }

    // // Subtract the gold value from the character's array
    // goldArr[characterId].push(-parseInt(goldValue)); // Note the negative sign
    // console.log(`Character ${characterId} Gold Values (after subtraction):`, goldArr[characterId]);
    
    // // Calculate total gold value for the character
    // const totalGold = goldArr[characterId].reduce((a, b) => a + b, 0);

    switch (idPrefix) {
        case 'valtan-gold-':
            if (valtanGold[characterId]) {
                valtanGold[characterId].push(-goldValue); // Negative value to represent subtraction
            }
            break;
        case 'vykas-gold-':
            if (vykasGold[characterId]) {
                vykasGold[characterId].push(-goldValue); // Negative value to represent subtraction
            }
            break;
        default:
            // Handle other cases if needed
    }
    
    // Update the HTML element with the total gold value
    // const characterElement = document.getElementById(`${idPrefix}${characterId}`);
    // if (characterElement) {
    //     characterElement.innerHTML = `Total Gold: ${totalGold}g`;
    // }

    //  Update HTML element with gold values for the specific character
     const characterElement = document.getElementById(`${idPrefix}${characterId}`);
     if (characterElement) {
         let totalGold;
         switch (idPrefix) {
             case 'valtan-gold-':
                 totalGold = valtanGold[characterId].reduce((a, b) => a + b, 0);
                 break;
             case 'vykas-gold-':
                 totalGold = vykasGold[characterId].reduce((a, b) => a + b, 0);
                 break;
             default:
                 // Handle other cases if needed
         }
         characterElement.innerHTML = `Total Gold: ${totalGold}g`;
     }
    
    // Update total earnings
    totalRosterGold -= parseInt(goldValue); // Subtract from total earnings
    const totalEarningsElement = document.getElementById("rosterGold");
    if (totalEarningsElement) {
        totalEarningsElement.innerHTML = `${totalRosterGold}g`;
    }
}