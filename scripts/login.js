//formulario
let form  = document.getElementById("form-login")
//botón de envío
let submb = document.getElementById("mandar")
//nombre
let usr = document.getElementById("usuario")
let lusr = document.getElementById("lusuario")
let lusr0 = lusr.innerText
//pass
let p1 = document.getElementById("pas1")
let allok = false
//session storage
let ss = sessionStorage
//cerrar sesión
ss.removeItem("ss_usuario")

submb.disabled = true
submb.innerText = 'Completa los campos del formulario'

form.addEventListener('input', function (event) {
    // Cada vez que el usuario escribe algo, verificamos si
    // los campos del formulario son válidos.

    allok = true

    //cargar usuario desde login y deshabilitar
    //cargar correo desde login

    //usuario
    if (usr.value == '' || p1.value == '') 
            {allok = false
        }

    if (allok) {submb.disabled = false
        submb.innerText = "Enviar"}
    else {submb.disabled = true
            submb.innerText = 'Completa los campos del formulario'  }

    })


function sbmclick(event){
        document.getElementById('errormsg').innerHTML =''
        event.preventDefault();//evita envío de formulario
        //verificar usuario y contraseña y realizar el login
        if (usr.value == 'IsaT' && p1.value == 111111) {
            //guardar estado en ssesionstorage
            ss.setItem('ss_usuario',usr.value)
            history. back()
            }   
        else if (usr.value == 'dCF' && p1.value == 111111) {
            //guardar estado en sessionstorage
            ss.setItem('ss_usuario',usr.value)
            history. back()
            }
        else if (usr.value == 'invitado' && p1.value == 111111){
            //guardar usuario en sessionstorage
            ss.setItem('ss_usuario',usr.value)
            history. back()
        }
        else {
            document.getElementById('errormsg').innerHTML ='Usuario o Contraseña erróneos'
            p1.value = ''
            ss.removeItem('ss_usuario')
        }
    }