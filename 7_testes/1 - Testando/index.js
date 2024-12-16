function Verificar(){
    var nacionalidade = document.getElementById('nacionalidade');
    var resultado = document.getElementById('resultado');

    if(nacionalidade.value == 'Brasil'){
        resultado.innerHTML = "Você é Brasileiro";
    } else {
        resultado.innerHTML = "Você é Estrangeiro";
    }

    console.log(nacionalidade);
}

// var i = 0;

/*
while(i <= 10){
    console.log(i);
    i++
}


do{
    console.log(i);
    i++
} while(i <= 10)


for(var i = 0; i<=10; i++){
    console.log(i);
}


var arr = ["Matheus", "João", "Felipe", "Fagner"];

arr.forEach(function(value, index){
    console.log(index);
})


var objetos = {
    "Nome":"Matheus",
    "Idade": 19,
    "Profissão": "Desenvolvedor"
}

console.log(objetos);
*/

function Pessoa(){
    this.nome = "Matheus";
    this.idade = 19;
    this.profissao = "Desenvolvedor";

    this.andar = function(){
        console.log("Andou");
    }
        
    
}

var pessoa = new Pessoa;

console.log(pessoa.andar());
