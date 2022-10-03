var enterText= document.querySelector("#text-area")
var translateBtn= document.querySelector("#btn")
var resultText= document.querySelector("#result-text")

var serverUrl = "https://api.funtranslations.com/translate/chef.json";


function translatedUrl(text) {
    return serverUrl + "?" + "text=" + text;
}

function userOutput(){
    var userText = enterText.value;

    fetch (translatedUrl(userText))
    .then(response => response.json())
    .then(json=> {
        var newTranslationText = json.contents.translated;
        resultText.innerText = newTranslationText;
    })
}




translateBtn.addEventListener("click", userOutput)


// function translatedURL(text) {
//     return serverUrl + "?" + "text=" + text;
// }

// function userOutput() {
//     var userText = inputText.value;

//     fetch(translatedURL(userText))
//     .then(response => response.json())
//     .then(json => {
//         var newTextTranslation = json.contents.translated;
//         outputText.innerText = newTextTranslation;
//     }
//     )
// };

// inputButton.addEventListener("click", userOutput)