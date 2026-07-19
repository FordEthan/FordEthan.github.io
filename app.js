// Initialize the count
let count = 0;

// Get references to the HTML elements
const counterDisplay = document.getElementById('counter');
const clickButton = document.getElementById('click-btn');

// Add a click event listener to the button
clickButton.addEventListener('click', () => {
    count++; // Increase count by 1
    counterDisplay.textContent = count; // Update the display
});