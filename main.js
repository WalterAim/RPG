function calculoDeCaracteristicas() {
}



function porcentaje() {
    return Math.random() * 100000000 / 1000000;
}

function d(faces) {
    return Math.trunc(porcentaje() / (1/faces * 100)) + 1;
}

function dadoCa() {
    let arr = [d(6),d(6),d(6),d(6)].sort();
    arr.shift();
    return arr.reduce((a, e) => a + e);
}

document.addEventListener("DOMContentLoaded", () => {
    let body = document.getElementsByTagName("body")[0];
function a() {
    body.innerHTML="";
    let div = document.createElement("div");
    //div.innerHTML = `| ${d(6)} ${d(6)} ${d(6)} ${d(6)} |`;
    div.innerHTML = `| ${dadoCa()} ${dadoCa()} ${dadoCa()} ${dadoCa()} ${dadoCa()} ${dadoCa()} |`
    body.appendChild(div);
}
    setInterval(a, 500);
})
