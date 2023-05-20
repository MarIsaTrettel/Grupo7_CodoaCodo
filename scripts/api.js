const xhr = new XMLHttpRequest();

function onRequestHandler(){

    if (this.readyState === 4 && this.status === 200 ){

        const data= JSON.parse(this.response);
        const HTMLResponse = document.querySelector(`#comentarios`);
        HTMLResponse.innerHTML = `<ul>${data.map((comment) => `<li style="list-style-type:none"><b> ${comment.email}</b> <br> <br> '' ${comment.body}''</li>`).join('')}</ul>`;

    }

}

xhr.addEventListener("load" , onRequestHandler);
xhr.open("GET", 'https://jsonplaceholder.typicode.com/comments?postId=1');
xhr.send();
