import {
  createContext,
  useState,
  useEffect,
  useMemo,
  type ReactNode,
} from 'react';

import type { TransactionsContextProps, CalculationData } from '../types';
import {
  getTotalIncome,
  getTotalExpense,
  getBalance,
  getUsedPercentage,
  getCost100,
} from '../services';
import { loadData, saveData } from '../services';

const TransactionsContext = createContext<TransactionsContextProps | undefined>(
  undefined
);
export default TransactionsContext;

export function TransactionsProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<CalculationData>(() => loadData());
  const { wage, weeklyHoursWorked, transactions } = state;

  useEffect(() => {
    saveData(state);
  }, [state]);

  const stats = useMemo(() => {
    const totalIncome = getTotalIncome(wage, transactions);
    const totalExpense = getTotalExpense(transactions);
    const balance = getBalance(totalIncome, totalExpense);
    const usedPercentage = getUsedPercentage(totalExpense, totalIncome);
    const cost100 = getCost100(wage, weeklyHoursWorked);

    return {
      totalIncome,
      totalExpense,
      balance,
      usedPercentage,
      cost100,
    };
  }, [transactions, wage, weeklyHoursWorked]);

  return (
    <TransactionsContext.Provider
      value={{
        wage,
        weeklyHoursWorked,
        transactions,

        setWage: (wage) => setState((prev) => ({ ...prev, wage })),

        setWeeklyHoursWorked: (weeklyHoursWorked) =>
          setState((prev) => ({ ...prev, weeklyHoursWorked })),

        addTransaction: (transaction) =>
          setState((prev) => ({
            ...prev,
            transactions: [...prev.transactions, transaction],
          })),

        removeTransaction: (id) =>
          setState((prev) => ({
            ...prev,
            transactions: prev.transactions.filter((t) => t.id !== id),
          })),

        clearTransactions: () =>
          setState((prev) => ({ ...prev, transactions: [] })),

        stats,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
