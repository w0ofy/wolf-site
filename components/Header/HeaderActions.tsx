import { Link } from 'components/Link';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';
import { ROUTES } from 'constants/routes';
import styles from './HeaderActions.module.scss';

type HeaderActionsProps = {
  rightAlignActions?: React.ReactNode;
};

const HeaderActions: React.FC<HeaderActionsProps> = ({
  rightAlignActions,
}: HeaderActionsProps) => {
  return (
    <div className={styles.actions}>
      <div className={styles['actions-group']}>
        <Link icon="home" to={ROUTES.HOME} variant="button" />
      </div>
      <div className={styles['actions-group']}>
        {rightAlignActions && rightAlignActions}
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export { HeaderActions };
