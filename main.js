class Spell {
    constructor(name, level, school, ritualizable, lauchTime, scope, components , materials, duration, description, classes, type) {
        this.name = name;
        this.level = level;
        this.school = school;
        this.ifRitual = ritualizable 
        this.launchTime = lauchTime;
        this.scope = scope;
        this.components = components;
        this.materials = materials;
        this.duration = duration;
        this.description = description;
        this.classes = classes;
        this.type = type;
    }
}

class SpellBuilder {

    extractName(name) {
      let res = name.split(" ");
      for(let i = 0; i < res.length; i++) 
        if(res[i][0] === "[") 
            res = res.slice(0,i).join(" ");
      return res;
    }

    checkLSIfR(toCheck) {
        let res = toCheck.match(/\d|truco|ritual|[a-zó]+[ano]/gi);
        res.length === 2? res.push(false): res[2] = true;
        return res;
    }

    forkComponents(cm) {
        let cmArr = cm.split(/ [(]/);
        cmArr.length === 1? cmArr.push(null) : cmArr[1] = cmArr[1].replace(")", "");
        return cmArr;
    }

    acronymMeanings(acronymArray) {
        const ref = {"V": "Verbal","S": "Somático","M": "Material"};
        let res = acronymArray;
        for(let key in ref) 
            res = res.replace(key, ref[key]);
        return res;
    }

    transform(text) {
        let textSplit = text.split("@");
        let [level, school, ifRitual] = this.checkLSIfR(textSplit[1]);
        let outKeysStats = textSplit.slice(2,6).map(e => e.split(": ")[1]);
        let cm = this.forkComponents(outKeysStats[2]);
        return new Spell(this.extractName(
            textSplit[0]), 
            level, 
            school, 
            ifRitual, 
            outKeysStats[0], 
            outKeysStats[1], 
            this.acronymMeanings(cm[0]), 
            cm[1], 
            outKeysStats[3], 
            textSplit[textSplit.length - 1], 
            null, 
            null
        );
    }
    
    HTMLize(spellObj) {
        let obj = spellObj;
        let html = [
            `<div class="conjuro">`,
                `<header class="encabezado">`,
                    `<div class="titulo">`,
                        `<h3>${obj.name}</h3>`, 
                        `<p>${(obj.level == "Truco")? level: "Nivel " + obj.level}</p>`,
                    `</div>`,
                    `<p>${obj.school} ${obj.ifRitual? "(ritual)": ""}</p>`,
                `</header>`,
                `<main class="cuerpo">`,
                    `<div class="tiempo-de-conjuración tipo">`,
                        `<div>tiempo de conjuración</div>`,
                        `<p>${obj.launchTime}</p>`,
                    `</div>`,
                    `<div class="componentes tipo">`,
                        `<div>componentes:</div>`,
                        `${obj.components.replace(/[A-Za-záó]+/g, a => `<p>${a}</p>`)}`,
                    `</div>`,
                    `<div class="materiales tipo">`,
                        `<div>materiales</div>`,
                        `<p>${obj.materials}</p>`,
                    `</div>`,
                    `<div class="duración tipo">`,
                        `<div>Duracion</div>`,
                        `<p>${obj.duration}</p>`,
                    `</div>`,
                    `<div class="alcance tipo">`,
                        `<div>alcance</div>`,
                        `<p>${obj.scope}</p>`,
                    `</div>`,
                    `<div class="descripción">${obj.description}</div>`,
                `</main>`,
            `</div>`
        ];
        html = html.join('');
        return html;
    }
}

//let HTMLSpells = listSpell.map(e => HTMLization(e));
document.addEventListener("DOMContentLoaded", () => {
    let bandeja = document.getElementById("bandeja");
    let spellBuilder = new SpellBuilder();
    let spell = spellBuilder.transform(`Visión verdadera [True Seeing]@
    Nivel 6, adivinación@
    Tiempo de lanzamiento: 1 acción@
    Alcance: Toque@
    Componentes: V, S, M (un ungüento para los ojos de 25 po de valor; está hecho de polvo de setas, azafrán y grasa; que el conjuro con-
    sume)@
    Duración: 1 hora@
    Este conjuro proporciona a la criatura voluntaria que tocas, la habilidad de ver las cosas como realmente son. 
    Mientras dure el conjuro, la criatura tiene visión verdadera, se da cuenta de puertas secretas ocultas por magia,
    y puede ver en el Plano Etéreo, todo en un alcance de 120 pies (24 casillas, 36 m).`);
    bandeja.innerHTML = spellBuilder.HTMLize(spell);
});