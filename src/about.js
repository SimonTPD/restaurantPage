const LIST_OF_CONTACTS = [
    ["Chocolate Joe", "Chef", "000-000-0000", "chef@chocolatefactorant.com"],
    ["Chocolate Jean", "Manager", "000-000-0000", "manager@chocolatefactorant.com"],
    ["Chocolate Mark", "Owner", "000-000-0000", "owner@chocolatefactorant.com"]        
];

function loadAboutPage(){
    /*Main div*/
    const divPageContent = document.querySelector("div#page-content");

    /*About div*/
    const aboutDiv = document.createElement("div");
    aboutDiv.classList.add("about-div");
    divPageContent.appendChild(aboutDiv);
    
    /*Header*/
    const contactHeader = document.createElement("h1");
    contactHeader.textContent = "Contact Us!";
    aboutDiv.appendChild(contactHeader);

    /*Contact 1*/
    LIST_OF_CONTACTS.forEach(
        (el, index, array) => {
            const contactDiv = document.createElement("div");
            contactDiv.classList.add("about-contact");
            aboutDiv.appendChild(contactDiv);

            const contactName = document.createElement("h2");
            contactName.textContent = LIST_OF_CONTACTS[index][0];
            contactDiv.appendChild(contactName);

            const contactInfo = document.createElement("ul");
            contactDiv.appendChild(contactInfo);

            const contactInfoRole = document.createElement("li");
            contactInfoRole.textContent = LIST_OF_CONTACTS[index][1];
            contactInfo.appendChild(contactInfoRole);

            const contactInfoPhone = document.createElement("li");
            contactInfoPhone.textContent = LIST_OF_CONTACTS[index][2];
            contactInfo.appendChild(contactInfoPhone);
            
            const contactInfoEmail = document.createElement("li");
            contactInfoEmail.textContent = LIST_OF_CONTACTS[index][3];
            contactInfo.appendChild(contactInfoEmail);
        }
    );    
}

export default loadAboutPage;