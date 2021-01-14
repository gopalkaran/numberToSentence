const ipElement =document.querySelector("textarea[name='input']");
const btnElement =document.querySelector("button");
const opElement =document.querySelector("#op");
const url = "https://api.funtranslations.com/translate/numbers.json";
btnElement.addEventListener('click', clickHandler);

function clickHandler(){
    fetch(urlConstructor(url)).then(response => response.json()).then(json => opElement.innerText = json.contents.translated);
}

function urlConstructor(url){
    return url + "?text=" + ipElement.value;
}