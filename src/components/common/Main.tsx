import stylex, { type StyleXStyles } from '@stylexjs/stylex';

const styles = stylex.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    width: 'auto',
    height: '100%',
    padding: '0 3rem',
  },
});

const Main = ({
  style,
  children,
}: {
  style?: StyleXStyles;
  children: React.ReactNode;
}) => <main {...stylex.props(styles.main, style)}>{children}</main>;

export { Main };
