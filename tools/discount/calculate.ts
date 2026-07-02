export function calculate(inputs: Record<string, any>): Record<string, any> {
  const price = Number(inputs.price);
  const discount = Number(inputs.discount);
  const additionalDiscount = Number(inputs.additionalDiscount) || 0;
  const tax = Number(inputs.tax) || 0;

  if (isNaN(price) || isNaN(discount) || price < 0 || discount < 0) {
    return {
      finalPrice: 0,
      savings: 0,
      taxAmount: 0,
    };
  }

  // First discount layer
  const afterFirstDiscount = price * (1 - discount / 100);
  // Stacked second discount layer
  const afterSecondDiscount = afterFirstDiscount * (1 - additionalDiscount / 100);
  
  // Tax calculations
  const taxAmount = afterSecondDiscount * (tax / 100);
  const finalPrice = afterSecondDiscount + taxAmount;
  const savings = price - afterSecondDiscount;

  return {
    finalPrice,
    savings,
    taxAmount,
  };
}
