import { useTransactions } from '../../hooks';
import { formatCost100, formatCurrency } from '../../helpers';

import './style.css';

export default function DashboardPage() {
  const {
    transactions,
    stats: { totalIncome, totalExpense, balance, usedPercentage, cost100 },
    wage,
  } = useTransactions();

  const cappedPercentage = Math.min(usedPercentage, 100);

  return (
    <section className="dashboard">
      <div className="card balance">
        <h2>Saldo</h2>
        <strong className={balance < 0 ? 'negative' : 'positive'}>
          {formatCurrency(balance)}
        </strong>

        {balance < 0 && (
          <p className="warning">
            Pare de gastar ou dê um jeito de ganhar mais!
          </p>
        )}
      </div>

      <div className="card t-graph-card">
        <div className="t-graph">
          <div className="column income">
            <h3>Tenho:</h3>

            <div className="values">
              <span>{formatCurrency(wage)}</span>
              {transactions
                .filter((t) => t.type === 'income')
                .map((t) => (
                  <span key={t.id}>{formatCurrency(t.amount)}</span>
                ))}
            </div>

            <strong>{formatCurrency(totalIncome)}</strong>
          </div>

          <div className="divider" />

          <div className="column expense">
            <h3>Devo:</h3>

            <div className="values">
              {transactions
                .filter((t) => t.type === 'expense')
                .map((t) => (
                  <span>{formatCurrency(t.amount)}</span>
                ))}
            </div>
            <strong>{formatCurrency(totalExpense)}</strong>
          </div>
        </div>

        <div className="usage">
          <div className="bar">
            <div className="fill" />
            <div
              className="remaining"
              style={{ width: `${100 - cappedPercentage}%` }}
            />
          </div>
          <span>{usedPercentage.toFixed(1)}% do salário utilizado</span>
        </div>
      </div>

      <div className="card cost100">
        <h3>Custo 100</h3>
        <p>
          Você precisa trabalhar aproximadamente{' '}
          <strong>{formatCost100(cost100)}</strong> para ganhar R$ 100,00
        </p>
      </div>
    </section>
  );
}
