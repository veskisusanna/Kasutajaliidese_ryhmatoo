document.getElementById('show-register').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('login-view').classList.add('hidden');
    document.getElementById('register-view').classList.remove('hidden');
  });
  
  document.getElementById('show-login').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('register-view').classList.add('hidden');
    document.getElementById('login-view').classList.remove('hidden');
  });
  