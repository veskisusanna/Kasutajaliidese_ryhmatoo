function showView(viewId) {
  document.querySelectorAll('.view').forEach(section => {
    section.classList.add('hidden');
  });
  const view = document.getElementById(viewId);
  if (view) view.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');

  const showLoginBtn = document.getElementById('show-login');
  const showRegisterBtn = document.getElementById('show-register');

  if (showLoginBtn) {
    showLoginBtn.addEventListener('click', e => {
      e.preventDefault();
      showView('login-view');
    });
  }

  if (showRegisterBtn) {
    showRegisterBtn.addEventListener('click', e => {
      e.preventDefault();
      showView('register-view');
    });
  }

  if (registerForm) {
    registerForm.addEventListener('submit', e => {
      e.preventDefault();
      const name = registerForm.elements['name']?.value?.trim();
      const email = registerForm.elements['email']?.value?.trim();
      const password = registerForm.elements['password']?.value?.trim();

      if (name && email && password) {
        localStorage.setItem('user', JSON.stringify({ name, email, password }));
        alert('Konto loodud! Logi nüüd sisse.');
        showView('login-view');
      } else {
        alert('Palun täida kõik väljad.');
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', e => {
      e.preventDefault();
      const email = loginForm.elements['email']?.value?.trim();
      const password = loginForm.elements['password']?.value?.trim();
      const user = JSON.parse(localStorage.getItem('user'));

      if (user && user.email === email && user.password === password) {
        window.location.href = 'dashboard.html';
      } else {
        alert('Vale email või parool');
      }
    });
  }

  // Algvaade: logi sisse
  showView('login-view');
});
