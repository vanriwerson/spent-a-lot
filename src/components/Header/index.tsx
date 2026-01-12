import { logo } from '../../assets';
import './style.css';

export default function Header() {
  return (
    <header className="app-header">
      <div className="app-header__brand">
        <img
          src={logo}
          className="app-header__logo"
          alt="Spent-A-Lot mascot logo"
        />

        <div className="app-header__text">
          <h1 className="app-header__title">Spent-A-Lot</h1>
          <span className="app-header__subtitle">
            Pra onde sua grana vai (e porquê) ^^
          </span>
        </div>
      </div>
    </header>
  );
}
