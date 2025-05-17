function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

const objA = { name: "Alice", age: 30 };
const objB = { job: "Engineer", city: "Kyiv" };

const merged = merge(objA, objB);

console.log("Обʼєднаний обʼєкт:", merged);
