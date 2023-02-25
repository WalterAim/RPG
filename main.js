/*
let a =
`                    <div class="conjuro"> 
<header class="encabezado">
    <div class="titulo">
        <h3>Nombre</h3>
        <p>Nivel</p>
    </div>
    <p>Escuela</p>
</header>  
<main class="cuerpo">
    <div class="tiempo-de-conjuración tipo">
        <div>tiempo de conjuración</div>
        <p>tiempoDeConjuracion</p>
    </div>
    <div class="componentes tipo">
        <div>componentes:</div>
        <p>Somatico</p>
    </div>
    <div class="duración tipo">
        <div>Duración</div>
        <p>duracion</p>
    </div>
    <div class="alcance tipo">
        <div>Alcance</div>
        <p>alcance</p>
    </div>
    <div class="descripción">
]       descripcion
    </div>
</main>
</div>`;
*/
let bandeja = document.getElementById("bandeja");

//function main() {}

let listSpell = [

]

function HTMLization({name, level, school, lauchTime, duration, scope, components , materials, description, classes, type, ritualizable}) {
    let spellHTML = ``;
    spellHTML += `<header class="encabezado"><div class="titulo"><h3>${name}</h3><p>${school + ` ` + (ritualizable)? `ritual`: ``}</p></div><p>Escuela</p></header>`
    spellHTML += `<main class="cuerpo">`;
    spellHTML += `<div class="tiempo-de-conjuración tipo"><div>tiempo de conjuración</div><p>${lauchTime}</p></div>`;
    spellHTML += `<div class="componentes tipo"><div>componentes:</div><p>Somatico</p></div>`;
    return null;
}

//let HTMLSpells = listSpell.map(e => HTMLization(e));

function render() {
    bandeja.innerHTML = "";
}

document.addEventListener("DOMContentLoaded", () => {
    render()
});