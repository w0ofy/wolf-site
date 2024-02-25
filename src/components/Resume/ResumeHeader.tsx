import { Typography } from 'components/Typography';
import { Link } from 'components/Link';
import { ROUTES } from 'constants/routes';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  container: {
    display: 'flex',
    width: '100%',
    maxWidth: '82rem',
    height: '60px',
    margin: '0 auto 1rem',
  },
  titleGroup: {
    flex: 'auto',
  },
  contactInfo: {
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: '1rem',
    flex: 'auto',
    textAlign: 'left',
  },
  ul: {
    listStyleType: 'none',
  },
  li: {
    marginBottom: '1rem',
  },
});

const UL = ({ children }: { children: React.ReactNode }) => (
  <ul {...stylex.props(styles.ul)}>{children}</ul>
);
const LI = ({ children }: { children: React.ReactNode }) => (
  <li {...stylex.props(styles.li)}>{children}</li>
);

const ResumeHeader: React.FC = () => {
  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.titleGroup)}>
        <Typography.Title alt="resume">Mike Wolf</Typography.Title>
        <Typography>Engineering Leader</Typography>
      </div>
      <div {...stylex.props(styles.contactInfo)}>
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
      </div>
    </div>
  );
};

export { ResumeHeader };
