import Head from 'next/head';
import { Typography } from 'components/Typography';
import { Nav, NavItem } from 'components/Nav';
import { Header } from 'components/Header';
import { ROUTES } from 'constants/routes';
import { Link } from 'components/Link';
import { Main, Container } from 'components/common';

const { RESUME } = ROUTES;
/**
 * @todo create html resume
 * @todo create projects page
 * @todo refactor css modules to emotion
 */
function Home(): React.ReactElement {
  return (
    <>
      <Head>
        <title>Engineering Dude | Mike Wolf</title>
        <meta name="description" content="Engineering Dude | Mike Wolf" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Header />
        <Main>
          <Typography.Title>Mike Wolf</Typography.Title>
          <Typography.Heading>
            I love building stellar teams and products.
          </Typography.Heading>
          <Typography.Heading>
            Follow me along{' '}
            <Link
              href="https://github.com/bigwoof91"
              target="_blank"
              variant="heading"
            >
              @ bigwoof91
            </Link>
          </Typography.Heading>
          <Nav>
            <NavItem href="mailto:bigwoof91@gmail.com">Email</NavItem>
            <NavItem to={RESUME}>Resume</NavItem>
            <NavItem href="https://github.com/bigwoof91">Github</NavItem>
            <NavItem href="https://www.linkedin.com/in/mikerosswolf/">
              LinkedIn
            </NavItem>
          </Nav>
        </Main>
      </Container>
    </>
  );
}

export default Home;
