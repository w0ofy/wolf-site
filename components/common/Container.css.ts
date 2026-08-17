import { style } from '@vanilla-extract/css';

const container = style({
  minHeight: '100vh',
  padding: '0 0.5rem',
  display: 'flex',
  flexDirection: 'column',
  flexFlow: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: '100vh',
  maxWidth: '170rem',
});

export { container };
