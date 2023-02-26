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

const COMPONENTS = {
    SOMATICO: "somatico",
    VERBAL: "verbal",
    MATERIAL: "material"
}

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

const TOQUE = "toque";
const PERSONAL = "personal";

class Spell {
    constructor(name, level, school, lauchTime, duration, scope, components , materials, description, classes, type, ritualizable) {
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

const spells = [
    new Spell(


    )
]