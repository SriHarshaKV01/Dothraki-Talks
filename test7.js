var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document .querySelector("#user-input");
var outputText = document.querySelector("#user-output");

var serverURL = "https://api.funtranslations.com/translate/dothraki.json"

function getTranslationURL(text){
    return serverURL + "?" + "text="+ text
}

function errorHandler(errror){
    alert("Something wrong. Try again!")
}

function clickHandler(){
    // console.log("clicked!!");
    // console.log(txtInput);
    // console.log(txtInput.value);
    // outputText.innerText = txtInput.value;
    var inputText = txtInput.value; //input 

    //calling server for processing
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
    var translatedText =json.contents.translated;
    outputText.innerText = translatedText; //output
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click",clickHandler);
