import { useTransactions } from '../../hooks';

export default function BaseEntriesForm() {
  const { wage, weeklyHoursWorked, setWage, setWeeklyHoursWorked } =
    useTransactions();

  return (
    <div className="card">
      <h2>Como seu mês começa?</h2>

      <label>
        Seu salário líquido (R$)
        <input
          type="number"
          value={wage || ''}
          onChange={(e) => setWage(Number(e.target.value))}
        />
      </label>

      <label>
        Sua carga de trabalho semanal (em horas)?
        <input
          type="number"
          value={weeklyHoursWorked || ''}
          onChange={(e) => setWeeklyHoursWorked(Number(e.target.value))}
        />
      </label>
    </div>
  );
}
