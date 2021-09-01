    
function regexPreco(element, valor){
    return valor.match(/\d*\.\d{2}/g)[0];
};