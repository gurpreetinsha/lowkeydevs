export function calculate(inputs: Record<string, any>): Record<string, any> {
  const birthStr = inputs.birthDate;
  const targetStr = inputs.targetDate;

  if (!birthStr || !targetStr) {
    return {
      years: 0,
      months: 0,
      days: 0,
      summaryText: "Please enter valid dates.",
      nextBirthday: "N/A",
      totalDays: 0,
    };
  }

  const birthDate = new Date(birthStr);
  const targetDate = new Date(targetStr);

  // Error boundary check
  if (targetDate < birthDate) {
    return {
      years: 0,
      months: 0,
      days: 0,
      summaryText: "Error: Birth date cannot be in the future relative to the target date.",
      nextBirthday: "N/A",
      totalDays: 0,
    };
  }

  const birthYear = birthDate.getFullYear();
  const birthMonth = birthDate.getMonth();
  const birthDay = birthDate.getDate();

  const targetYear = targetDate.getFullYear();
  const targetMonth = targetDate.getMonth();
  const targetDay = targetDate.getDate();

  // Primary Age Calculation
  let years = targetYear - birthYear;
  let months = targetMonth - birthMonth;
  let days = targetDay - birthDay;

  if (days < 0) {
    months--;
    // Get days in the previous month relative to the target date
    const prevMonth = new Date(targetYear, targetMonth, 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  // Total elapsed days calculation
  const diffTime = Math.abs(targetDate.getTime() - birthDate.getTime());
  const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // Next Birthday Calculation
  const nextBDay = new Date(targetYear, birthMonth, birthDay);
  if (nextBDay < targetDate) {
    nextBDay.setFullYear(targetYear + 1);
  }

  const bDayDiffTime = nextBDay.getTime() - targetDate.getTime();
  const bDayDiffDays = Math.ceil(bDayDiffTime / (1000 * 60 * 60 * 24));
  
  let nextBText = "";
  if (bDayDiffDays === 365 || bDayDiffDays === 366 || bDayDiffDays === 0) {
    nextBText = "Happy Birthday! Today is the day! 🎉";
  } else {
    const nextBMonths = Math.floor(bDayDiffDays / 30.4375);
    const nextBDaysLeft = Math.floor(bDayDiffDays % 30.4375);
    
    if (nextBMonths > 0) {
      nextBText = `${nextBMonths} month${nextBMonths > 1 ? "s" : ""} & ${nextBDaysLeft} day${nextBDaysLeft !== 1 ? "s" : ""}`;
    } else {
      nextBText = `${bDayDiffDays} day${bDayDiffDays > 1 ? "s" : ""}`;
    }
  }

  const summaryText = `${years} year${years !== 1 ? "s" : ""}, ${months} month${months !== 1 ? "s" : ""}, and ${days} day${days !== 1 ? "s" : ""}`;

  return {
    years,
    months,
    days,
    summaryText,
    nextBirthday: nextBText,
    totalDays,
  };
}
