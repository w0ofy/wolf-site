import { Typography } from 'components/Typography';
import { Logo } from 'components/Logo';
import { ResumeActions, ResumeHeader } from 'components/Resume';
import { Container, Main } from 'components/common';
import * as styles from 'styles/resume.css';

function Resume(): React.ReactElement {
  return (
    <Container className={styles.resumeContainer}>
      <ResumeActions />
      <ResumeHeader />
      <Main className={styles.resumeMain}>
        <Logo style={{ marginBottom: '1rem' }} />
        <Typography.Heading>Under Construction</Typography.Heading>
      </Main>
    </Container>
  );
}

export default Resume;
