function loadHomePage(){
    const pWelcome = document.createElement("p");
    pWelcome.textContent = "Welcome to the home page!";
    const divPageContent = document.querySelector("div#page-content");
    divPageContent.appendChild(pWelcome);
}

export default loadHomePage;