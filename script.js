document.getElementById('loginForm').addEventListener('submit', e=>{
  const email = document.getElementById('email').value.trim();
  const pwd   = document.getElementById('pwd').value.trim();
  if(!email || !pwd){
    alert('Both fields are required.');
    e.preventDefault();
  }else{
    // fake “login” – just go to home.html
    e.preventDefault();
    location.href = 'home.html';
  }
});
