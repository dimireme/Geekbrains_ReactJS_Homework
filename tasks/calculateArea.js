/*
 Написать функцию calculateArea, которая будет принимать параметры, для
 вычисления площади (можете выбрать какую то конкретную фигуру, а можете,
 основываясь на переданных параметрах, выполнять требуемый алгоритм
 вычисления площади для переданной в параметрах фигуры) и возвращать объект
 вида: { area, figure, input }, где area - вычисленная площадь, figure - название фигуры,
 для которой вычислялась площадь, input - входные параметры, по которым было
 произведено вычисление.
 */

/*
	available figures:

	circle { r: radius }
    rectangle { a: first side, b: second side }
    square { a: side of a square }
    triangle { a: base, h: height }
 */

function calculateArea(input) {

	if (input.r) {
		return {
			area: Math.PI * input.r ** 2,
			figure: 'circle',
			input: input
		}
	}

	if (input.b) {
		return {
			area: input.a * input.b,
			figure: 'rectangle',
			input: input
		}
	}

	if (input.h) {
		return {
			area: input.a * input.h / 2,
			figure: 'triangle',
			input: input
		}
	}

	return {
		area: input.a ** 2,
		figure: 'square',
		input: input
	}

}

console.log(calculateArea({r: 10}));
console.log(calculateArea({a: 10, b: 5}));
console.log(calculateArea({a: 10, h: 5}));
console.log(calculateArea({a: 10}));
