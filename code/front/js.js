const root = document.querySelector('.root')
const url = window.location.pathname

const loginHTML = `<form class="login" action="">
  <br/>
  <br/>
  PLEASE SING IN
  <br/>
  <br/>
  login: 
  <br/>
  <input type="text"> 
  <br>
  password: 
  <br/>
  <input type="password">
  <br>
  <br>
  <input type="submit">
  <br>
  <br>
  <br>
  !!! Registration is available by invitation only !!!
</form>`
const invitationHTML = `<form class="login" action="">
  <br/>
  <br/>
  REGISTRATION:
  <br/>
  <br/>
  email: 
  <br/>
  <input type="text"> 
  <br>
  password: 
  <br/>
  <input type="password">
  password 2: 
  <br/>
  <input type="password">
  <br>
  <br>
  <input type="submit">
</form>`
const recoverHTML = `<form class="login" action="">
  <br/>
  <br/>
  CHANGE PASSWORD:
  <br/>
  <br/>
  email: 
  <br/>
  <div>
    ,,email
  </div>
  <br>
  password: 
  <br/>
  <input type="password">
  password 2: 
  <br/>
  <input type="password">
  <br>
  <br>
  <input type="submit">
</form>`

if(false) {
  localStorage
} else {
  if (url.includes('/login')) {
    root.innerHTML = loginHTML
  } else if (url.includes('/complete-invitation')) {
    root.innerHTML = invitationHTML
  } else {
    window.location.pathname = '/login'
  }
}




    
