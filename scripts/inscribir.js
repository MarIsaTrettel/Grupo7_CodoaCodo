//formulario
let form  = document.getElementById("form-inscribir")
//botón de envío
let submb = document.getElementById("mandar")
//nombre
let nombre = document.getElementById("nombre")
let lnombre = document.getElementById("lnombre")
let lnombre0 = lnombre.innerText
//dni
let dni = document.getElementById("dni")
let ldni = document.getElementById("ldni")
let ldni0 = ldni.innerText
//correo
let corr = document.getElementById("correo")
let lcorr = document.getElementById("lcorreo")
let lcorr0 = lcorr.innerText
//usuario
let usr = document.getElementById("usuario")
let lusr = document.getElementById("lusuario")
let lusr0 = lusr.innerText

//dirección
let dir = document.getElementById("direccion")
let ldir = document.getElementById("ldireccion")
let ldir0 = ldir.innerText

//ciudad
let ciu = document.getElementById("ciudad")
let lciu = document.getElementById("lciudad")
let lciu0 = lciu.innerText

//pass1
let p1 = document.getElementById("pas1")
let lp1 = document.getElementById("lpas1")
let lp10 = lp1.innerText

//pass2
let p2 = document.getElementById("pas2")
let lp2 = document.getElementById("lpas2")
let lp20 = lp2.innerText

let allok = false

submb.disabled = true
submb.innerText = 'Completa los campos del formulario'

submb.addEventListener('click', function (event) {
    // Cada vez que el usuario escribe algo, verificamos si
    // los campos del formulario son válidos.
    //alert('click')
    })

form.addEventListener('input', function (event) {
    // Cada vez que el usuario escribe algo, verificamos si
    // los campos del formulario son válidos.
    allok = true
    
    //nombre
    if (nombre.value == '' || nombre.value.split(' ').length<2) 
            {allok = false
            lnombre.innerText = lnombre0 + " (se requieren nombre y apellido con 3 letras como mínimo)"}
    else 
        { if (nombre.value.split(' ')[0].length>=3 && nombre.value.split(' ')[1].length>=3)
                {lnombre.innerText = lnombre0 }
            }

    //dni
        if (dni.value.length<8) {
            allok=false
            ldni.innerText = ldni0 + " (ingrese un número con al menos 8 dígitos)"
        }
        else{
            ldni.innerText = ldni0
        }
    //correo
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*.(?:|com|es)+$/.test(correo.value)!==true){
        allok = false
        lcorr.innerText = lcorr0 + " (el correo no es válido)"
    }
    else {
        lcorr.innerText = lcorr0
    }

    //usuario
    if (usr.value.length<6) {
        allok = false
        lusr.innerText = lusr0 + " (se requieren al menos 6 caracteres)"
    }
    else {
        lusr.innerText = lusr0
    //Revisar disponibilidad de nombre por el método apropiado contra lista de usuarios existentes
    }    

    //dirección
    if (dir.value.length<6) {
        allok = false
        ldir.innerText = ldir0 + " (la dirección debe tener al menos 6 caracteres)"
    }
    else {
        ldir.innerText = ldir0
    }
    
    //ciudad
    if (ciu.value.length<6) {
        allok = false
        lciu.innerText = lciu0 + " (la ciudad debe tener al menos 6 caracteres)"
    }
    else {
        lciu.innerText = lciu0
    }
    
    //password
    if (p1.value.length>12 || p1.value.length<8){
        allok=false
        lp1.innerText = lp10 + " (entre 8 y 12 caracteres)"
    }
    else {
        lp1.innerText = lp10
    }
    if (p2.value !== p1.value){
        allok=false
        lp2.innerText = lp20 + " (debe ser igual a la primera contraseña)"
    }
    else {
        lp2.innerText = lp20
    }

    if (allok) {submb.disabled = false
        submb.innerText = "Inscribir"}
    else {submb.disabled = true
         submb.innerText = 'Completa los campos del formulario'}

})
