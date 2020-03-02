function variosArgumentos(varios) {
    const strings = Array.prototype.slice.call(arguments, 1);
    return strings.join(varios);
}

console.log(variosArgumentos('','carro','oi','casa','janela','2'))

