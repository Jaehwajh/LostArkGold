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


let selectedRaidIds = [];
const maxRaids = 3; 

function raidSelect(raidId, containerIndex) {
    if (!selectedRaidIds[containerIndex]) {
        selectedRaidIds[containerIndex] = [];
    }

    // Check if the maximum limit has been reached
    if (selectedRaidIds[containerIndex].length < maxRaids) {
        // Check if the raidId already exists in the array
        if (selectedRaidIds[containerIndex].indexOf(raidId) === -1) {
            selectedRaidIds[containerIndex].push(raidId);
            console.log('Selected Raid IDs for container ' + containerIndex + ':', selectedRaidIds[containerIndex]);
        } else {
            console.log('Raid ID already exists in the array for container ' + containerIndex + '.');
        }
    } else {
        console.log('Maximum limit reached for container ' + containerIndex + '.');
    }
}

