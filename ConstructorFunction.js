// Some code
function Car (brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
}

Car.prototype.drive = function() {
    console.log(`${this.brand} ${this.color} is driving`);
}

Car.prototype.reverse = function() {
    console.log(`${this.brand} ${this.color} is reversing`);
}

Car.prototype.turn = function() {
    console.log(`${this.brand} ${this.color} is turning`);
}
const car1 = new Car ('Toyota','silver',200,'t0-1');
const car2 = new Car ('Honda','Black',180,'ho-1');
const car3 = new Car ('Suzuki','Red',220,'su-1');

console.log(car1);
console.log(car2);
console.log(car3);

car1.drive();
car2.drive();
car3.drive();