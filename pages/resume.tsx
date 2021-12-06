import { Typography } from 'components/Typography';
import { Logo } from 'components/Logo';
import { ResumeActions, ResumeHeader } from 'components/Resume';
import { Container, Main } from 'components/common';
import { css } from '@emotion/react';

const containerCSS = css`
  padding: 3rem 3rem 0 3rem;
`;

const mainCSS = css`
  align-items: center;
`;
function Resume(): React.ReactElement {
  return (
    <Container css={containerCSS}>
      <ResumeActions />
      <ResumeHeader />
      <Main css={mainCSS}>
        <Logo style={{ marginBottom: '1rem' }} />
        <Typography.Heading>Under Construction</Typography.Heading>
      </Main>
    </Container>
  );
}

export default Resume;
