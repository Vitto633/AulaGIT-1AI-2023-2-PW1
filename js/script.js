// function <<nome da função>> (){
//    conteúdo da função
//  }



function login(){
    // Criar uma função que pegue o valor de email e senha e cheque se é igual a login 123456.
    // Se for, exiba a mensagem de login realizado com sucesso.
    // Manipular o DOM
    // Document Object Model
    // O DOM é basicamente um jeito que o JS manipula a pagina HTML
    
    var email = document.getElementById("frmemail").value
    var password = document.getElementById("frmpassword").value
    console.log(email)
    console.log(password)
    if(email == "login" && password == "123456"){
        alert("Login realizado com sucesso!")
    } 
    else{
        alert("Login incorreto!")
    
    }
}
    function updateResultado_exi(resultado) {
        var resultado_exi = document.getElementById("resultado_exi");
        resultado_exi.value = resultado;
}
    function updateResultado_exi2(resultado) {
        var resultado_exi2 = document.getElementById("resultado_exi2");
        resultado_exi2.textContent = resultado;
}

    function somar() {
        var n1 = parseInt(prompt("Digite o primeiro número"));
        var n2 = parseInt(prompt("Digite o segundo número"));
        var resultado = n1 + n2;
        updateResultado_exi(resultado);
}

    function subtrair(){
        var  n1 = parseInt(prompt("Digite o primeiro número"))
        var n2 = parseInt(prompt("Digite o segundo número"))
        //console.log(typeof(n1)) essa função devolve o tipo de variavel 
        //console.log(typeof(n2))
        //console.log(typeof(n1))
        var  resultado = n1 - n2
        updateResultado_exi(resultado);
       }

       function dividir(){
        var  n1 = parseInt(prompt("Digite o primeiro número"))
        var n2 = parseInt(prompt("Digite o segundo número"))
        //console.log(typeof(n1)) essa função devolve o tipo de variavel 
        //console.log(typeof(n2))
        //console.log(typeof(n1))
        if (n2 == 0){
            
            updateResultado_exi("Não foi possível dividir o primeiro número por zero.")
        }
        if (n2 != 0){
        var  resultado = n1 / n2
        updateResultado_exi(resultado);
       }
    }

       function multiplicar(){
        var  n1 = parseInt(prompt("Digite o primeiro número"))
        var n2 = parseInt(prompt("Digite o segundo número"))
        //console.log(typeof(n1)) essa função devolve o tipo de variavel 
        //console.log(typeof(n2))
        //console.log(typeof(n1))
        var  resultado = n1 * n2
        updateResultado_exi(resultado);
       }

       function quadrado(){
        var  n1 = parseInt(prompt("Digite um número"))
        
        //console.log(typeof(n1)) essa função devolve o tipo de variavel 
        //console.log(typeof(n2))
        //console.log(typeof(n1))
        var  resultado = n1*n1
        updateResultado_exi(resultado);
       }

       function cubo(){
        var  n1 = parseInt(prompt("Digite um número"))
        
        //console.log(typeof(n1)) essa função devolve o tipo de variavel 
        //console.log(typeof(n2))
        //console.log(typeof(n1))
        var  resultado = n1*n1*n1
        updateResultado_exi(resultado);
       }

       function quad(){
        var  n1 = parseInt(prompt("Digite um número"))
        
        //console.log(typeof(n1)) essa função devolve o tipo de variavel 
        //console.log(typeof(n2))
        //console.log(typeof(n1))
        var  resultado = n1*n1*n1*n1
        updateResultado_exi(resultado);
       }

       function quin(){
        var  n1 = parseInt(prompt("Digite um número"))
        
        //console.log(typeof(n1)) essa função devolve o tipo de variavel 
        //console.log(typeof(n2))
        //console.log(typeof(n1))
        var  resultado = n1*n1*n1*n1*n1
        updateResultado_exi(resultado);
       }

       function raiz(){
        var  n1 = parseInt(prompt("Digite um número"))
        
        //console.log(typeof(n1)) essa função devolve o tipo de variavel 
        //console.log(typeof(n2))
        //console.log(typeof(n1))
        var  resultado = Math.sqrt(n1);
        updateResultado_exi(resultado);
       }

       function media(){
        var  n1 = parseInt(prompt("Digite um número"))
        var  n2 = parseInt(prompt("Digite um número"))
        var  n3 = parseInt(prompt("Digite um número"))
        //console.log(typeof(n1)) essa função devolve o tipo de variavel 
        //console.log(typeof(n2))
        //console.log(typeof(n1))
        var  resultado = (n1+n2+n3)/3
        updateResultado_exi(resultado);
       }
       function pot(){
        var  n1 = parseInt(prompt("Digite a base"))
        var  n2 = parseInt(prompt("Digite o expoente"))
        var  resultado = Math.pow(n1, n2)
        updateResultado_exi(resultado);
          
    }
       function nome(){
        const nome = document.getElementById("frmNome").value
        updateResultado_exi2("Nome: " + nome);
        


       }

       function porc(){
        var  n1 = parseInt(prompt("Digite o número da porcentagem"))
        var  n2 = parseInt(prompt("Digite um número"))
        
        
        //console.log(typeof(n1)) essa função devolve o tipo de variavel 
        //console.log(typeof(n2))
        //console.log(typeof(n1))
        var  resultado = (n1*n2)/100
        updateResultado_exi(resultado);
       }

       function listar(){
        let prod = document.getElementById("frmProduto").value
        let li = document.createElement("li")
        li.textContent = prod
        let listaProd = document.getElementById("listaProd")
        listaProd.appendChild(li)
        
        
        

       }

       function array_exemplo(){
        let n = [3, 4, 5, 6, 2, 1]
        console.log("Esse console log mostra o array completo " + n)
        console.log("Esse console log mostra o valor no índice 0 do array " + n[0])
        console.log("Esse console log mostra o valor no índice 6 do array " + n[6])
        n[6] = "7"
        console.log("Esse console log mostra o valor no índice 6 do array " + n[6])
        console.log("Esse console log mostra o array completo ")
        console.log(n)
        n.push(50)
        n.push(32)
        n.push(33)
        console.log("Esse console log mostra o array completo ")
        console.log(n)
        n.pop()
        console.log("Esse console log mostra o array completo ")
        console.log(n)
        
       }

       function objeto(){
        //Produtos
        let carrinho_de_compras = []
        // let nome = "Arroz"
        // let preco = 9.99
        // let marca = "Tio João"

        let produto = {
            nome_prod: "Arroz",
            preco_prod: 9.99,
            marca_prod: "Tio João"
        }
        carrinho_de_compras.push(produto);
        
        let produto2 = {
            nome_prod: "Feijão",
            preco_prod: 7.35,
            marca_prod: "Namorado"
        }
        carrinho_de_compras.push(produto2);

        console.log(carrinho_de_compras)
        console.log(carrinho_de_compras[0].nome_prod)
       }



      

       

       

    // usando getelementbyid ele retorna uma string!!!
    // let n1[] = [3, 4, 5, 6, 2, 1] tudo que está dentro de um array é um conjunto de elementos do mesmo tipo.
    // push(n) adiciona n a uma "pilha".
    // pop() tira o ultimo numero da pilha.
    // splice() remove um determinado numero da pilha.
