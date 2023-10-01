// Onclick

document.addEventListener('DOMContentLoaded', () => {
    const raidCards = document.querySelectorAll('.raid-card');
  
    raidCards.forEach((raidCard) => {
      raidCard.addEventListener('click', (event) => {
        const raidInfo = raidCard.querySelector('.raid-info');
        raidInfo.classList.toggle('show');
      });
    });
  });