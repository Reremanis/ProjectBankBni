// form-script.js

// 1. Update jam real-time setiap detik
function updateClock() {
  const clock = document.getElementById('clock');
  const now = new Date();
  // Format jam 24 jam tanpa AM/PM
  clock.textContent = now.toLocaleTimeString('id-ID', { hour12: false });
}
setInterval(updateClock, 1000);
updateClock();

// 2. Toggle Mode Gelap / Terang
const toggleBtn = document.getElementById('toggle-mode');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    toggleBtn.textContent = '☀️';
  } else {
    toggleBtn.textContent = '🌙';
  }
});

// 3. Styling Dark Mode (ditambahkan secara dinamis)
const darkModeStyles = `
  body.dark-mode {
    background-color: #222;
    color: #eee;
  }
  body.dark-mode header {
    background-color: #111;
  }
  body.dark-mode nav a {
    color: #ddd;
  }
  body.dark-mode form {
    background-color: #333;
    color: #eee;
    box-shadow: none;
  }
  body.dark-mode input, body.dark-mode select, body.dark-mode textarea {
    background-color: #555;
    color: #eee;
    border: 1px solid #888;
  }
  body.dark-mode button[type="submit"] {
    background-color: #e67e22;
    color: white;
  }
  body.dark-mode button[type="submit"]:hover {
    background-color: #cf6f1a;
  }
  body.dark-mode #toggle-mode {
    background-color: #eee;
    color: #f37021;
    border-color: #f37021;
  }
`;
const styleEl = document.createElement('style');
styleEl.textContent = darkModeStyles;
document.head.appendChild(styleEl);

// 4. Handle form submit
function handleSubmit(event) {
  event.preventDefault(); // cegah reload halaman

  // Optional: validasi manual bisa ditambahkan di sini
  
  const form = event.target;
  
  // Sembunyikan form setelah submit
  form.style.display = 'none';

  // Tampilkan pesan sukses
  const confirmation = document.getElementById('formConfirmation');
  confirmation.classList.add('show');
}

// Supaya bisa dipanggil dari onsubmit di HTML
window.handleSubmit = handleSubmit;