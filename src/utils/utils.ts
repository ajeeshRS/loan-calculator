import type { AmortizationScheduleRow } from "./types";

export const getAmortizationSchedule = (
  principal: number,
  annualRate: number,
  years: number
): { emi: number; schedules: AmortizationScheduleRow[] } => {
  let p = principal; //principal amount
  let r = annualRate / 12 / 100; //monthly interest rate
  let n = 12 * years; // no of months


  // monthly emi calculation
  const emi = (p * r * (1 + r) ** n) / ((1 + r) ** n - 1);

  const schedules: AmortizationScheduleRow[] = [];

  let balance = principal;

  for (let i = 0; i < n; i++) {
    const interest = balance * r;
    const principalAmount = emi - interest;

    balance -= principalAmount;

    schedules.push({
      month: i + 1,
      principal: parseFloat(principalAmount.toFixed(2)),
      balance: parseFloat(balance.toFixed(2)),
      interest: parseFloat(interest.toFixed(2)),
    });
  }

  return { emi: parseFloat(emi.toFixed(2)), schedules };
};
