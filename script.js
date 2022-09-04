

var price = []
var id = []
var product = []
var rating = []
var cart = []
var quantidade = []

var index = 0
var choice = true
var choice2 
var choice3
var choice4 = 0
var base = 0


while(choice){

    dados()
    
    function dados(){
        var choice = prompt("1 // Cadastrar Produto /// 2 Buscar Produto // 3 Exibir Produtos // 4 Atualizar Produto // 5 Deletar produto // 6 Acessar o Carrinho // 7 Finalizar Programa")

        if(choice == "1"){
               cadastro()
        }

        if(choice == 2){
            choice2 = prompt("Você deseja procurar o produto pelo ID ou pelo nome ?")

            if(choice2 == "ID" || choice2 == "id"){
                searchID()
            }

            else{
                searchName()
            }
        }

        if(choice == "3"){
            choice3 = prompt("Você deseja exibir os produto pelo ID, Preço ou Avaliação ?")

            if(choice3 == "ID" || choice3 == "id"){
                exposeByID()
            }

            if(choice3 == "Preço"){
                exposeByPrice()
            }

            else if(choice3 == "Avaliação"){
                exposeByRating()
            }
        }

        if(choice == "4"){
            update()
         }

         if(choice == "5"){
            erase()
         }

         if(choice == "6"){
            choice4 = prompt("1 // Adicionar ao Carrinho // 2 Remover Do Carrinho // 3 Ver O Valor Total Do Carrinho // 4 Acessar o Carrinho // Enter para sair do Carrinho")

            if(choice4 == "1"){
                addCart()
            }

            if(choice4 == "2"){
                removeCart()
            }

            if(choice4 == "3"){
                showTotalValue()
            }

            if(choice4 == "4"){
                cartList(base)
            }
         }

         if(choice == "7"){
            finish()
         }
    }
}


function cadastro(){
    id[index] = prompt("Cadastre o ID do produto")
    product[index] = prompt("Cadastre o nome do produto")
    price[index] = parseInt((prompt("Cadastre o preço do produto")))
    rating[index] = parseInt(prompt("Cadastre a avaliação do produto"))
    index++
}


function searchID(){
    var comparador = 0

    var id1 = prompt("Qual o ID do produto ?")

    for(var contador2 = 0; contador2 < id.length; contador2++){
        
        if(id1 == id[comparador]){
            alert(`ID: ${id[comparador]} ${product[comparador]} $${price[comparador]} Avaliação: ${rating[comparador]}`)
        }

        if(id1 != id[comparador]){
            comparador++
        }
    }

}


function searchName(){
    var comparador2 = 0

    var productName = prompt("Qual o nome do produto ?")

    for(var contador2 = 0; contador2 < product.length; contador2++){
        
        if(productName == product[comparador2]){
            alert(`ID: ${id[comparador2]}`)
        }

        if(productName != product[comparador2]){
            comparador2++
        }
    }
}


function exposeByID(){
    var MaiorID = 0

    for(var contador3 = 0; contador3 < id.length; contador3++){
        for(var contador4 = 0; contador4 < id.length - 1; contador4++){
    
            if(id[contador4] > id[contador4 + 1]){
               MaiorID = id[contador4]
               id[contador4] = id[contador4 + 1]
               id[contador4 + 1] = MaiorID
            }
        }
    }
    alert(`ID: {${id}}   Produto: {${product}}`)
}


function exposeByPrice(){

   var MaiorValor = Math.round(0)
   var Produto

    for(var contador5 = 0; contador5 < price.length; contador5++){
        for(var contador6 = 0; contador6 < price.length - 1; contador6++){
    
            if(price[contador6] < price[contador6 + 1]){
               MaiorValor = price[contador6 + 1]
               price[contador6 + 1] = price[contador6]
               price[contador6] = MaiorValor

               Produto = product[contador6 + 1]
               product[contador6 + 1] = product[contador6]
               product[contador6] = Produto
            }
        }
    }
    alert(`Preço: {${price}}   Produto: {${product}}`)
}


function exposeByRating(){

    var MaiorRating = parseInt(0)
    var RatingBase

    for(var contador7 = 0; contador7 < rating.length; contador7++){
        for(var contador8 = 0; contador8 < rating.length - 1; contador8++){
    
            if(rating[contador8] < rating[contador8 + 1]){
              MaiorRating = rating[contador8 + 1]
               rating[contador8 + 1] = rating[contador8]
               rating[contador8] = MaiorRating

               RatingBase = product[contador8 + 1]
               product[contador8 + 1] = product[contador8]
               product[contador8] = RatingBase
            }
        }
    }
    alert(`Avaliação: {${rating}}   Produto: {${product}}`)
}


function update(){
    var comparador3 = 0
    var newPrice
    var auxProduct 

    var id2 = prompt("Qual o ID do produto ?")
    for(var index2 = 0; index2 < id.length; index2++){

        if(id2 == id[index2]){
            newPrice = prompt("Digite o valor alterado")
            price[index2] = newPrice
            if(price[index2] > price[index2 + 1]){
                auxProduct =  price[index2 + 1] 
                price[index2 + 1] = price[index2]
                price[index2] = auxProduct
            }
        }

        else{
            comparador3++
        }
    }
}

function addCart(){

    var choiceCart = true
    var amount

    var name = prompt("Qual nome do produto que você deseja adicionar ao Carrinho ?")
    while(choiceCart){
        if(name == cart[base]){
            amount = parseInt(prompt("Qual a quantidade de produto que você deseja adicionar ao Carrinho ?"))
            quantidade[base] = amount
            base++
            choiceCart = false
        }
        
        else{
            cart[base] = name
            amount = parseInt(prompt("Qual a quantidade de produto que você deseja adicionar ao Carrinho ?"))
            quantidade[base] = amount
            base++
            choiceCart = false
        }
    }
}

function removeCart(){
    var auxValue = 0
    var productName = prompt("Qual nome do produto que você deseja remover ?")
    for(var contadorcart2 = 0; contadorcart2 < cart.length; contadorcart2++){
        if(productName == cart[contadorcart2]){
            var productAmount = prompt("Qual a quantidade que você deseja remover do Carrinho ?")
            if(productAmount >= quantidade[contadorcart2]){
                quantidade[contadorcart2] = auxValue

                auxValue = quantidade[contadorcart2 + 1]

                cart.length--
                quantidade.length--
            }

            else{
                quantidade[contadorcart2] = quantidade[contadorcart2] - productAmount
            }
        }
    }
}

function totalValue(){

    var total = 0
    for(var totalcontador = 0; totalcontador < cart.length; totalcontador++){
        for(var totalcontador2 = 0; totalcontador2 < product.length; totalcontador2++){
            if(cart[totalcontador] == product[totalcontador2]){
                total = total + (price[totalcontador2] * quantidade[totalcontador]) 
            }
        }
    }
    return total
}

function showTotalValue(){
    alert(`Valor Total: ${totalValue()}`)
}

function cartList(){
    alert(`{${cart}}  Valor Total: $${totalValue()}`)
}

function erase(){
    var finder
    var base = 0
    var idComplementar = 0

    finder = prompt("Qual o ID do produto ?")
    for(var index3 = 0; index3 < id.length; index3++){
        if(finder == id[base]){
            id[base] = idComplementar
            
            idComplementar = id[base + 1]
            idComplementar = price[base + 1]
            idComplementar = rating[base + 1]
            idComplementar = product[base + 1]

            id.length--
            price.length--
            rating.length--
            product.length--
        }

        else{
            base++
        }
    }
}


function finish(){
    choice = false
}
