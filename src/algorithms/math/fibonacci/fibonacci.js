/**
 * @param {number} numberPosition
 * @return {number}
 **/

export default function fibonacci(numberPosition) {

    let iterationsCounter = numberPosition - 1;
    let fibonacci = null;
    let fibonacciPenultimate = 1;
    let fibonacciAntePenultimate = 0;

  if (numberPosition === 1) {
    return 1;
  }

  while (iterationsCounter) {
    fibonacci = fibonacciPenultimate + fibonacciAntePenultimate;
    fibonacciAntePenultimate = fibonacciPenultimate;
    fibonacciPenultimate = fibonacci;
    iterationsCounter -= 1;
  }

  return fibonacci;
}
