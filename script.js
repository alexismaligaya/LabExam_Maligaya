document.getElementById('loginForm').addEventListener('submit', e=>{
  const email=document.getElementById('email').value.trim()
  const pwd=document.getElementById('pwd').value.trim()
  if(!email||!pwd){
    alert('Both fields are required.')
    e.preventDefault()
  }else{
    e.preventDefault()
    location.href='home.html'
  }
})
