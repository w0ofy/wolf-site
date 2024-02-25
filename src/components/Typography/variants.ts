import * as stylex from '@stylexjs/stylex';

// const baseStyles = {
//   fontSize: '2rem',
//   lineHeight: '2rem',
//   fontWeight: 400,
//   margin: 0,
//   padding: 0,
//   color: 'var(--font-color)',
//   letterSpacing: '-0.05rem',
// };

const typographyStyles = stylex.create({
  base: {
    fontSize: '2rem',
    lineHeight: '2rem',
    fontWeight: 400,
    margin: 0,
    padding: 0,
    color: 'var(--font-color)',
    letterSpacing: '-0.05rem',
  },
  span: {
    fontSize: '2rem',
    lineHeight: '2rem',
    fontWeight: 400,
    margin: 0,
    padding: 0,
    color: 'var(--font-color)',
    letterSpacing: '-0.05rem',
  },
  p: {
    fontSize: '2rem',
    lineHeight: '2rem',
    fontWeight: 400,
    margin: 0,
    padding: 0,
    color: 'var(--font-color)',
    letterSpacing: '-0.05rem',
  },
  h1: {
    margin: 0,
    padding: 0,
    color: 'var(--font-color)',
    letterSpacing: '-0.05rem',
    fontSize: '10rem',
    lineHeight: '12rem',
    fontWeight: 800,
  },
  h3: {
    fontSize: '3rem',
    lineHeight: '5rem',
  },
  resume: { fontSize: '5rem', lineHeight: '5rem' },
  sup: {
    fontSize: '1.6rem',
    lineHeight: '1.6rem',
    verticalAlign: 'super',
  },
  button: {
    fontSize: '2rem',
    lineHeight: '2rem',
    fontWeight: 500,
  },
});

type Variants = 'h1' | 'h3' | 'span' | 'p' | 'sup' | 'button';

type Alts = 'resume';

export type { Variants, Alts };
export { typographyStyles };
