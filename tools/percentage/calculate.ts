export function calculate(inputs: Record<string, any>): Record<string, any> {
  const calcType = inputs.calcType || "of";
  const x = Number(inputs.x);
  const y = Number(inputs.y);

  if (isNaN(x) || isNaN(y)) {
    return {
      result: 0,
      description: "Please enter valid numbers.",
    };
  }

  let result = 0;
  let description = "";

  switch (calcType) {
    case "of":
      result = (x / 100) * y;
      description = `${x}% of ${y} is ${result.toLocaleString(undefined, { maximumFractionDigits: 4 })}`;
      break;

    case "is_what":
      if (y === 0) {
        result = 0;
        description = "Error: Division by zero (Value Y cannot be 0).";
      } else {
        result = (x / y) * 100;
        description = `${x} is ${result.toLocaleString(undefined, { maximumFractionDigits: 4 })}% of ${y}`;
      }
      break;

    case "change":
      if (x === 0) {
        result = 0;
        description = "Error: Cannot calculate percentage change from a starting value of 0.";
      } else {
        result = ((y - x) / x) * 100;
        const changeDir = result >= 0 ? "increase" : "decrease";
        description = `The change from ${x} to ${y} represents a ${changeDir} of ${Math.abs(result).toLocaleString(undefined, { maximumFractionDigits: 4 })}%`;
      }
      break;

    default:
      result = 0;
      description = "Invalid calculation type.";
  }

  return {
    result,
    description,
  };
}
