import appLogo from './assets/spent-a-lot.png';
import './App.css';

function App() {
  return (
    <>
      <header>
        <a href="#" target="_blank">
          <img src={appLogo} className="logo" alt="Spent-A-Lot logo" />
        </a>
        <h1>Spent-A-Lot</h1>
      </header>
    </>
  );
}

export default App;
