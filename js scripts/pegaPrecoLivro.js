function pegaPrecoLivro(element, tipoLivro){

    for(var i = 1; i<5; i++){
        elementoOpcao = document.evaluate("/html/body/div[1]/div[2]/div[4]/div[1]/div[5]/div[15]/div[2]/div[2]/ul/li["+i+"]/span/span[1]/span/a/span[1]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        textoOpcao = elementoOpcao.innerText;
        if(textoOpcao == tipoLivro){

            var elementoPreco = document.evaluate("/html/body/div[1]/div[2]/div[4]/div[1]/div[5]/div[15]/div[2]/div[2]/ul/li["+i+"]/span/span[1]/span/a", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            var textoElemento = elementoPreco.innerText;

            var precoLivro = textoElemento.match(/\d*\.\d{2}/g);

            if(precoLivro){
                return precoLivro[0];
            }else{
                return false;
            };
        };
    };
};