import { Typography } from 'components/Typography';
import { Link } from 'components/Link';
import styles from './Header.module.scss';
import { ROUTES } from 'constants/routes';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles['title-group']}>
        <Typography.Title alt="resume">Mike Wolf</Typography.Title>
        <Typography>Engineering Manager, Frontend</Typography>
      </div>
      <div className={styles['info']}>
        <ul>
          <li>
            <Link to={ROUTES.RESUME}>themikewolf.com</Link>
          </li>
          <li>
            <Link href="mailto:bigwoof91@gmail.com">bigwoof91@gmail.com</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="https://github.com/bigwoof91">Github</Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/mikerosswolf/">
              LinkedIn
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Header };
