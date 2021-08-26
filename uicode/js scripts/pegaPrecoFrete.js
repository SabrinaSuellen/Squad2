function pegaPrecoFrete(){
    var elementoFrete = document.evaluate("/html/body/div[1]/div[3]/div[4]/div[1]/div[3]/div[3]/div/div/div/div/div/form/div/div/div/div/div[2]/span[1]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    var freteTexto = elementoFrete.innerText;

    var valor = freteTexto.match(/\d*\.\d{2}/g);

    return valor[0];
};

