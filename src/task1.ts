function calculateTotal(
  price: number,
  quantity: number,
  discount: number = 0
): number {
  const total = price * quantity;
  return total - (total * discount) / 100;
}

console.log(calculateTotal(100, 5));
console.log(calculateTotal(100, 5, 10));
