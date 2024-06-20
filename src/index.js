import './style.css';

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
testButtonPrintToPopup();