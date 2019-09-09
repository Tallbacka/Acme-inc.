const userName = "test"; //Hardcoded values
const password = "1234"; //Hardcoded values
const userKey = "acmeUser"; //Hardcoded values
const PassKey = "acmePass"; //Hardcoded values
const wrapper = document.getElementById('wrapper');



// checks if values are still stored in localstorage, if yes the user is passed onto homepage
document.getElementById("onloadCheckLocalstorage").onload = function () {
        if (localStorage.getItem(userKey).length !==null && localStorage.getItem(PassKey).length !==null) {
                drawHome();
        } else {
                window.location.href = '/index.html';
        }
}
            
    // Validates userinput with hardcoded username/password and redirects
    function login(){
        var userInput = document.getElementById('inputUserName').value;
        var passInput = document.getElementById('inputPassword').value;
        
        if (userName === userInput && password === passInput) {
            drawHome();
            insertToLocalstorage(userInput, passInput);            
        } else {
            drawNotValidated();
        }
        
    }
            
            // removes al the childnodes in the wrapper div, and draw new elements for homepage
    function drawHome () {
        removeChildElements();
        var h1 = document.createElement('h1');
        var ul = document.createElement('ul');
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.setAttribute('href', 'javascript:logout()');
        a.textContent = "Logga ut";
        h1.textContent = "Välkommen";
        li.appendChild(a);
        ul.appendChild(li);
        document.getElementById('header').appendChild(ul);
        wrapper.appendChild(h1);    
    }
    
    //Draws the not validated screen
    function drawNotValidated() {
        removeChildElements();
        var h1 = document.createElement('h1');
        h1.textContent = "Fel vid inloggning";
        h1.setAttribute('class', 'note');
        var button = document.createElement('button')
        button.textContent = "Prova igen"
        button.setAttribute('id', 'btnTryAgain');
        button.setAttribute('onclick', 'tryAgain()');
        wrapper.appendChild(h1);    
        wrapper.appendChild(button);    
    }
    
    // Saves data to localstorage
    function insertToLocalstorage(userInput, passInput) {
        localStorage.setItem(userKey, userInput)
        localStorage.setItem(PassKey, passInput)
    }
    
    // redirects to index, and clears localstorage
    function logout() {  
        localStorage.removeItem(userKey)
        localStorage.removeItem(PassKey)
        window.location.href = '/index.html';
        
    }
    
    // redirects to index page
    function tryAgain() {
        window.location.href = '/index.html';
    }
    
    function removeChildElements() {
        while (wrapper.hasChildNodes()) {
            wrapper.removeChild(wrapper.lastChild);
        }
    }