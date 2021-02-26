const btn = document.querySelector(".button"),
	input = document.querySelector(".searchbar"),
	data = [
		{ name: "Vitaliy", age: 25 },
		{ name: "Sasha", age: 42 },
		{ name: "Adrey", age: 12 },
		{ name: "Inna", age: 64 },
		{ name: "Alla", age: 21 },
	];
// arr
let numbers = [5, 1, 34, 765, 123, 22, 3, 10, 0, 5123],
	min = numbers[0],
	max = min;

for (i = 1; i < numbers.length; ++i) {
	if (numbers[i] > max) max = numbers[i];
	if (numbers[i] < min) min = numbers[i];
}
console.log(min, max);
// arr

//change value
let a = 5,
	b = "text";
[a, b] = [b, a];

console.log(a, b);
//change value

const superSum = (a, b) => a + b;

// findMax
const findMax = (arr) => Math.max.apply(null, arr);

console.log(findMax(numbers));
// findMax

btn.addEventListener("click", (e) => {
	e.preventDefault();
	setTimeout(() => {
		input.value === "google" ? alert("Yandex круче. Но это не точно") : alert(input.value);
		alert(data[0].name);
		alert(superSum(12, 25));
		input.value = "";
	}, 3000);
});
