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
    function nmprod(resultado) {
    var nmprod = document.getElementById("nmprod");
    nmprod.textContent = resultado;
}
    function prprod(resultado) {
    var prprod = document.getElementById("prprod");
    prprod.textContent = resultado;
}
    function maprod(resultado) {
    var maprod = document.getElementById("maprod");
    maprod.textContent = resultado;
}
    function exibecar(resultado) {
    var exibecar = document.getElementById("exibecar");
    exibecar.textContent = resultado;
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

       function atualizarMarcas() {
        const produtoSelecionado = document.getElementById("prod_nome").value;
        const marcasSelect = document.getElementById("prod_marca");

        // Limpa as opções anteriores
        marcasSelect.innerHTML = "";

        if (produtoSelecionado === "Tênis") {
            // Opções de marcas de tênis
            const marcas = ["Nike", "Adidas", "Reebok", "Asics", "Olympikus", "Diavolo", "Fila"];
            adicionarOpcoesMarcas(marcas, marcasSelect);
        } else if (produtoSelecionado === "Arroz") {
            // Opções de marcas de arroz
            const marcas = ["Camil", "Tio João", "Prato Fino"];
            adicionarOpcoesMarcas(marcas, marcasSelect);
        } else if (produtoSelecionado === "Feijão") {
            // Opções de marcas de feijão
            const marcas = ["Camil", "Kicaldo", "Caldo Bom"];
            adicionarOpcoesMarcas(marcas, marcasSelect);
        }
    }

    // Função para adicionar opções de marca a um select
    function adicionarOpcoesMarcas(marcas, select) {
        marcas.forEach(marca => {
            const option = document.createElement("option");
            option.value = marca;
            option.textContent = marca;
            select.appendChild(option);
        });
    }

    function cadastrar() {
        const produto = {
            nome: document.getElementById("prod_nome").value,
            marca: document.getElementById("prod_marca").value,
            preco: document.getElementById("prod_preco").value
        }
    
        const lista_item = document.createElement("li")
        const prod_nome = document.createElement("h3")
        const prod_preco = document.createElement("h4")
        const prod_marca = document.createElement("p")
    
        prod_nome.innerHTML = produto.nome;
        prod_marca.innerHTML = "Marca do produto: " + produto.marca
        prod_preco.innerHTML = "Preço do produto: R$" + produto.preco
    
        lista_item.appendChild(prod_nome)
        lista_item.appendChild(prod_marca)
        lista_item.appendChild(prod_preco)
    
        document.getElementById("lista_prod").appendChild(lista_item);
    
        
        document.getElementById("prod_nome").value = ""
        document.getElementById("prod_marca").value = ""
        document.getElementById("prod_preco").value = ""
    }

    function Nome(param1, param2){
        //Código
        return
    }

    (param1, param2) => {
        //Código
        return
    }
    
    () => {   }
    
    
    //Função Map
    //Array = [    ]
    //Objeto Produto = { foto, modelo, preço, qtd em estoque, nome, código }
       
    const numeros = [ 5, 48, 65, 33, 12, 79, 8, 44 ]
    const novoNumeros  = []  
    numeros.map( (num) => { 
        novoNumeros.push(num * 2)

    } )

    console.log("Arrow function array01: " + numeros)
    console.log("Arrow function array01: " + novoNumeros)
    
    const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
    const result = []
    numbers.map( (par) => { 
        if ( par % 2 === 0 ){
            result.push(par)
        }
    } )

    console.log("Arrow function exercício pares: " + numbers)
    console.log("Arrow function exercício pares: " + result)


      

       
     
    // Pesquisar filtros       
    // Para cada elemento do array executa a função dentro do .map
    // usando getelementbyid ele retorna uma string!!!
    // let n1[] = [3, 4, 5, 6, 2, 1] tudo que está dentro de um array é um conjunto de elementos do mesmo tipo.
    // push(n) adiciona n a uma "pilha".
    // pop() tira o ultimo numero da pilha.
    // splice() remove um determinado numero da pilha.