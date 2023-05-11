let ss = sessionStorage
let ss_usr = ss.getItem('ss_usuario')
//link a login
let a_usr  = document.getElementById("a_ingresar")
//campo usuario
let c_usr  = document.getElementById("usuario")

if (c_usr !== null) {
    c_usr.value = ss_usr
}
if (ss_usr === null) {
    a_usr.innerHTML = "<i class='fa-solid fa-sign-in'></i>Ingresar"
  }
else {
    a_usr.innerHTML = "<i class='fa-solid fa-user'></i>"+ss_usr+"<i class='fa-solid fa-sign-out'></i>"
}

