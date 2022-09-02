

var price = []
var id = []
var product = []
var rating = []
var cart = []
var quantidade = 0

var index = 0
var choice = true
var choice2 
var choice3


while(choice){

    dados()
    
    function dados(){
        var choice = prompt("1 // Cadastrar Produto /// 2 Buscar Produto // 3 Exibir Produtos // 4 Atualizar Produto // 5 Deletar produto // 6 Finalizar Programa")

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

            addCart()
         }
    }

}


function cadastro(){
    id[index] = prompt("Cadastre o ID do produto")
    product[index] = prompt("Cadastre o nome do produto")
    price[index] = Math.round(prompt("Cadastre o preço do produto"))
    rating[index] = parseInt(prompt("Cadastre a avaliação do produto"))
    index++
}


function searchID(id1){
    var comparador = 0

    id1 = prompt("Qual o ID do produto ?")

    for(var contador2 = 0; contador2 < id.length; contador2++){
        
        if(id1 == id[comparador]){
            alert(`ID: ${id[comparador]} ${product[comparador]} $${price[comparador]} Avaliação: ${rating[comparador]}`)
        }

        if(id1 != id[comparador]){
            comparador++
        }
    }

}


function searchName(productName){
    var comparador2 = 0

    productName = prompt("Qual o nome do produto ?")

    for(var contador2 = 0; contador2 < product.length; contador2++){
        
        if(productName == product[comparador2]){
            alert(`ID: ${id[comparador2]}`)
        }

        if(productName != product[comparador2]){
            comparador2++
        }
    }
}


function exposeByID(MaiorID){
    MaiorID = 0

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


function exposeByPrice(MaiorValor, Produto){

   MaiorValor = Math.round(0)

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


function exposeByRating(MaiorRating, RatingBase){

    MaiorRating = parseInt(0)

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


function update(id2, newPrice){
    var comparador3 = 0

    id2 = prompt("Qual o ID do produto ?")
    for(var index2 = 0; index2 < id.length; index2++){

        if(id2 == id[index2]){
            newPrice = prompt("Digite o valor alterado")
            price[index2] = newPrice
        }

        else{
            comparador3++
        }
    }
}

function addCart(name, amount){
    name = prompt("Qual nome do produto que você deseja adicionar ao carrinho ?")
    for(var contadorcart = 0; contadorcart< cart.length; contadorcart++){
        if(name == cart[contadorcart]){
            amount++
        }
        
        else{
            cart[contadorcart] = name
            amount = prompt("Qual a quantidade de produto que você deseja adicionar ao carrinho ?")
            quantidade[contadorcart] = amount
        }
    }
}

function removeCart(){
    
}

function erase(finder){
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
