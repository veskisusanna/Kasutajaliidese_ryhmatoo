// Utility: näita/peida vaateid
function showView(viewId) {
  document.querySelectorAll('.view').forEach(sec => sec.classList.add('hidden'));
  document.getElementById(viewId).classList.remove('hidden');
}

// Vaatevahetus nupud
document.getElementById('show-register').addEventListener('click', e => {
  e.preventDefault();
  showView('register-view');
});
document.getElementById('show-login').addEventListener('click', e => {
  e.preventDefault();
  showView('login-view');
});

// Registreerimine
document.getElementById('register-form').addEventListener('submit', e => {
  e.preventDefault();
  const [name, email, password] = [...e.target].map(i => i.value).slice(0,3);
  const user = { name, email, password };
  localStorage.setItem('user', JSON.stringify(user));
  alert('Konto loodud! Palun logi sisse.');
  showView('login-view');
});

// Sisselogimine
document.getElementById('login-form').addEventListener('submit', e => {
  e.preventDefault();
  const [email, password] = [...e.target].map(i => i.value);
  const saved = JSON.parse(localStorage.getItem('user'));
  if (saved && saved.email === email && saved.password === password) {
    // suuna eraldi dashboard-lehele
    window.location.replace('dashboard.html');
  } else {
    alert('Vale email või parool');
  }
});
