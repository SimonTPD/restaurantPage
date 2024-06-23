import picture1 from "./jordaneMathieuUnsplashBundtCake.jpg";
import picture2 from "./jessicaJohnstonUnsplashChocolateCoveredStrawberries.jpg";
import picture3 from "./freepikChocolateNotebook.jpg";

const MENU_PICTURES = [
    picture1,
    picture2,
    picture3,
];

const MENU_ITEM_NAMES = 
[
    "Chocolate Bundt Cake",
    "Chocolate-covered Strawberries",
    "Chocolate and a Notebook"
];

const MENU_ITEM_DESC = 
[
    "Keep it simple and panamerican classic with this dark chocolate bundt cake. Its reputation is not to be made any longer, and ours lives up to it! What makes it irresistible is the simple add-on of dark chocolate sauce on it. What are you waiting for?",
    "We get it, you love fat and sugar but your conscience is gnawing at you from the amount you're about to gobble up, in spite of the 20 hours of cardio and weight-lifting a week as well as the V-shaped slim figure. We're serving this to settle the inner conscience ambivalent voice battle that's unfolding: fruits and chocolate. The combination of our locally-sourced, organic, juicy, picked-at-just-the-right-time strawberries and our dark chocolate will hit the spot.",
    "The Chocolate Factorant will send you on a sensory and emotional rollercoaster. Don't be scared, we swear you'll enjoy the ride. Instead of trying to stammer your way through verbalizing the experience to your party's members or your close ones next time you see them, we'll just throw in a notebook and a pen so you can take the time to process it and write it down. Oh, and needless to say that there's chocolate too."
];

const MENU_PICTURE_CREDS = 
[
    ["Jordane Mathieu, ", "Unsplash", "http://unsplash.com"],
    ["Jessica Johnston, ", "Unsplash", "http://unsplash.com"],
    ["", "Freepik", "https://www.freepik.com/"]
];

function loadMenuPage(){
    /*Main div*/
    const divPageContent = document.querySelector("div#page-content");

    /*Menu div*/
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu-div");

    /*Menu items*/
    MENU_PICTURES.forEach(
        (el, index, arr) => {
            /*Item div*/
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("menu-item");
            menuDiv.appendChild(itemDiv);

            /*Image div*/
            const itemImageDiv = document.createElement("div");
            itemImageDiv.classList.add("menu-image");
            itemDiv.appendChild(itemImageDiv);

            /*Item image*/
            const itemImage = document.createElement("img");
            itemImage.setAttribute("src", el);
            itemImageDiv.appendChild(itemImage);

            /*Item image creds*/
            const itemImageCreds = document.createElement("a");
            itemImageCreds.setAttribute("target", "_blank");
            itemImageCreds.setAttribute("href", MENU_PICTURE_CREDS[index][2]);
            itemImageCreds.textContent = MENU_PICTURE_CREDS[index][0] + MENU_PICTURE_CREDS[index][1];
            itemImageDiv.appendChild(itemImageCreds);

            /*Item description div*/
            const itemDescDiv = document.createElement("div");
            itemDescDiv.classList.add("menu-desc");            
            itemDiv.appendChild(itemDescDiv);

            /*Item name*/
            const itemName = document.createElement("h1");
            itemName.textContent = MENU_ITEM_NAMES[index];
            itemDescDiv.appendChild(itemName);

            /*Item description*/
            const itemDesc = document.createElement("p");
            itemDesc.textContent = MENU_ITEM_DESC[index];
            itemDescDiv.appendChild(itemDesc);            
        }
    );

    divPageContent.appendChild(menuDiv);
}

export default loadMenuPage;