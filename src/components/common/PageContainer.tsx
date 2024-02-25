import stylex, { type StyleXStyles } from '@stylexjs/stylex';

const styles = stylex.create({
  container: {
    minHeight: '100vh',
    padding: '0 0.5rem',
    display: 'flex',
    flexDirection: 'column',
    flexFlow: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100vh',
    maxWidth: '170rem',
  },
});

const PageContainer = ({
  style,
  children,
}: {
  style?: StyleXStyles;
  children: React.ReactNode;
}) => <main {...stylex.props(styles.container, style)}>{children}</main>;

export { PageContainer };
