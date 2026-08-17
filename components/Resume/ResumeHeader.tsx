import { Link } from 'components/Link';
import { Typography } from 'components/Typography';
import { ROUTES } from 'constants/routes';
import * as styles from './ResumeHeader.css';

const ResumeHeader: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleGroup}>
        <Typography.Title alt="resume">Mike Wolf</Typography.Title>
        <Typography>Engineering Leader</Typography>
      </div>
      <div className={styles.contactInfo}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link to={ROUTES.RESUME}>themikewolf.com</Link>
          </li>
          <li className={styles.li}>
            <Link href="mailto:mike.r.woof@gmail.com">
              mike.r.woof@gmail.com
            </Link>
          </li>
        </ul>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href="https://github.com/w0ofy">Github</Link>
          </li>
          <li className={styles.li}>
            <Link href="https://www.linkedin.com/in/mikerosswolf/">
              LinkedIn
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { ResumeHeader };
