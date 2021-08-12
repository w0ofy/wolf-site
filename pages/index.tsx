import Head from 'next/head';
import { Typography } from 'components/Typography';
import styles from 'styles/Home.module.scss';
import { Nav, NavItem } from 'components/Nav';
import { Header } from 'components/Header/Header';
import { Emoji } from 'components/Emoji';

/**
 * @todo create html resume
 */
export default function Home() {
  return (
    <>
      <Head>
        <title>Engineering Dude | Mike Wolf</title>
        <meta name="description" content="Engineering Dude | Mike Wolf" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <Typography.Title>Mike Wolf</Typography.Title>
          <Typography.Heading>
            I like building stellar teams and product.
          </Typography.Heading>
          <Typography.Heading>
            Engineering frontend things @ <Emoji aria-label="shhh">🤫</Emoji>
            <Typography.Sup> ...coming soon</Typography.Sup>
          </Typography.Heading>
          <Nav>
            <NavItem href="mailto:bigwoof91@gmail.com">Email</NavItem>
            <NavItem href="/resume" isRoute>
              Resume
            </NavItem>
            <NavItem href="https://github.com/bigwoof91">Github</NavItem>
            <NavItem href="https://www.linkedin.com/in/mikerosswolf/">
              LinkedIn
            </NavItem>
          </Nav>
        </main>
      </div>
    </>
  );
}