//formulario
let form  = document.getElementById("form-contacto")
//botón de envío
let submb = document.getElementById("mandar")
//nombre
let usr = document.getElementById("usuario")
let lusr = document.getElementById("lusuario")
let lusr0 = lusr.innerText
//correo
let corr = document.getElementById("correo")
let lcorr = document.getElementById("lcorreo")
let lcorr0 = lcorr.innerText
//comentario
let com = document.getElementById("comentario")
let lcom = document.getElementById("lcomentario")
let lcom0 = lcom.innerText
//file
let vfile = document.getElementById("src-file")


let allok = false

submb.disabled = true
submb.innerText = 'Completa los campos del formulario \n (ingresa comentario y/o adjunta archivo)'

form.addEventListener('input', function (event) {
    // Cada vez que el usuario escribe algo, verificamos si
    // los campos del formulario son válidos.

    allok = true

    //cargar usuario desde login y deshabilitar
    //cargar correo desde login

    //usuario
    if (usr.value == '') 
            {allok = false
            lusr.innerText = lusr0 + " (Por favor ingresa/logueate)"
        }
    else {
            lusr.innerText = lusr0
        }

    
    //correo
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*.(?:|com|es)+$/.test(correo.value)!==true){
        allok = false
        lcorr.innerText = lcorr0 + " (el correo no es válido)"
        //revisar si coincide el correo con el usuario
    }
    else {
        lcorr.innerText = lcorr0
    }

        //archivo o comentario al menos
    if (vfile.files.length == 0 && com.value.trim().length == 0) {
        allok = false
    }
    
    if (allok) {submb.disabled = false
        submb.innerText = "Inscribir"}
    else {submb.disabled = true
        submb.innerText = 'Completa los campos del formulario  \n (ingresa comentario y/o adjunta archivo)'  }    
})
