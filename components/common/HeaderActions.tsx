import { Link } from 'components/Link';
import { ThemeSwitcher } from 'components/Theme';
import { ROUTES } from 'constants/routes';
import * as styles from './HeaderActions.css';

type HeaderActionsProps = {
  rightAlignActions?: React.ReactNode;
};

const HeaderActions: React.FC<HeaderActionsProps> = ({
  rightAlignActions,
}: HeaderActionsProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.actionsGroup}>
        <Link
          className={styles.actionLink}
          icon="home"
          to={ROUTES.HOME}
          variant="button"
        />
      </div>
      <div className={styles.actionsGroup}>
        {rightAlignActions && rightAlignActions}
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export { HeaderActions };
