import { Logo } from 'components/Logo';
import { ThemeSwitcher } from './Theme';
import * as styles from './Header.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo width={60} />
      <ThemeSwitcher style={{ alignSelf: 'flex-start' }} />
    </header>
  );
};

export { Header };
