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

const valtanGold = {};
const vykasGold = {};
const kakulSaydonGold = {};
const brelGold = {};
const kayangelGold = {};
const akkanGold = {};
let totalRosterGold = 0
const goldImg = new Image(20, 20);
goldImg.src = "/images/icon/gold-icon.webp";
goldImg.style.verticalAlign = "middle";
goldImg.style.marginLeft = "5px";

function logCharacterId(element, characterId, idPrefix) {
    const goldValue = parseInt(element.dataset.value);
    console.log(`Clicked on Character ID: ${characterId}, Gold Value: ${goldValue}`);
    element.disabled = true;
    element.style.color = "red";
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
    } else if (idPrefix === 'clown-gold-'){
        if (!kakulSaydonGold[characterId]) {
            kakulSaydonGold[characterId] = [];
        }
        kakulSaydonGold[characterId].push(parseInt(goldValue));
        console.log(`Character ${characterId} Gold Values:`, kakulSaydonGold[characterId]);
    } else if (idPrefix === 'brel-gold-'){
        if (!brelGold[characterId]) {
            brelGold[characterId] = [];
        }
        brelGold[characterId].push(parseInt(goldValue));
        console.log(`Character ${characterId} Gold Values:`, brelGold[characterId]);
    } else if (idPrefix === 'kaya-gold-'){
        if (!kayangelGold[characterId]) {
            kayangelGold[characterId] = [];
        }
        kayangelGold[characterId].push(parseInt(goldValue));
        console.log(`Character ${characterId} Gold Values:`, kayangelGold[characterId]);
    } else if (idPrefix === 'akkan-gold-'){
        if (!akkanGold[characterId]) {
            akkanGold[characterId] = [];
        }
        akkanGold[characterId].push(parseInt(goldValue));
        console.log(`Character ${characterId} Gold Values:`, akkanGold[characterId]);
    }
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
            case 'clown-gold-':
                totalGold = kakulSaydonGold[characterId].reduce((a, b) => a + b, 0);
                break;
            case 'brel-gold-':
                totalGold = brelGold[characterId].reduce((a, b) => a + b, 0);
                break;
            case 'kaya-gold-':
                totalGold = kayangelGold[characterId].reduce((a, b) => a + b, 0);
                break;
            case 'akkan-gold-':
                totalGold = akkanGold[characterId].reduce((a, b) => a + b, 0);
                break;
            default:
                // Handle other cases if needed
        }
        const goldImg = new Image(16, 16);
        goldImg.src = "/images/icon/gold-icon.webp";
        goldImg.style.verticalAlign = "middle";
        goldImg.style.marginLeft = "5px";

        characterElement.innerHTML = `${totalGold}`;
        characterElement.appendChild(goldImg);
    }
    totalRosterGold += parseInt(goldValue);  
    // Update the HTML element displaying total earnings
    const totalEarningsElement = document.getElementById("rosterGold");
    if (totalEarningsElement) {       
        totalEarningsElement.innerHTML = `${totalRosterGold}`;
        totalEarningsElement.appendChild(goldImg);
    }

    const bonusChest = element.nextElementSibling;
    if (bonusChest) {
        bonusChest.classList.toggle('show');
    }
    const gateContainer = element.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    let goldArrForCharacter;
    switch (idPrefix) {
        case 'valtan-gold-':
            goldArrForCharacter = valtanGold[characterId];
            break;
        case 'vykas-gold-':
            goldArrForCharacter = vykasGold[characterId];
            break;
        case 'clown-gold-':
            goldArrForCharacter = kakulSaydonGold[characterId];
            break;
        case 'brel-gold-':
            goldArrForCharacter = brelGold[characterId];
            break;
        case 'kaya-gold-':
            goldArrForCharacter = kayangelGold[characterId];
            break;
        case 'akkan-gold-':
            goldArrForCharacter = akkanGold[characterId];
            break;
        default:
            // Handle other cases if needed
    }
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
        case 'clown-gold-':
            if (kakulSaydonGold[characterId]) {
                kakulSaydonGold[characterId].push(-goldValue); // Negative value to represent subtraction
            }
            break;
        case 'brel-gold-':
            if (brelGold[characterId]) {
                brelGold[characterId].push(-goldValue); // Negative value to represent subtraction
            }
            break;
        case 'kaya-gold-':
            if (kayangelGold[characterId]) {
                kayangelGold[characterId].push(-goldValue); // Negative value to represent subtraction
            }
            break;
        case 'akkan-gold-':
            if (akkanGold[characterId]) {
                akkanGold[characterId].push(-goldValue); // Negative value to represent subtraction
            }
            break;
        default:
            // Handle other cases if needed
    }
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
            case 'clown-gold-':
                 totalGold = kakulSaydonGold[characterId].reduce((a, b) => a + b, 0);
                 break;
            case 'brel-gold-':
                totalGold = brelGold[characterId].reduce((a, b) => a + b, 0);
                break;
            case 'kaya-gold-':
                totalGold = kayangelGold[characterId].reduce((a, b) => a + b, 0);
                break;
            case 'akkan-gold-':
                totalGold = akkanGold[characterId].reduce((a, b) => a + b, 0);
                break;
             default:
                 // Handle other cases if needed
         }
         const goldImg = new Image(16, 16);
         goldImg.src = "/images/icon/gold-icon.webp";
         goldImg.style.verticalAlign = "middle";
         goldImg.style.marginLeft = "5px";
 
         characterElement.innerHTML = `${totalGold}`;
         characterElement.appendChild(goldImg);
     }   
    // Update total earnings
    totalRosterGold -= parseInt(goldValue); // Subtract from total earnings
    const totalEarningsElement = document.getElementById("rosterGold");
    if (totalEarningsElement) {
        totalEarningsElement.innerHTML = `${totalRosterGold}`;
        totalEarningsElement.appendChild(goldImg);
    }
}
function triggerGateClick(element, raid, id, gateNum, type) {
    let buttons = [];
    element.style.color = "red";

    for (let i = 1; i <= 4; i++) {
        let button = document.getElementById(`${raid}-g${i}${type}Button-${id}`);
        if (button) buttons.push(button);
    }

    for (let i = 0; i < gateNum; i++) {
        buttons[i].click();
    }
}