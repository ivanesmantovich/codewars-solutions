function nouveau(Constructor, customName) {
	// let resultObject = Constructor(customName);
    // resultObject.__proto__ = Constructor;
	let resultObject = Object.create(Constructor);
	return resultObject;
}

// describe('Tests', () => {
// 	it('test', () => {
// 		function Person(name) {
// 			this.name = name;
// 		}
// 		Person.prototype.sayHi = function () {
// 			return 'Hi, I am ' + this.name;
// 		};

// 		var guy = nouveau(Person, 'Guy');

// 		Test.assertEquals(guy.name, 'Guy');
// 		Test.assertEquals(guy.sayHi(), 'Hi, I am Guy');
// 	});
// });

// class Person {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}
// }

// let jack = new Person('Jack', 30);

// console.log(jack.name);

// class ReturnsArray {
// 	constructor(name) {
// 		this.name = name;
// 		return name;
// 	}
// }
// let arr = new ReturnsArray('arr?');
// console.log(arr.name); // undefined
// // console.log(arr);

function Person(name) {
	this.name = name;
}
Person.prototype.sayHi = function () {
	return 'Hi, I am ' + this.name;
};

let guy = nouveau(Person, 'Guy');
console.log(guy.name);
// console.log(guy.sayHi());
