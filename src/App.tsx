import { useState } from 'react';
import type { Tab } from './types';
import { BottomNavigation, Header, InstallButton } from './components';
import { Dashboard, Transactions } from './pages';
import { TransactionsProvider } from './contexts';
import './styles/globals.css';
import './styles/variables.css';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('transactions');

  return (
    <TransactionsProvider>
      <Header />

      <main>
        {activeTab === 'transactions' && <Transactions />}
        {activeTab === 'status' && <Dashboard />}
      </main>

      <BottomNavigation activeTab={activeTab} onChange={setActiveTab} />

      <InstallButton />
    </TransactionsProvider>
  );
}

export default App;
