function loadMenuPage(){
    const pMenu = document.createElement("p");
    pMenu.textContent = "Welcome to the menu page!";
    const divPageContent = document.querySelector("div#page-content");
    divPageContent.appendChild(pMenu);
}

export default loadMenuPage;