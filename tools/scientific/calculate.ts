/**
 * Safe expression evaluation for the scientific calculator.
 */
export function calculate(inputs: Record<string, any>): Record<string, any> {
  const equation = inputs.equation || "";
  const mode = inputs.mode || "deg"; // "deg" or "rad"

  if (!equation.trim()) {
    return { result: "0" };
  }

  try {
    // Sanitize equation: allow only math characters, numbers, and functions
    const sanitized = equation
      .replace(/\s+/g, "")
      .replace(/π/g, "Math.PI")
      .replace(/e/g, "Math.E")
      .replace(/sin\(/g, mode === "deg" ? "Math.sin(Math.PI/180*" : "Math.sin(")
      .replace(/cos\(/g, mode === "deg" ? "Math.cos(Math.PI/180*" : "Math.cos(")
      .replace(/tan\(/g, mode === "deg" ? "Math.tan(Math.PI/180*" : "Math.tan(")
      .replace(/log\(/g, "Math.log10(")
      .replace(/ln\(/g, "Math.log(")
      .replace(/sqrt\(/g, "Math.sqrt(")
      .replace(/\^/g, "**"); // Exponentiation

    // Safety check: ensure no malicious Javascript injection
    const allowedPatterns = /^[0-9+\-*/().,MathPIEsincostanloglsqrt**]+$/;
    if (!allowedPatterns.test(sanitized)) {
      return { result: "Error: Unsafe characters detected" };
    }

    // Safely evaluate using Function constructor with restricted environment
    const evalFunc = new Function(`return (${sanitized});`);
    const evalResult = evalFunc();

    if (isNaN(evalResult) || !isFinite(evalResult)) {
      return { result: "Error: Indeterminate or overflow" };
    }

    // Format output cleanly
    const formattedResult = Number(evalResult).toLocaleString(undefined, {
      maximumFractionDigits: 10,
    });

    return { result: formattedResult };
  } catch {
    return { result: "Error" };
  }
}
