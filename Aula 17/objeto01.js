// Objetos em JS
// Com objetos conseguimos adicionar além de variaveis funções dentro do nosso código

let amigo = {nome: 'José',
sexo: 'M',
peso: 85.4,
engordar(p=0){
    console.log('Engorgou!')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)