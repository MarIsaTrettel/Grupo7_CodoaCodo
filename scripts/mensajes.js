//generar n mensajes entre 7 y 11
let n = Math.floor( Math.random() * 11) + 7;
let cont_msg = document.querySelector(".contenedor_mensajes")
for (let d = 0; d < n; d++ ) {
    cont_msg.innerHTML += `<div class="float-msg"></div>`
}

function traer(al_div, texto_mensaje) {
    //función que trafica gente
    fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(res => {
        console.log(res)
        console.log(res.results[0].email)
        al_div.innerHTML= `
            
            <div class="row">

                <div class="column-1 mensajista">
                    <img src="${res.results[0].picture.large} " width="100px" class="img-fluid rounded-circle">
                    <p>Nombre: ${res.results[0].name.first}</p>
                    <p>Mail: ${res.results[0].email}</p>
                </div>
                
                <div class="column-2 mensaje">
                    <p> ${texto_mensaje} </p>
                </div>

            </div>

            `
        })
    }

    //rutinas para leer mensajes desde txt plano

function loadTXT(path) {
    let arrayData = new Array()
    let archTxt = new XMLHttpRequest();
    let ruta = path
    archTxt.open('GET',ruta, false)
    archTxt.send(null)
    let txt = archTxt.responseText;
    return txt
}

function parseList(TXT, delimiter = '\n', elim_character = '') {
    TXT = TXT.replace(new RegExp(elim_character, 'g'), '');
    const lines = TXT.split(delimiter);
    
    return lines 
}

function parseCSV(csvContent) {
    const lines = csvContent.split('\n');
    const headers = lines[0].split(',');
    const list = [];
    
    for (let i = 1; i < lines.length; i++) {
        const currentLine = lines[i].split(',');
        if (currentLine.length === headers.length) {
        const entry = {};
        for (let j = 0; j < headers.length; j++) {
            entry[headers[j]] = currentLine[j];
        }
        list.push(entry);
        }
    }
    
    return list;
    }

//leer comentarios imaginarios
let txt = loadTXT('comentarios.txt')
let comentarios = parseList(txt, '\r\n', '"')

// poblar los espacios de mensajes
let mensajes = document.querySelectorAll('.float-msg');

let maxmsg = 49
for (m of mensajes) {
//seleccionar  n mensajes al azar de la lista
    let nm = Math.floor( Math.random() * maxmsg) + 0
    maxmsg -= 1
    let mens = comentarios[nm]
    //eliminar mensaje para que no se repita
    comentarios.pop(nm)
    traer(m, mens)
}
//