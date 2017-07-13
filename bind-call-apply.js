function Person(name, age) {
	this.name = name
	this.age = age
}
Person.prototype.sayName = function () {
	console.log("My name is " + this.name)
}

var p1 = new Person('Joe', 18)

p1.sayName();
var sayName = p1.sayName;

sayName.call(p1)
var bindedSayName = sayName.bind(p1)
bindedSayName();
