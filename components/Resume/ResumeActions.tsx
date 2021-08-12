import { Link } from 'components/Link';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';
import styles from './ResumeActions.module.scss';

const ResumeActions = () => {
  return (
    <div className={styles.actions}>
      <div className={styles['actions-group']}>
        <Link icon="home" to="/" variant="button" />
      </div>
      <div className={styles['actions-group']}>
        <Link href="/resume.pdf" icon="download" variant="button" />
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export { ResumeActions };
