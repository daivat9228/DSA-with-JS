// Basic JavaScript file for the webpage

// Function to display an alert when the page loads
window.onload = function() {
    console.log("Page loaded successfully!");
};

// Example function to change the heading text
function changeHeading() {
    const heading = document.querySelector('h1');
    if (heading) {
        heading.textContent = "Hello from JavaScript!";
    }
}

// Example function to add interactivity
function addParagraph() {
    const body = document.querySelector('body');
    const newPara = document.createElement('p');
    newPara.textContent = "This paragraph was added by JavaScript!";
    body.appendChild(newPara);
}

// Event listeners (if needed)
// document.addEventListener('DOMContentLoaded', function() {
//     // Code to run after DOM is loaded
// });
