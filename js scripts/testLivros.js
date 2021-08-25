    
function testeLivros(){  
    var elementoPreco = document.evaluate("/html/body/div[1]/div[2]/div[4]/div[1]/div[5]/div[15]/div[2]/div[2]/ul/li[3]/span/span[1]/span/a", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    var textoElemento = elementoPreco.innerText;

    var precoLivro = textoElemento.match(/\d*\.\d{2}/g);

    if(precoLivro){
        return precoLivro[0];
    }else{
        return false;
    };
};