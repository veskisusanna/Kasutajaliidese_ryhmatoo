
function showView(viewId) {
  document.querySelectorAll('.view').forEach(s => s.classList.add('hidden'));
  document.getElementById(viewId).classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');

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
  registerForm.addEventListener('submit', e => {
    e.preventDefault();
    const [name, email, password] = [...e.target].map(i => i.value).slice(0,3);
    localStorage.setItem('user', JSON.stringify({ name, email, password }));
    alert('Konto loodud! Logi nüüd sisse.');
    showView('login-view');
  });

  // Sisselogimine
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const [email, password] = [...e.target].map(i => i.value);
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === email && user.password === password) {
      window.location.href = 'dashboard.html';
    } else {
      alert('Vale email või parool');
    }
  });

  // Alguses näita ainult login-vaadet
  showView('login-view');
});
