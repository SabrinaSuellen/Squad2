function getElementByXpath(path) {
    primeiroLivro = document.evaluate("/html/body/div[1]/div[2]/div[1]/div[1]/div/span[3]/div[2]/div[2]/div/span/div/div/div[2]/div[2]/div/div/div[1]/h2/a/span", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    primeiroLivro.click();
  }