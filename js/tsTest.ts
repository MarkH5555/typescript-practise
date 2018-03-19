// STRICT TYPEING

let aName: string = "Bob Smith";
let aNumber: number = 52;


document.getElementById("tsOutput").innerHTML = "<strong>Strict Typing.</strong><br />   Name: " + aName + " Age: " + aNumber;

document.write("<p>Name is a: " + typeof(aName) + "</p>");
document.write("<p>Number is a: " + typeof(aNumber) + "</p>");

// Class definition

interface Vehicle {
	name: string;
	wheels: number;
	power: string;
}

// Object instansiation

let bike: Vehicle = {
	name: "Road Bike",
	wheels: 2,
	power: "human",
}

let car: Vehicle = {
	name: "Passat",
	wheels: 4,
	power: "Diesel Engine",

}

let myVehicles: Vehicle[] = []


myVehicles.push(bike);
myVehicles.push(car);

myVehicles.push({ 
	name: "MTB",
	wheels: 2,
	power: "Human",
});



document.write(myVehicles[0].name);
document.write(myVehicles[0].wheels.toString());
document.write(myVehicles[0].power);

// Looping through arrays

for (let vehicle in myVehicles) {
   console.log(vehicle);  // References the array index
}

for (let vehicle of myVehicles) {
   console.log(vehicle); // References the array content
}




