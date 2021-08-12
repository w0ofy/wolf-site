import cx from 'classnames';
import { Typography } from 'components/Typography';
import { Link } from 'components/Link';
import { Button } from 'components/Button/Button';
import { Logo } from 'components/Logo';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';
import styles from 'styles/Resume.module.scss';
import homeStyles from 'styles/Home.module.scss';

export default function Resume() {
  return (
    <div
      id="resume"
      className={cx(styles.resume, styles.container, homeStyles.container)}
    >
      <div className={styles.actions}>
        <div>
          <Button.Link icon="home" href="/" />
        </div>
        <div>
          <ThemeSwitcher />
        </div>
      </div>

      <div className={styles.header}>
        <div className={styles['title-group']}>
          <Typography.Title alt="resume">Mike Wolf</Typography.Title>
          <Typography>Engineering Manager, Frontend</Typography>
        </div>
        <div className={styles['info']}>
          <ul>
            <li>
              <Link href="/resume" isRoute>
                mikerwolf.com
              </Link>
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
      <div className={styles.main}>
        <Logo style={{ marginBottom: '1rem' }} />
        <Typography.Heading>Under Construction</Typography.Heading>
      </div>
    </div>
  );
}
