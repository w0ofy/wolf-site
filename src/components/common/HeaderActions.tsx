import { Link } from 'components/Link';
import { ThemeSwitcher } from 'components/Theme';
import { ROUTES } from 'constants/routes';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '3rem 3rem 0',
    width: '100%',
    marginBottom: '3rem',
  },
  actionGroup: {
    display: 'flex',
    gap: '1rem',
  },
});

type HeaderActionsProps = {
  rightAlignActions?: React.ReactNode;
};

const HeaderActions: React.FC<HeaderActionsProps> = ({
  rightAlignActions,
}: HeaderActionsProps) => {
  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.actionGroup)}>
        <Link icon="home" to={ROUTES.HOME} variant="button" />
      </div>
      <div {...stylex.props(styles.actionGroup)}>
        {rightAlignActions && rightAlignActions}
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export { HeaderActions };
