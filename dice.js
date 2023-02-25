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