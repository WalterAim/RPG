//predifinidos
//escuelas
const SCHOOL = {
    TRANSMUTACION: "transmutacion",
    ABJURACION: "abjuracion",
    ENCANTAMIENTO: "encantamiento",
    RITUAL: "ritual",
    ILUSION: "ilusion",
    EVOCACION: "evocacion",
    CONJURACION: "conjuracion",
    NIGROMANCIA: "nigromancia",
    ADIVINACION: "adivinación",
}

const { TRANSMUTACION, 
    RITUAL, 
    ADIVINACION, 
    ABJURACION, 
    CONJURACION, 
    ENCANTAMIENTO, 
    EVOCACION, 
    NIGROMANCIA,
    ILUSION 
} = SCHOOL;

const COMPONENTS = {
    SOMATICO: "somatico",
    VERBAL: "verbal",
    MATERIAL: "material"
}

//clases
const CLASSES = {
    BARBARO: "barbaro",
    BARDO: "bardo",
    BRUJO: "brujo", 
    CLERIGO: "clerigo", 
    DRUIDA: "druida",
    EXPLORADOR: "explorador",
    GUERRERO: "guerrero",
    HECHECERO: "hechicero",
    MAGO: "mago",
    MONJE: "monje",
    PALADIN: "paladin",
    PICARO: "picaro",
}

const {
    BARBARO,
    BARDO,
    BRUJO, 
    CLERIGO, 
    DRUIDA,
    EXPLORADOR,
    GUERRERO,
    HECHECERO,
    MAGO,
    MONJE,
    PALADIN,
    PICARO,
} = CLASSES;

const INSTANTANEO = "instantaneo";

//Alcance
const TOQUE = "Toque";
const PERSONAL = "Personal";

class Spell {
    constructor(name, level, school, ritualizable, lauchTime, scope, components , materials, duration, description, classes, type) {
        this.name = name;
        this.level = level;
        this.school = school;
        this.ifRitual = ritualizable 
        this.lauchTime = lauchTime;
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
}

const SpellBuilder = new SpellBuilder();
SpellBuilder.transform("Volar [Fly]@Nivel 3, transmutación@Tiempo de lanzamiento: 1 acción@Alcance: Toque@Componentes: V, S, M (la pluma del ala de cualquier ave)@Duración: Concentración, hasta 10 minutos@Tocas a una criatura voluntaria. El objetivo gana una velocidad de vuelo de 60 pies (12 ca-sillas, 18 m) durante la duración del conjuro.@Cuando el conjuro finaliza, si el objetivo aún está en el aire, cae a menos que pueda detenerla caída. A niveles superiores. Cuando lanzas este hechizo usando un espacio de conjuros de ni-vel 4 o superior, puedes elegir una criatura adicional como objetivo por cada nivel de espacio de conjuros por encima de nivel 3.")