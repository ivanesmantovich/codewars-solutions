// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

// let calculator = {
// 	read(firstParam = 0, secondParam = 0) {
// 		this.first = firstParam;
// 		this.second = secondParam;
// 	},

// 	sum() {
// 		return this.first + this.second;
// 	},

// 	mul() {
// 		return this.first * this.second;
// 	},
// };

// calculator.read(2, 3);
// console.log(calculator.sum());
// console.log(calculator.mul());

// ------------------------------------------------------------------------


// let ladder = {
// 	step: 0,
// 	up() {
// 		this.step += 1;
// 		return this;
// 	},
// 	down() {
// 		this.step -= 1;
// 		return this;
// 	},
// 	showStep() {
// 		// показывает текущую ступеньку
// 		console.log(this.step);
// 		return this;
// 	},
// };

// ladder
//   .up()
//   .up()
//   .down()
//   .up()
//   .down()
//   .showStep(); // 1

// ------------------------------------------------------------------------

