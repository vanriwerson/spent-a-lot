import {
  BaseEntriesForm,
  TransactionForm,
  TransactionsList,
} from '../../components';

import './style.css';

export default function TransactionsPage() {
  return (
    <section className="transactions-page">
      <BaseEntriesForm />

      <TransactionForm />

      <TransactionsList />
    </section>
  );
}
