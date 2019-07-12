console.log("Chrome Extension Ready");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log(message.txt);
    if (message.txt === "hello") {
        let text = document.getElementsByTagName('p');

        // loop through all the text to find times
        for (elt of text) {
            elt.style['background-color'] = 'red';
        }
    }
}