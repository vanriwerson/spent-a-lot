import { usePWAInstall } from '../../hooks';
import './style.css';

export default function InstallButton() {
  const { isInstallable, install } = usePWAInstall();

  if (!isInstallable) return null;

  return (
    <button className="install-button" onClick={install}>
      📲 Instale esse App
    </button>
  );
}
