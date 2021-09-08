function pegaPrecoFreteUK(){
    var elementoFrete = document.evaluate("/html/body/div[2]/div[2]/div[5]/div[1]/div[3]/div[2]/div/div/div/form/div/div/div/div/div[2]/div/div[8]/div[1]/div/div/div[1]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    var freteTexto = elementoFrete.innerText;

    var valor = freteTexto.match(/\d*\.\d{2}/g);

    return valor[0];
};