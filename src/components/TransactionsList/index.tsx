import { formatCurrency } from '../../helpers';
import { useTransactions } from '../../hooks';

export default function TransactionsList() {
  const { transactions, removeTransaction } = useTransactions();

  return (
    <div className="card">
      {transactions.length === 0 && (
        <p className="empty">Ainda não gastei nada esse mês!</p>
      )}

      <ul className="list">
        {transactions.map((t) => (
          <li key={t.id} className={t.type}>
            <div>
              <strong>{t.description}</strong>
              <span>{formatCurrency(t.amount)}</span>
            </div>
            <button onClick={() => removeTransaction(t.id)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
