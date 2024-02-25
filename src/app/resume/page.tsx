import { Heading } from 'components/Typography';
import { Logo } from 'components/Logo';
import { ResumeActions, ResumeHeader } from 'components/Resume';
import { Main } from 'components/common';
import stylex from '@stylexjs/stylex';
import type { Metadata } from 'next';

const styles = stylex.create({
  main: {
    alignItems: 'center',
  },
  container: {
    padding: '3rem 3rem 0 3rem',
  },
});

function Resume(): React.ReactElement {
  return (
    <>
      <ResumeActions />
      <ResumeHeader />
      <Main style={styles.main}>
        <Logo style={{ marginBottom: '1rem' }} />
        <Heading>Under Construction</Heading>
      </Main>
    </>
  );
}

const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: 'Resume | Mike Wolf',
    description:
      "Michael Wolf's work experience in the software engineering field.",
  };
};

export { generateMetadata };
export default Resume;
