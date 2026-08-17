import { Container, Main } from 'components/common';
import { Header } from 'components/Header';
import { Link } from 'components/Link';
import { Nav, NavItem } from 'components/Nav';
import { Typography } from 'components/Typography';
import { ROUTES } from 'constants/routes';
import Head from 'next/head';

const { RESUME } = ROUTES;
/**
 * @todo create html resume
 * @todo create projects page
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
            Engineering frontend things @{' '}
            <Link
              href="https://blockworks.co/"
              target="_blank"
              variant="heading"
            >
              Blockworks
            </Link>
          </Typography.Heading>
          <Nav>
            <NavItem href="mailto:mikr.r.woof@gmail.com">Email</NavItem>
            <NavItem to={RESUME}>Resume</NavItem>
            <NavItem href="https://github.com/w0ofy">Github</NavItem>
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
