import { useState, type FormEvent } from 'react';

import type { TransactionType } from '../../types';
import { useTransactions } from '../../hooks';
import { generateId } from '../../helpers';

export default function TransactionForm() {
  const { addTransaction } = useTransactions();

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState<TransactionType>('expense');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!description || !amount) return;

    addTransaction({
      id: generateId(),
      description,
      amount: Number(amount),
      date: new Date().toISOString(),
      type,
    });

    setDescription('');
    setAmount('');
    setType('expense');
  }

  return (
    <form className="card transaction-form" onSubmit={handleSubmit}>
      <h2>Insira seus ganhos / gastos</h2>

      <input
        placeholder="Descrição"
        value={description}
        name="description"
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Valor"
        value={amount}
        name="amount"
        onChange={(e) => setAmount(e.target.value)}
        required
        inputMode="decimal"
        step="0.01"
        min={0}
      />

      <div className="type-toggle">
        <button
          type="button"
          className={type === 'income' ? 'active income' : ''}
          onClick={() => setType('income')}
        >
          🤑 Ganhei
        </button>

        <button
          type="button"
          className={type === 'expense' ? 'active expense' : ''}
          onClick={() => setType('expense')}
        >
          💸 Gastei
        </button>
      </div>

      <button type="submit" className="primary">
        Adicionar
      </button>
    </form>
  );
}
