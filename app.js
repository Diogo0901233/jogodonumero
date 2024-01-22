let titulo =document.querySelector('h1')
let tabela=[]
titulo.innerHTML="Bem vindo ao jogo"
adicionar("h2","escolha um numero de 1 a 10")
let numerosecreto=numero()

let tentativa=1

function adicionar(tag, texto){
    let tex=document.querySelector(tag)
    tex.innerHTML=texto
    responsiveVoice.speak(texto,"Brazilian Portuguese Female",{rate:1.2})//o primeiro é um texto, o segundo é o idioma o terceiro é a velociadade
    
}


function numero(){
    let numeroescolhido= parseInt(Math.random()*10+1)
    if(tabela.includes(numeroescolhido)){
        return numero()
    }
    else{
        tabela.push(numeroescolhido)
        console.log(tabela)
        return numeroescolhido;
    }
}

function verificarChute(){
    let chute=document.querySelector('input').value;
    if(chute==numerosecreto){
        let palavratentativa=tentativa>1?"tentativas":"tentativa";
        adicionar("h2",`voce acertou ${numerosecreto} com ${tentativa}${palavratentativa}`)
        document.getElementById("reiniciar").removeAttribute
        ("disabled")
    }
    else{
        if(chute>numerosecreto){
            adicionar("h2",`o numero é menor que ${chute}`)
        }
        else{
        adicionar("h2",`o numero é maior que ${chute}`)
        }
        tentativa++
        limpar()
    }
    
}


function limpar(){
    chute=document.querySelector("input")
    chute.value=""
}



function reiniciarjogo(){
    numerosecreto=numero()
    limpar()
    tentativa=1
    adicionar("h2","escolha um numero de 1 a 10")
    document.getElementById("reiniciar").setAttribute("disabled",true)
}



















































































// function tresnumero(numero1,numero2){
//     numero1=parseInt(prompt("digite o valor 1"))
//     numero2=parseInt(prompt("digite o valor 2"))
//     let resultado =document.querySelector('h2')

//     if(numero1>numero2){
//     resultado.innerHTML=`o primeiro valor${numero1}é maior que o segundo valor${numero2}`
//     }
//     else
//     resultado.innerHTML=`o valor numero2${numero2}é maior que o valor numero1${numero1}`
//     return resultado.innerHTML
    

// }





  // let titulo2=adicionar("p","O resultado da soma é"+soma())
    // let titulo3=adicionar("h2","o teste funcionou")
    


// function notas(numero,numero2,numero3,numero4){
//     numero=7
//     numero2=6
//     numero3=3
//     numero4=5
//     return   (numero+numero2+numero3+numero4)/4
    

// }

// function verificar(){
//     if(notas()>5){
//         console.log("Aprovado")
//     }
//     else{
//         console.log("reprovado")
//     }

// }
// notas()
// verificar()