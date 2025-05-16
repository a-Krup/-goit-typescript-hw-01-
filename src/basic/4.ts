function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

showMessage("Привіт з TypeScript!");
console.log("Результат calc:", calc(10, 5));

try {
  customError();
} catch (e) {
  console.error("Виникла помилка:", (e as Error).message);
}
