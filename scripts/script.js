function Phone(brand, model, price, color, country) {
	this.brand = brand;
	this.model = model;
	this.price = price;
	this.color = color;
	this.country = country;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", model is " + this.model + ", color is " + this.color + " and the price is " + this.price + ".");
}
Phone.prototype.watchout = function(){
	alert('Watch out, ' + this.brand + ' ' + this.model + ' is from ' + this.country);
}
var iPhone6S = new Phone("Apple","iPhone6S", 2250, "silver","USA");
var GalaxyS6 = new Phone("Samsung","GalaxyS6", 2250, "black","South Korea");
var One = new Phone("OnePlus","One", 2250, "white","China");
iPhone6S.printInfo();
GalaxyS6.printInfo();
One.printInfo();
iPhone6S.watchout();
GalaxyS6.watchout();
One.watchout();