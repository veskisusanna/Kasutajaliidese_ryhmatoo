// Utility: näita/peida vaateid (kasutusel ainult index.html-is)
function showView(viewId) {
  document.querySelectorAll('.view').forEach(sec => sec.classList.add('hidden'));
  const view = document.getElementById(viewId);
  if (view) view.classList.remove('hidden');
}

// DOM täielikult laetud
document.addEventListener('DOMContentLoaded', () => {
  // INDEX.HTML logimine ja regamine
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');

  if (loginForm && registerForm) {
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
      const user = { name, email, password };
      localStorage.setItem('user', JSON.stringify(user));
      alert('Konto loodud! Palun logi sisse.');
      showView('login-view');
    });

    // Sisselogimine
    loginForm.addEventListener('submit', e => {
      e.preventDefault();
      const [email, password] = [...e.target].map(i => i.value);
      const saved = JSON.parse(localStorage.getItem('user'));
      if (saved && saved.email === email && saved.password === password) {
        window.location.replace('dashboard.html');
      } else {
        alert('Vale email või parool');
      }
    });
  }

  // Lisa treening – nupu loogika töötab kõikjal
  document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.parentElement;
      const workout = {
        title: card.querySelector('h3').textContent,
        duration: card.querySelectorAll('p')[0].textContent.replace('Kestus: ', ''),
        level: card.querySelectorAll('p')[1].textContent.replace('Raskus: ', ''),
        image: card.querySelector('img').getAttribute('src')
      };
      const saved = JSON.parse(localStorage.getItem('myWorkouts')) || [];
      saved.push(workout);
      localStorage.setItem('myWorkouts', JSON.stringify(saved));
      alert(`"${workout.title}" lisati sinu treeningutesse!`);
    });
  });

  // Logout töötab kõikjal
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('user');
      window.location.replace('indeks.html');
    });
  }
});
