// Gombok és modal lekérése
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const foodModal = document.getElementById('foodModal');

// Modal megnyitása
openModalBtn.addEventListener('click', () => {
  foodModal.style.display = 'flex';
});

// Modal bezárása
closeModalBtn.addEventListener('click', () => {
  foodModal.style.display = 'none';
});

// Modal bezárása háttérre kattintva
window.addEventListener('click', (e) => {
  if (e.target === foodModal) {
    foodModal.style.display = 'none';
  }
});
