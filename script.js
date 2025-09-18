// =========================
// Theme Toggle
// =========================
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Apply saved theme on load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-theme');
}

// =========================
// Internship Certificate Dropdowns (Click)
// =========================
const certButtons = document.querySelectorAll('.cert-btn');
const certLists   = document.querySelectorAll('.cert-list');

certButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();

    const targetId  = btn.getAttribute('data-dropdown');
    const dropdown  = document.getElementById(targetId);

    // toggle clicked one
    dropdown.classList.toggle('show');

    // hide all other dropdowns
    certButtons.forEach(otherBtn => {
      if (otherBtn !== btn) {
        const otherId = otherBtn.getAttribute('data-dropdown');
        const otherList = document.getElementById(otherId);
        if (otherList) {
          otherList.classList.remove('show');
        }
      }
    });
  });
});

// close dropdown when clicking a link in it
certLists.forEach(list => {
  list.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      list.classList.remove('show');
    });
  });
});

// close dropdown on click outside
window.addEventListener('click', (e) => {
  if(!e.target.matches('.cert-btn')){
    certLists.forEach(list => list.classList.remove('show'));
  }
});

// =========================
// Modal (Achievements Image Preview)
// =========================
const modal       = document.getElementById('image-modal');
const modalImg    = document.getElementById('modal-image');
const downloadBtn = document.getElementById('download-btn');
const backBtn     = document.getElementById('back-btn');
const closeBtn    = document.querySelector('.close-btn');

// open modal on achievement image click
document.querySelectorAll('.achievement-card img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
    downloadBtn.href = img.src;
  });
});

// close modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});
backBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if(e.target === modal){
    modal.style.display = 'none';
  }
});
