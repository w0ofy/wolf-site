import { Heading, Title } from 'components/Typography';
import { Nav, NavItem } from 'components/Nav';
import { Header } from 'components/Header';
import { ROUTES } from 'constants/routes';
import { Link } from 'components/Link';
import { Main } from 'components/common';

const { RESUME } = ROUTES;

/**
 * @todo create html resume
 * @todo create projects page
 */
function HomePage() {
  return (
    <>
      <Header />
      <Main>
        <Title>Mike Wolf</Title>
        <Heading>I love building stellar teams and products.</Heading>
        <Heading>
          Engineering frontend things @{' '}
          <Link href="https://blockworks.co" target="_blank" variant="heading">
            Blockworks
          </Link>
        </Heading>
        <Nav>
          <NavItem href="mailto:bigwoof91@gmail.com">Email</NavItem>
          <NavItem to={RESUME}>Resume</NavItem>
          <NavItem href="https://github.com/bigwoof91">Github</NavItem>
          <NavItem href="https://www.linkedin.com/in/mikerosswolf/">
            LinkedIn
          </NavItem>
        </Nav>
      </Main>
    </>
  );
}

export default HomePage;
