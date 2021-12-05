import cx from 'classnames';
import { Typography } from 'components/Typography';
import { Logo } from 'components/Logo';
import styles from 'styles/Resume.module.scss';
import homeStyles from 'styles/Home.module.scss';
import { ResumeActions, ResumeHeader } from 'components/Resume';

function Resume(): React.ReactElement {
  return (
    <div
      id="resume"
      className={cx(styles.resume, styles.container, homeStyles.container)}
    >
      <ResumeActions />
      <ResumeHeader />
      <div className={styles.main}>
        <Logo style={{ marginBottom: '1rem' }} />
        <Typography.Heading>Under Construction</Typography.Heading>
      </div>
    </div>
  );
}

export default Resume;
