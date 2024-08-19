function singlePulse(p, s) {
    // Validate inputs
    if (typeof p !== 'number' || typeof s !== 'number') {
        throw new Error('Both parameters must be numbers');
    }
    
    // Simulate a pulse by logging its properties
    console.log(`Generating a single pulse with duration ${p}ms and strength ${s}`);
    
    // Here you can add more functionality depending on what you want to achieve
    // For example, you could create a delay using setTimeout to simulate pulse duration
    setTimeout(() => {
        console.log(`Pulse of strength ${s} completed after ${p}ms`);
    }, p);
}

// Usage example
singlePulse(1000, 5); // Generates a single pulse with 1000ms duration and strength 5
