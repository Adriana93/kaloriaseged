document.querySelectorAll('.nav-link').forEach(link => {
  // Csak az útvonalat hasonlítjuk össze (domainek és paraméterek nélkül)
  const currentPath = window.location.pathname;
  const linkPath = new URL(link.href).pathname;

  if (linkPath === currentPath) {
    link.classList.add('active');
  }

  link.addEventListener('click', function () {
    document.querySelectorAll('.nav-link').forEach(item => item.classList.remove('active'));
    this.classList.add('active');
  });
});


function toggleMenu() {
  const menu = document.querySelector(".nav-bar");
  menu.classList.toggle("active");
}