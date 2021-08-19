import styles from './Main.module.scss';

type MainProps = {
  children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
  return <div className={styles.main}>{children}</div>;
};

export { Main };
