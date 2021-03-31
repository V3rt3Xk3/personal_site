type string_or_number = string | number;

function combine(
    input1: string_or_number, 
    input2: string_or_number, 
    resultType: 'as-number' | 'as-text',
): string_or_number {
	let result: number | string;

	if (typeof input1 === "number" && typeof input2 === "number" || resultType === "as-number") {
		result = +input1 + +input2;
	} else {
		result = input1.toString() + input2.toString();
	}

	return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedAgesStringsAsNum = combine('30', '26', 'as-number');
console.log(combinedAges);

const combinedNames = combine("Max", "Anna", 'as-text');
console.log(combinedNames);

function printToConsole():void{
    console.log("Printing...");
}
printToConsole();


