export function calculate(inputs: Record<string, any>): Record<string, any> {
  const principal = Number(inputs.loanAmount);
  const annualRate = Number(inputs.interestRate);
  const tenureYears = Number(inputs.tenure);
  const extraPayment = Number(inputs.extraPayment) || 0;

  if (!principal || !annualRate || !tenureYears || principal <= 0 || annualRate <= 0 || tenureYears <= 0) {
    return {
      monthlyPayment: 0,
      payoffDuration: "N/A",
      totalInterest: 0,
      interestSavings: 0,
      totalPayment: 0,
      schedule: [],
    };
  }

  const monthlyRate = annualRate / 12 / 100;
  const totalMonths = tenureYears * 12;

  // Standard payoff values
  const standardEMI = 
    (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
    (Math.pow(1 + monthlyRate, totalMonths) - 1);
  const standardTotalInterest = (standardEMI * totalMonths) - principal;

  // Simulator with extra payments
  let balance = principal;
  let accumulatedInterest = 0;
  let elapsedMonths = 0;
  
  const schedule = [];
  let currentYear = 1;
  let yearPrincipal = 0;
  let yearInterest = 0;
  let yearExtra = 0;

  while (balance > 0.01 && elapsedMonths < totalMonths * 2) {
    elapsedMonths++;
    const monthlyInterest = balance * monthlyRate;
    
    let monthlyPrincipal = standardEMI - monthlyInterest;
    let actualExtra = extraPayment;

    // Boundary check for payoff completion
    if (balance <= monthlyPrincipal + actualExtra) {
      const remainingPayoff = balance;
      if (remainingPayoff <= monthlyPrincipal) {
        monthlyPrincipal = remainingPayoff;
        actualExtra = 0;
      } else {
        actualExtra = remainingPayoff - monthlyPrincipal;
      }
      balance = 0;
    } else {
      balance = balance - (monthlyPrincipal + actualExtra);
    }

    accumulatedInterest += monthlyInterest;
    yearPrincipal += monthlyPrincipal;
    yearInterest += monthlyInterest;
    yearExtra += actualExtra;

    if (elapsedMonths % 12 === 0 || balance <= 0) {
      schedule.push({
        Year: `Year ${currentYear}`,
        "Principal Paid": `$${yearPrincipal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        "Interest Paid": `$${yearInterest.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        "Extra Paid": `$${yearExtra.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        "Remaining Balance": `$${Math.max(0, balance).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      });
      currentYear++;
      yearPrincipal = 0;
      yearInterest = 0;
      yearExtra = 0;
    }

    if (balance <= 0) break;
  }

  const yearsLeft = Math.floor(elapsedMonths / 12);
  const monthsLeft = elapsedMonths % 12;
  const payoffDuration = 
    elapsedMonths === totalMonths
      ? `${tenureYears} Years`
      : `${yearsLeft} Year${yearsLeft !== 1 ? "s" : ""} & ${monthsLeft} Month${monthsLeft !== 1 ? "s" : ""}`;

  const interestSavings = Math.max(0, standardTotalInterest - accumulatedInterest);
  const totalPayment = principal + accumulatedInterest;

  return {
    monthlyPayment: standardEMI,
    payoffDuration,
    totalInterest: accumulatedInterest,
    interestSavings,
    totalPayment,
    schedule,
  };
}
