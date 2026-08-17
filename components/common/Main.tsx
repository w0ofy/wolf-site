import { cx } from 'utils/cx';
import * as styles from './Main.css';

export type MainProps = React.HTMLAttributes<HTMLElement>;

const Main: React.FC<MainProps> = ({ className, children, ...restProps }) => {
  return (
    <main className={cx(styles.main, className)} {...restProps}>
      {children}
    </main>
  );
};

export { Main };
