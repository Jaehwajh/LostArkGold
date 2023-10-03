// Onclick

// document.addEventListener('DOMContentLoaded', () => {
//     const raidCards = document.querySelectorAll('.raid-card');
  
//     raidCards.forEach((raidCard) => {
//       raidCard.addEventListener('click', (event) => {
//         const raidInfo = raidCard.querySelector('.raid-info');
//         raidInfo.classList.toggle('show');
//       });
//     });
//   });

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