const userName = "test"; //Hardcoded values
const password = "1234"; //Hardcoded values
const userKey = "acmeUser"; //Hardcoded values
const PassKey = "acmePass"; //Hardcoded values
var body = document.getElementById('onloadCheckLocalstorage');
const wrapper = document.getElementById('wrapper');
const header = document.getElementById('header');

// checks if values are still stored in localstorage, if yes the user is passed onto homepage
document.getElementById("body").onload = function () {
    if (true) {
        if (localStorage.getItem(userKey) !== null && localStorage.getItem(PassKey) !== null) {
            removeChildElements(wrapper);
            drawHome();
            return false
        } else {
            removeChildElements(wrapper);
            createIndex();
            return false;
        }
    }
}

// Eventlistener that checks if enter is pressed and call the login function
document.body.addEventListener('keyup', function (e) {
    var btnLogin = document.getElementById('btnLogin');
    if (e.keyCode == 13) {
        login();
    }
});

// Validates userinput with hardcoded username/password and redirects to home
function login() {
    var userInput = document.getElementById('inputUserName').value;
    var passInput = document.getElementById('inputPassword').value;
    var SaveToLocalstorage = document.getElementById('rememberMe');

    if (userName === userInput && password === passInput) {
        removeChildElements(wrapper);
        drawHome();

        if (SaveToLocalstorage.checked == true) {
            insertToLocalstorage(userInput, passInput);
        }
    } else {
        removeChildElements(wrapper);
        drawNotValidated();
    }
}

// removes all the childnodes in the wrapper div, and draw new elements for homepage
function drawHome() {
    var a = document.createElement('a');
    a.setAttribute('href', 'javascript:logout()');
    a.textContent = "Logga ut";
    header.append(a);

    var h2 = document.createElement('h2');
    var h3 = document.createElement('h3');
    h2.textContent = "Välkommen";
    h3.textContent = "Kolla in ett klipp av vår media produktion!!"
    wrapper.appendChild(h2);
    wrapper.appendChild(h3);

    var iframe = document.createElement('iframe')
    iframe.width = "560";
    iframe.height = "315";
    iframe.src = "https://www.youtube.com/embed/Jd_41tM6H2Y";
    iframe.frameBorder = "0"
    wrapper.appendChild(iframe);
}

//Draws the not validated screen
function drawNotValidated() {
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
    localStorage.removeItem(userKey);
    localStorage.removeItem(PassKey);
    removeChildElements(header);
    removeChildElements(wrapper);
    header.innerText = "Acme Inc.";
    createIndex();
}

// redirects to index page
function tryAgain() {
    removeChildElements(wrapper);
    createIndex();
}

// Removes all the childnodes of a parent element
function removeChildElements(parent) {
    while (parent.hasChildNodes()) {
        parent.removeChild(parent.lastChild);
    }
}

// Creates the index/loginpage
function createIndex() {
    wrapper.insertAdjacentHTML('beforeend', '<h2 class="para">Logga in</h2><div><input type="text" id="inputUserName" placeholder="Användarnamn">');
    wrapper.insertAdjacentHTML('beforeend', '<div><input type="text" id="inputPassword" placeholder="Lösenord"></div>');
    wrapper.insertAdjacentHTML('beforeend', '<div><button id = "btnLogin" onclick="login()">Logga in...</button></div>');
    wrapper.insertAdjacentHTML('beforeend', '<div id="containerRem"><input id="rememberMe" type="checkbox" name="cbRememberMe" id="cbRememberMe"><label for="cbRememberMe">Kom ihag mig!</label></div>');
}