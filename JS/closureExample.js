function createTaxCalc(percentage) {
  function taxCalc(amount) {
    return (amount * percentage) / 100;
  }
  return taxCalc;
}
let usafun = createTaxCalc(20);
let indiafun = createTaxCalc(25);
