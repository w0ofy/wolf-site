import { globalStyle } from '@vanilla-extract/css';
import './normalize.css';
import { vars } from './vars.css';

/**
 * `--subtle-color` only ever existed on the dark theme, so it is not part
 * of the theme contract.
 */
globalStyle(':root.dark', {
  vars: {
    '--subtle-color': '#5c5c5c',
  },
});

globalStyle('::selection', {
  background: vars.fontColor,
  color: vars.bgColor,
});

globalStyle('html, body', {
  padding: 0,
  margin: 0,
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif",
  background: vars.bgColor,
  color: vars.fontColor,
});

globalStyle('body', {
  background:
    'radial-gradient(circle at 15% 50%, #6d77ff1a, rgba(255, 255, 255, 0) 25%), radial-gradient(circle at 85% 30%, rgba(204, 242, 246, 0.05), rgba(255, 255, 255, 0) 25%)',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('*', {
  boxSizing: 'border-box',
});

globalStyle('html', {
  '@media': {
    /* Extra small devices (phones, 600px and down) */
    'only screen and (max-width: 600px)': {
      fontSize: '0.5rem',
    },
    /* Small devices (portrait tablets and large phones, 600px and up) */
    'only screen and (min-width: 600px)': {
      fontSize: '0.55rem',
    },
    /* Medium devices (landscape tablets, 768px and up) */
    'only screen and (min-width: 768px)': {
      fontSize: '0.625rem',
    },
  },
});
