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

/*(class Spell {
    constructor(name, level, school, ritualizable, lauchTime, duration, scope, components , materials, description, classes, type) {
        this.name = name;
        this.level = level;
        this.school = school;
        this.lauchTime = lauchTime;
        this.duration = duration;
        this.scope = scope;
        this.components = components;
        this.materials = materials;
        this.description = description;
        this.classes = classes;
        this.type = type;
        this.ritualizable = ritualizable 
    }

    function extractTitle(name) {
        return name.split(" ").reduce((a, e) => a + ((e[0] != "[")? " " + e : ""));
    }

    function checkIfRitual(toCheck) {
        let escuelaRitual = toCheck.split(" ");
        if (escuelaRitual.length == 1) escuelaRitual.push(false); 
        else escuelaRitual[1] = true;
        return escuelaRitual;
    }

    function forkComponents(componentsAndMaterials) {
        let componentsMaterials = componentsAndMaterials..split(/ [(]/);
        if (componentsMaterials.length == 1) componentsMaterials.push(null);
        else componentsMaterials[1] = componentsMaterials[1].replace(")", "");
        return componentsMaterials;
    }

    function acronymMeanings(acronymArray) {
        let result = []
        let ref = {"V": "Verbal","S": "Somático","M": "Material"};
        for(let key of array)
        for(let key in ref) result = acronymArray.replace(key, ref[key]);
        return result;
    }

    function extracStatsOfSpell(text) {
        let result = spellText.split("@");
    
        for (let i = 2; i < 6; i++) result[i] = result[i].split(": ")[1];
        
        result[0] = extractTitle(result[0]);
        
        result.splice(1,1,...result[1].split(", "));
        
        result.splice(2,1,...checkIfRitual(result[2]));
        
        result[1] = result[1].split(" ");
        result[1] = result[1][result[1].length - 1];
    
        result.splice(6,1,...forkComponents(result[6]););
    
        result[6] = acronymMeanings(result[6])

    }
    
    function gerateSpell(Stats) {
        Stats.push(null);
        Stats.push(null);
        return new Spell(...Stats);
    }
}*/

class Spell {
    constructor(name, level, school, ritualizable, lauchTime, duration, scope, components , materials, description, classes, type) {
        this.name = name;
        this.level = level;
        this.school = school;
        this.lauchTime = lauchTime;
        this.duration = duration;
        this.scope = scope;
        this.components = components;
        this.materials = materials;
        this.description = description;
        this.classes = classes;
        this.type = type;
        this.ritualizable = ritualizable 
    }
}

class SpellMaker {

    extractName(name) {
      let result = name.split(" ");
      for(let i = 0; i < result.length; i++)
        if(result[i][0] == "[")
          result = result.slice(0,i).join(" ");
      return result;
    }

    extractLevel(level) {
    
    }

    extractSchool(school) {

    }

    checkIfRitual(toCheck) {
        let escuelaRitual = toCheck.split(" ");
        if (escuelaRitual.length == 1) escuelaRitual.push(false); 
        else escuelaRitual[1] = true;
        return escuelaRitual;
    }

    checkIfMaterials() {

    }

    extractMaterials() {

    }

    forkComponents(componentsAndMaterials) {
        let componentsMaterials = componentsAndMaterials.split(/ [(]/);
        if (componentsMaterials.length == 1) componentsMaterials.push(null);
        else componentsMaterials[1] = componentsMaterials[1].replace(")", "");
        return componentsMaterials;
    }

    acronymMeanings(acronymArray) {
        let result = []
        let ref = {"V": "Verbal","S": "Somático","M": "Material"};
        for(let key of array)
        for(let key in ref) result = acronymArray.replace(key, ref[key]);
        return result;
    }

    extracStatsOfSpell(text) {
        let result = spellText.split("@");
    
        for (let i = 2; i < 6; i++) result[i] = result[i].split(": ")[1];
        
        result[0] = extractName(result[0]);
        
        result.splice(1,1,...result[1].split(", "));
        
        result.splice(2,1,...checkIfRitual(result[2]));
        
        result[1] = result[1].split(" ");
        result[1] = result[1][result[1].length - 1];
    
        result.splice(6,1,...forkComponents(result[6]));
    
        result[6] = acronymMeanings(result[6])

    }

    textToStats(text) {
      let stats = [];
      let textSplit = text.split("@");
      stats[0] = this.extractName(textSplit[0]);
      let LSR = textSplit[1];
      let [L, SR] = LSR.split(", ")
      stats[1] = this.extractLevel(L);
      stats[2] = this.extractSchool();
      console.log(stats);
    }
    
    gerateSpell(Stats) {
        Stats.push(null);
        Stats.push(null);
        return new Spell(...Stats);
    }
}

const spellMaker = new SpellMaker();
spellMaker.textToStats("Volar [Fly]@Nivel 3, transmutación@Tiempo de lanzamiento: 1 acción@Alcance: Toque@Componentes: V, S, M (la pluma del ala de cualquier ave)@Duración: Concentración, hasta 10 minutos@Tocas a una criatura voluntaria. El objetivo gana una velocidad de vuelo de 60 pies (12 ca-sillas, 18 m) durante la duración del conjuro.@Cuando el conjuro finaliza, si el objetivo aún está en el aire, cae a menos que pueda detenerla caída. A niveles superiores. Cuando lanzas este hechizo usando un espacio de conjuros de ni-vel 4 o superior, puedes elegir una criatura adicional como objetivo por cada nivel de espacio de conjuros por encima de nivel 3.")
