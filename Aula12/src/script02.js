// Objetos

// Construtores de Objetos

// const pessoa = {
//   nome: "Evellyn",
//   sobrenome: "Fidelis",
//   idade: 20,
//   altura: 1.60,
// };

function Pessoa(nome, sobrenome, idade, altura) {
  this.nomePessoa = nome;
  this.sobrenomePessoa = sobrenome;
  this.idadePessoa = idade;
  this.alturaPessoa = altura;
}

const minhaPessoa = new Pessoa("Evellyn", "Fidelis", 20, 1.60);

const meuIrmao = new Pessoa("Kevyn", "Fidelis", 20, 1.70);

console.log(minhaPessoa);
console.log(meuIrmao);

meuIrmao.carro = "Fusca";
minhaPessoa.moto = "Mercedes";

console.log(Pessoa);