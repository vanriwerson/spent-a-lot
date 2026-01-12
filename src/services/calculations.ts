import type { Transaction } from '../types';

export function getTotalIncome(wage: number, transactions: Transaction[]) {
  const incomeFromTransactions = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalIncome = wage + incomeFromTransactions;

  return totalIncome;
}

export function getTotalExpense(transactions: Transaction[]) {
  return transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);
}

export function getBalance(income: number, expense: number) {
  return income - expense;
}

export function getUsedPercentage(expense: number, salary: number) {
  if (!salary) return 0;
  return (expense / salary) * 100;
}

export function getCost100(salary: number, weeklyHours: number) {
  if (!salary || !weeklyHours) return 0;
  const monthlyHours = weeklyHours * 4;
  const hourlyRate = salary / monthlyHours;
  return 100 / hourlyRate;
}
