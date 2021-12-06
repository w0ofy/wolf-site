import { Typography } from 'components/Typography';
import { Link } from 'components/Link';
import { ROUTES } from 'constants/routes';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 82rem;
  height: 60px;
  margin: 0 auto 1rem;
`;

const TitleGroup = styled.div`
  flex: auto;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1rem;
  flex: auto;
  text-align: left;
`;

const UL = styled.ul`
  list-style-type: none;
`;

const LI = styled.li`
  margin-bottom: 1rem;
`;

const ResumeHeader: React.FC = () => {
  return (
    <Container>
      <TitleGroup>
        <Typography.Title alt="resume">Mike Wolf</Typography.Title>
        <Typography>Engineering Manager, Frontend</Typography>
      </TitleGroup>
      <ContactInfo>
        <UL>
          <LI>
            <Link to={ROUTES.RESUME}>mikerwolf.com</Link>
          </LI>
          <LI>
            <Link href="mailto:bigwoof91@gmail.com">bigwoof91@gmail.com</Link>
          </LI>
        </UL>
        <UL>
          <LI>
            <Link href="https://github.com/bigwoof91">Github</Link>
          </LI>
          <LI>
            <Link href="https://www.linkedin.com/in/mikerosswolf/">
              LinkedIn
            </Link>
          </LI>
        </UL>
      </ContactInfo>
    </Container>
  );
};

export { ResumeHeader };
