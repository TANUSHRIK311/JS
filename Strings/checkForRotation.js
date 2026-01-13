function checkForRotation(imageWidth, imageHeight, rotationAngle) {
    // Normalize the rotation angle to be within [0, 360)
    const normalizedAngle = ((rotationAngle % 360) + 360) % 360;    
    // Check if the rotation angle is 90 or 270 degrees
    if (normalizedAngle === 90 || normalizedAngle === 270) {
        return {
            width: imageHeight,
            height: imageWidth
        };
    }   
    return {
        width: imageWidth,
        height: imageHeight
    };
}


// module.exports = checkForRotation;
export default checkForRotation; 

// Example usage:
const originalDimensions1 = checkForRotation(1920, 1080, 90);
console.log(originalDimensions1); // Output: { width: 1080, height: 1920 }
const originalDimensions2 = checkForRotation(1920, 1080, 45);
console.log(originalDimensions2); // Output: { width: 1920, height: 1080 }
const originalDimensions3 = checkForRotation(800, 600, 270);
console.log(originalDimensions3); // Output: { width: 600, height: 800 }