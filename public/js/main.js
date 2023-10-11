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


// Raid Select


// let selectedRaidIds = [];
// const maxRaids = 3; 

// function raidSelect(raidId, containerIndex) {
//     if (!selectedRaidIds[containerIndex]) {
//         selectedRaidIds[containerIndex] = [];
//     }

//     if (selectedRaidIds[containerIndex].length < maxRaids) {
//         // Check if the raidId already exists in the array
//         if (selectedRaidIds[containerIndex].indexOf(raidId) === -1) {
//             selectedRaidIds[containerIndex].push(raidId);
//             console.log('Selected Raid IDs for container ' + containerIndex + ':', selectedRaidIds[containerIndex]);
//         } else {
//             console.log('Raid ID already exists in the array for container ' + containerIndex + '.');
//         }
//     } else {
//         console.log('Maximum limit reached for container ' + containerIndex + '.');
//     }
// }


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

function getValue(element){
    const goldValue = parseInt(element.dataset.value);

    const chestId = element.dataset.target;
    const bonusChest = document.getElementById(chestId);
    bonusChest.classList.toggle("show");

    valtanGoldSelector.push(goldValue);

    const valtanTotal = valtanGoldSelector.reduce((a,b) => a+b);
    const valtanGold = document.getElementById("valtan-gold");
    valtanGold.innerHTML = valtanTotal + "g";
};  

