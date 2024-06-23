function loadHomePage(){
    /*Main div*/
    const divPageContent = document.querySelector("div#page-content");

    /*Home div*/
    const homeDiv = document.createElement("div");
    homeDiv.classList.add("home-div");

    /*Home header*/
    const homeHeader = document.createElement("h1");
    homeHeader.textContent = "The Chocolate Factorant";
    homeDiv.appendChild(homeHeader);

    /*Home Intro Pitch*/
    const homeIntroPitch = document.createElement("p");
    homeIntroPitch.textContent = "Welcome to our wondrous, world-famous, enthralling as well as enchanting, but most of all, chocolatey place of olfactive and gustative heaven! It is like no other. No number of eloquent qualifiers or ingenious syntax can verbalize how this place will make you feel. What we strive for, here at The Chocolate Factorant, is to give you the best experience of chocolate sustenance, through gourmet and unparalleled concoction quality, unrivalled atmosphere, and the friendliest service. We can't wait to see you.";
    homeDiv.appendChild(homeIntroPitch);

    /*Home Hours*/
    const homeHoursDiv = document.createElement("div");
    homeDiv.appendChild(homeHoursDiv);

    const homeHourHeader = document.createElement("h2");
    homeHourHeader.textContent = "Hours";
    homeHoursDiv.appendChild(homeHourHeader);

    const homeHoursList = document.createElement("ul");
    homeHoursDiv.appendChild(homeHoursList);
    
    const homeHoursSunday = document.createElement("li");
    homeHoursSunday.textContent = "Sunday: 8am- 8pm";
    homeHoursList.appendChild(homeHoursSunday);

    const homeHoursMonday = document.createElement("li");
    homeHoursMonday.textContent = "Monday: 8am- 8pm";
    homeHoursList.appendChild(homeHoursMonday);

    const homeHoursTuesday = document.createElement("li");
    homeHoursTuesday.textContent = "Tuesday: 8am- 8pm";
    homeHoursList.appendChild(homeHoursTuesday);
    
    const homeHoursWednesday = document.createElement("li");
    homeHoursWednesday.textContent = "Wednesday: 8am- 8pm";
    homeHoursList.appendChild(homeHoursWednesday);
    
    const homeHoursThursday = document.createElement("li");
    homeHoursThursday.textContent = "Thursday: 8am- 8pm";
    homeHoursList.appendChild(homeHoursThursday);
    
    const homeHoursFriday = document.createElement("li");
    homeHoursFriday.textContent = "Friday: 8am- 8pm";
    homeHoursList.appendChild(homeHoursFriday);
    
    const homeHoursSaturday = document.createElement("li");
    homeHoursSaturday.textContent = "Saturday: 8am- 8pm";
    homeHoursList.appendChild(homeHoursSaturday);   
    
    /*Home location*/
    const homeLocationDiv = document.createElement("div");
    homeDiv.appendChild(homeLocationDiv);

    const homeLocationHeader = document.createElement("h2");
    homeLocationHeader.textContent = "Location";
    homeLocationDiv.appendChild(homeLocationHeader);

    const homeLocationP = document.createElement("p");
    homeLocationP.textContent = "999 Sunny Drive, Sunny Palms, CA 99999"
    homeLocationDiv.appendChild(homeLocationP);    
    
    divPageContent.appendChild(homeDiv);
}

export default loadHomePage;