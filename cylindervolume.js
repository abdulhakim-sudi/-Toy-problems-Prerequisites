class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    // Method to calculate the volume of the cylinder
    volume() {
        return (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4);
    }
}

// Example usage:
const cylinder1 = new Cylinder(3, 5); // radius = 3, height = 5
console.log(`Volume of Cylinder: ${cylinder1.volume()} cubic units`);
