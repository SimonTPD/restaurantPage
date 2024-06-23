const BUTTON_ACTIVE_CLASS_NAME = "currently-active";

/******************************************************/
/*Content*/
/******************************************************/
import './style.css';
import loadHomePage from './home.js';
import loadMenuPage from './menu.js';
import loadAboutPage from './about.js';

/******************************************************/
/*Global portion*/
/******************************************************/
loadHomePage();

/******************************************************/
/*Nav buttons queries and event listeners*/
/******************************************************/
const [buttonHome, buttonMenu, buttonAbout] =
document.querySelectorAll("nav>button");

buttonHome.classList.add(BUTTON_ACTIVE_CLASS_NAME);

buttonHome.addEventListener("click", 
    (evt) => {
        clearButtonIcons();
        evt.target.classList.add(BUTTON_ACTIVE_CLASS_NAME);
        clearPage();
        loadHomePage();
    }
);

buttonMenu.addEventListener("click", 
    (evt) => {
        clearButtonIcons();
        evt.target.classList.add(BUTTON_ACTIVE_CLASS_NAME);
        clearPage();
        loadMenuPage();
    }
);

buttonAbout.addEventListener("click", 
    (evt) => {        
        clearButtonIcons();
        evt.target.classList.add(BUTTON_ACTIVE_CLASS_NAME);
        clearPage();
        loadAboutPage();
    }
);

/******************************************************/
/*Functions*/
/******************************************************/
function clearPage(){
    const divPageContent = document.querySelector("div#page-content");
    const divPageContentChildren = document.querySelectorAll("div#page-content > *");
    for (let child of divPageContentChildren){
        if (!child.classList.contains("background-cred")){
            divPageContent.removeChild(child);
        }
    }
}

function clearButtonIcons(){
    buttonHome.classList.remove(BUTTON_ACTIVE_CLASS_NAME);
    buttonMenu.classList.remove(BUTTON_ACTIVE_CLASS_NAME);
    buttonAbout.classList.remove(BUTTON_ACTIVE_CLASS_NAME);        
}

/******************************************************/
/*Test Button Function*/
/******************************************************/
function testButtonPrintToPopup(){
    const testButton = document.createElement("button");
    testButton.setAttribute("id", "test-button");
    testButton.innerHTML = "Hi, I'm Test Button";
    testButton.addEventListener("click", 
        () => {
            alert("Hi there, I'm the test button!");
        }
    );
    document.body.appendChild(testButton);  
}

/******************************************************/
/*Test Clear Page Button Function*/
/******************************************************/
function testClearPageButton(){
    const clearPageButton = document.createElement("button");
    clearPageButton.setAttribute("id", "clear-page");
    clearPageButton.innerHTML = "Clear Page";
    clearPageButton.addEventListener("click", 
        () => {
            clearPage();
        }
    );
    document.body.appendChild(clearPageButton);  
}