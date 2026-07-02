export function calculate(inputs: Record<string, any>): Record<string, any> {
  const amount = Number(inputs.amount);
  const gstRate = Number(inputs.gstRate);
  const gstType = inputs.gstType || "exclusive";

  if (!amount || isNaN(gstRate) || amount <= 0) {
    return {
      gstAmount: 0,
      cgst: 0,
      sgst: 0,
      finalAmount: 0,
    };
  }

  let gstAmount = 0;
  let finalAmount = 0;

  if (gstType === "exclusive") {
    // Add GST to base amount
    gstAmount = amount * (gstRate / 100);
    finalAmount = amount + gstAmount;
  } else {
    // Extract GST from total amount
    finalAmount = amount / (1 + gstRate / 100); // Net price without tax
    gstAmount = amount - finalAmount;
  }

  const cgst = gstAmount / 2;
  const sgst = gstAmount / 2;

  return {
    gstAmount,
    cgst,
    sgst,
    finalAmount: gstType === "exclusive" ? finalAmount : finalAmount, // Wait, if inclusive, let's output finalAmount as net price
  };
}
