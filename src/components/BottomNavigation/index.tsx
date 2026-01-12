import type { Tab } from '../../types';
import { moneyMoving, wallet } from '../../assets';

import './style.css';

interface BottomNavigationProps {
  activeTab: Tab;
  onChange: (tab: Tab) => void;
}

export default function BottomNavigation({
  activeTab,
  onChange,
}: BottomNavigationProps) {
  const isStatusTabActive = activeTab === 'status';

  return (
    <nav className="bottom-nav">
      <button
        type="button"
        className={`bottom-nav__item ${!isStatusTabActive ? 'is-active' : ''}`}
        onClick={() => onChange('transactions')}
        aria-label="Movimentações"
      >
        <img
          src={moneyMoving}
          alt=""
          className="bottom-nav__icon"
          aria-hidden
        />
        <span className="bottom-nav__label">Lançamentos</span>
      </button>

      <button
        type="button"
        className={`bottom-nav__item ${isStatusTabActive ? 'is-active' : ''}`}
        onClick={() => onChange('status')}
        aria-label="Status financeiro"
      >
        <img src={wallet} alt="" className="bottom-nav__icon" aria-hidden />
        <span className="bottom-nav__label">Saúde</span>
      </button>
    </nav>
  );
}
