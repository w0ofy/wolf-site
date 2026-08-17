import type { StyleRule } from '@vanilla-extract/css';
import { vars } from 'styles/vars.css';

const defaultStyles: StyleRule = {
  fontSize: '2rem',
  lineHeight: '2rem',
  fontWeight: 400,
  margin: 0,
  padding: 0,
  color: vars.fontColor,
  letterSpacing: '-0.05rem',
};

const makeFontStyles = (styles: StyleRule = {}): StyleRule => ({
  ...defaultStyles,
  ...styles,
});

const body = makeFontStyles();
const title = makeFontStyles({
  fontSize: '10rem',
  lineHeight: '12rem',
  fontWeight: 800,
});
const heading = makeFontStyles({
  fontSize: '3rem',
  lineHeight: '5rem',
});
const resume = makeFontStyles({ fontSize: '5rem', lineHeight: '5rem' });
const sup = makeFontStyles({
  fontSize: '1.6rem',
  lineHeight: '1.6rem',
  verticalAlign: 'super',
});
const button = makeFontStyles({
  fontSize: '2rem',
  lineHeight: '2rem',
  fontWeight: 500,
});

type Variants = 'h1' | 'h3' | 'span' | 'p' | 'sup' | 'button';

const FONT_STYLES: Record<Variants, StyleRule> = {
  h1: title,
  h3: heading,
  span: body,
  p: body,
  sup,
  button,
};

const ALT_FONT_STYLES = {
  resume,
};

type Alts = keyof typeof ALT_FONT_STYLES;

export type { Variants, Alts };
export { FONT_STYLES, ALT_FONT_STYLES };
