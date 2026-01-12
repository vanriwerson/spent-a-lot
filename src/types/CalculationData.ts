import type { Transaction } from '.';

export interface CalculationData {
  wage: number;
  weeklyHoursWorked: number;
  transactions: Transaction[];
}
