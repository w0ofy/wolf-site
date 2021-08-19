import cx from 'classnames';
import { Typography } from 'components/Typography';
import { Logo } from 'components/Logo';
import styles from 'styles/Resume.module.scss';
import homeStyles from 'styles/Home.module.scss';
import { Actions, Header, Main } from 'components/Resume';

function Resume() {
  return (
    <div
      id="resume"
      className={cx(styles.resume, styles.container, homeStyles.container)}
    >
      <Actions />
      <Header />
      <Main>
        <Typography>
          Focused on making the web fast, easy and readable. I use whatever
          tools make the most sense for the requirements. My nature is to
          innovate but I like to keep things real - when it is a waste of time,
          I speak up!
        </Typography>
      </Main>
      <div className={styles.main}>
        <Logo style={{ marginBottom: '1rem' }} />
        <Typography.Heading>Under Construction</Typography.Heading>
      </div>
    </div>
  );
}

export default Resume;
