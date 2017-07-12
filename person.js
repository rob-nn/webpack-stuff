class Person {
	constructor(name) {
		this.name = name;
	}
	 sayMyName (){
		console.log(this.name);
	}
}

var p = new Person('Roberto');
p.sayMyName();
