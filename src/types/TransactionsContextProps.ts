import type { Transaction } from '.';

export interface TransactionsContextProps {
  wage: number;
  weeklyHoursWorked: number;
  transactions: Transaction[];

  setWage: (value: number) => void;
  setWeeklyHoursWorked: (value: number) => void;

  addTransaction: (t: Transaction) => void;
  removeTransaction: (id: string) => void;
  clearTransactions: () => void;

  stats: {
    totalIncome: number;
    totalExpense: number;
    balance: number;
    usedPercentage: number;
    cost100: number;
  };
}
