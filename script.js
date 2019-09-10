const userName = "test"; //Hardcoded values
const password = "1234"; //Hardcoded values
const userKey = "acmeUser"; //Hardcoded values
const PassKey = "acmePass"; //Hardcoded values
var body = document.getElementById('onloadCheckLocalstorage');
const wrapper = document.getElementById('wrapper');
const header = document.getElementById('header');

// checks if values are still stored in localstorage, if yes the user is passed onto homepage
document.getElementById("onloadCheckLocalstorage").onload = function () {

    if (true) {
        if (localStorage.getItem(userKey) !== null && localStorage.getItem(PassKey) !== null) {
            removeChildElements(wrapper);
            drawHome();
            return false
        } else {
            removeChildElements(wrapper);
            removeChildElements(header);
            createIndex();
            return false;
        }
    }
}

// Validates userinput with hardcoded username/password and redirects
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

// removes al the childnodes in the wrapper div, and draw new elements for homepage
function drawHome() {
    var h1 = document.createElement('h1');
    var h3 = document.createElement('h3');
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    var a = document.createElement('a');
    // var youtub = 
    // https://youtu.be/Jd_41tM6H2Y
    a.setAttribute('href', 'javascript:logout()');
    a.textContent = "Logga ut";
    h1.textContent = "Välkommen";
    h3.textContent = "Kolla in ett klipp av vår media produktion!!"
    li.appendChild(a);
    ul.appendChild(li);
    header.appendChild(ul)
    wrapper.appendChild(h1);
    wrapper.appendChild(h3);
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
    removeChildElements(wrapper)
    createIndex();

}

// redirects to index page
function tryAgain() {
    removeChildElements(wrapper);
    removeChildElements(header);
    createIndex();
}

function removeChildElements(parent) {
    while (parent.hasChildNodes()) {
        parent.removeChild(parent.lastChild);
    }
}
function createIndex() {
    header.insertAdjacentHTML('afterbegin', '<h1>Acme Inc.</h1>');
    wrapper.insertAdjacentHTML('beforeend', '<h2 class="para">Logga in</h2><div><input type="text" id="inputUserName" placeholder="Användarnamn">');
    wrapper.insertAdjacentHTML('beforeend', '<div><input type="text" id="inputPassword" placeholder="Lösenord"></div>');
    wrapper.insertAdjacentHTML('beforeend', '<div><button onclick="login()">Logga in...</button></div>');
    wrapper.insertAdjacentHTML('beforeend', '<div id="containerRem"><input id="rememberMe" type="checkbox" name="cbRememberMe" id="cbRememberMe"><label for="cbRememberMe">Kom ihag mig!</label></div>');
}