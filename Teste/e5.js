const dicionario = { 4: 'a', 3: 'e', 1: 'i', 5: 's' }
const frase = 'T35t3 d3 35t4g1o'

console.log(frase.replace(/3/g, dicionario[3])
    .replace(/5/g, dicionario[5])
    .replace(/4/g, dicionario[4])
    .replace(/1/g, dicionario[1]))