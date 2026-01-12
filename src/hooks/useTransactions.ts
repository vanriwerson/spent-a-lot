import { useContext } from 'react';
import { TransactionsContext } from '../contexts';

export function useTransactions() {
  const context = useContext(TransactionsContext);

  if (!context) {
    throw new Error(
      'useTransactions deve ser usado dentro de <TransactionsProvider>'
    );
  }

  return context;
}
