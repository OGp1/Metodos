const notas = [8, 7, 9, 6, 10];
const media = notas.reduce((total, nota) => total + nota, 0) / notas.length;
console.log(media);
