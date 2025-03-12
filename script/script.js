var rollingText = document.getElementById('rollingText');

// Create an array of texts to display
var messages = [
    "FabGadget - Innovating the Future",
    "Mower - Cutting Edge Technology",
    "Gadgets - Smart Devices for Smart Homes",
    "And Many More... Stay Tuned!"
];

// Function to cycle through messages
var currentIndex = 0;

function updateText() {
    // Set the current text content from the array
    rollingText.textContent = messages[currentIndex];

    // Move to the next message in the array
    currentIndex = (currentIndex + 1) % messages.length; // This will cycle through the array
}

// Update the text every 5 seconds (5000 milliseconds)
setInterval(updateText, 5000);

// Set initial text content
updateText(); // Set the first message immediately
