//const carro = {
//    modelo: "Skyline GTR 34",
//    anoDeFabricacao: 1999,
//    cor: "Baysideblue",
//    novo: false
//}

//const modeloCarro = "modelo"
//console.log("modelo: " + carro[modeloCarro])
//console.log("Fabricado em: " + carro.anoDeFabricacao)
//console.log("De cor: " + carro.cor)

class carro {
    constructor(marca, modelo, ano, cor) {
        this.marca = marca.toUpperCase();
        this.modelo = modelo.toLowCase();
        this.ano = Number(ano);
        this.cor = cor.toString();
    }
}

const carro1 = new carro("Toyota", "Supra", 1995, "vermelho")
const carro2 = new carro("Nissan", "Skyline", 1999, "Baysideblue")

console.log("modelo: " + carro1.modelo)
console.log("Fabricado em: " + carro1.ano)
console.log("De cor: " + carro1.cor)

console.log("modelo: " + carro2.modelo)
console.log("Fabricado em: " + carro2.ano)
console.log("De cor: " + carro2.cor)