// Initialize an array to store markers
let markers = [];

// Function that calculates the next position (lookahead)
function calculateLookahead(currentPosition, deltaX, deltaY) {
    return {
        x: currentPosition.x + deltaX,
        y: currentPosition.y + deltaY
    };
}

// Current position
let currentPosition = { x: 0, y: 0 };

// Simulate movement in a loop
for (let i = 0; i < 10; i++) {
    // Calculate the next position
    let lookahead = calculateLookahead(currentPosition, i * 10, i * 5);
    
    // Push the lookahead position into markers array
    markers.push(lookahead);
}

// Log the markers array to see all stored positions
console.log(markers);
