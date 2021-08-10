import Head from 'next/head'
import { useState } from 'react';
import { Typography } from 'components/Typography';
import { Button } from 'components/Button/Button';
import styles from 'styles/Home.module.scss'
import { Logo } from 'components/Logo';
import { Anchor } from 'components/Anchor';

/**
 * @todo componentize home page
 * @todo add links
 * @todo create html resume
 */
export default function Home() {
  const [darkTheme, setDarkTheme] = useState(true);

  const handleThemeToggle = () => {
    const classList = document.querySelector('html')?.classList
    classList?.toggle('dark-theme');
    setDarkTheme(!classList?.contains('dark-theme'));
  }

  return (
    <>
      <Head>
        <title>Engineering Dude | Mike Wolf</title>
        <meta name="description" content="I'm Mike Wolf - A frontend engineering dude." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <Logo width={60}  />
          <Button
            style={{ alignSelf: 'flex-start' }}
            onClick={handleThemeToggle}
            icon={darkTheme ? 'contrast-outline' : 'contrast'}
          />
        </header>
        <main className={styles.main}>
          <Typography.Title>Mike Wolf</Typography.Title>
          <Typography.Heading>I like building stellar teams and product.</Typography.Heading>
          <Typography.Heading>Engineering frontend things @ 🤔 <Typography.Sup>(coming soon)</Typography.Sup></Typography.Heading>
          <nav className={styles.nav}>
            <div className={styles['nav-item']}>
              <Anchor href="">Email</Anchor>
            </div>
            <div className={styles['nav-item']}>
              <Anchor href="">Resume</Anchor>
            </div>
            <div className={styles['nav-item']}>
              <Anchor href="">Github</Anchor>
            </div>
            <div className={styles['nav-item']}>
              <Anchor href="">LinkedIn</Anchor>
            </div>
          </nav>
        </main>
      </div>
    </>
  )
}
