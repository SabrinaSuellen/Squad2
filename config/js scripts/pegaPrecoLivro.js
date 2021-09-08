function pegaPrecoLivro(element, tipoLivro){

    lista = document.getElementsByClassName("a-button-list")[0];
    arrayItens = lista.getElementsByTagName("li");

    for(var i = 0; i < arrayItens.length; i++){

        if(arrayItens[i].innerText.match(tipoLivro)){

            preco = arrayItens[i].innerText.match(/\d*\.\d{2}/g)[0];

            //Clica na opção certa para mostrar as opções de frete adequadas
            arrayItens[i].getElementsByTagName("span")[3].click()
            return preco;
        };
    };
};
