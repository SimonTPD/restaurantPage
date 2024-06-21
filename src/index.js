import './style.css';
import loadHomePage from './home.js';
import loadMenuPage from './menu.js';
import loadAboutPage from './about.js';

/******************************************************/
/*Nav buttons queries and event listeners*/
/******************************************************/
const [buttonHome, buttonMenu, buttonAbout] =
document.querySelectorAll("nav>button");

buttonHome.addEventListener("click", 
    () => {
        clearPage();
        loadHomePage();
    }
);

buttonMenu.addEventListener("click", 
    () => {
        clearPage();
        loadMenuPage();
    }
);

buttonAbout.addEventListener("click", 
    () => {
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
        divPageContent.removeChild(child);
    }
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