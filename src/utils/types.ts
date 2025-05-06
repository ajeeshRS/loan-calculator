export type Currency = "USD" | "EUR" | "INR" | "CAD" | "GBP" | "JPY" | "AUD";

export type AmortizationScheduleRow = {
    month: number;
    principal: number;
    interest: number;
    balance: number;
  };