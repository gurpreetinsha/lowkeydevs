export function calculate(inputs: Record<string, any>): Record<string, any> {
  const principal = Number(inputs.loanAmount);
  const annualRate = Number(inputs.interestRate);
  const tenureYears = Number(inputs.tenure);

  if (!principal || !annualRate || !tenureYears || principal <= 0 || annualRate <= 0 || tenureYears <= 0) {
    return {
      monthlyPayment: 0,
      totalInterest: 0,
      totalPayment: 0,
      schedule: [],
    };
  }

  const monthlyRate = annualRate / 12 / 100;
  const totalMonths = tenureYears * 12;

  let monthlyPayment = 0;
  if (monthlyRate === 0) {
    monthlyPayment = principal / totalMonths;
  } else {
    monthlyPayment = 
      (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
      (Math.pow(1 + monthlyRate, totalMonths) - 1);
  }

  const totalPayment = monthlyPayment * totalMonths;
  const totalInterest = totalPayment - principal;

  // Compile Yearly Amortization Schedule
  let remainingBalance = principal;
  const schedule = [];

  for (let year = 1; year <= tenureYears; year++) {
    let principalPaidThisYear = 0;
    let interestPaidThisYear = 0;

    for (let month = 1; month <= 12; month++) {
      const interestForMonth = remainingBalance * monthlyRate;
      const principalForMonth = monthlyPayment - interestForMonth;

      interestPaidThisYear += interestForMonth;
      principalPaidThisYear += principalForMonth;
      remainingBalance -= principalForMonth;
    }

    schedule.push({
      Year: `Year ${year}`,
      "Principal Paid": `$${principalPaidThisYear.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      "Interest Paid": `$${interestPaidThisYear.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      "Remaining Balance": `$${Math.max(0, remainingBalance).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
    });
  }

  return {
    monthlyPayment,
    totalInterest,
    totalPayment,
    schedule,
  };
}
