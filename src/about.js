function loadAboutPage(){
    const pAbout = document.createElement("p");
    pAbout.textContent = "Welcome to the about page!";
    const divPageContent = document.querySelector("div#page-content");
    divPageContent.appendChild(pAbout);
}

export default loadAboutPage;