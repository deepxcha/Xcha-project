
function login() {
  document.getElementById('login-screen').classList.add('hidden');
  document.getElementById('file-screen').classList.remove('hidden');
  loadFiles();
}

function logout() {
  document.getElementById('file-screen').classList.add('hidden');
  document.getElementById('login-screen').classList.remove('hidden');
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
}

function loadFiles() {
  const files = [
    { filename: 'doc1.pdf', owner: 'UserA', public: true, url: '#' },
    { filename: 'doc2.pdf', owner: 'UserB', public: false, url: '#' }
  ];
  renderFiles(files);
}

function renderFiles(files) {
  const container = document.getElementById('file-list');
  container.innerHTML = '';
  files.forEach(file => {
    const card = document.createElement('div');
    card.className = 'file-card';
    card.innerHTML = `
      <p><strong>${file.filename}</strong></p>
      <p>👤 ${file.owner}</p>
      <p>${file.public ? '🌍 عام' : '🔒 خاص'}</p>
      <a href="${file.url}" target="_blank">⬇️ تحميل</a>
    `;
    container.appendChild(card);
  });
}

function searchFiles() {
  const term = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.file-card');
  cards.forEach(card => {
    const match = card.innerText.toLowerCase().includes(term);
    card.style.display = match ? 'block' : 'none';
  });
}

function showMyFiles() { loadFiles(); }
function showPublicFiles() { loadFiles(); }
function uploadFile() { alert('رفع ملف قريبًا...'); }
