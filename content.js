console.log("Chrome Extension Ready");

var text = document.getElementsByTagName("p");

// loop through all the text to find times
for (elt of text) {
    elt.style['background-color'] = "red";
}
