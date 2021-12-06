import { css, SerializedStyles } from '@emotion/react';
import { CSSProperties } from '@emotion/serialize';

const defaultStyles = {
  fontSize: '2rem',
  lineHeight: '2rem',
  fontWeight: 400,
  margin: 0,
  padding: 0,
  color: 'var(--font-color)',
  letterSpacing: '-0.05rem',
};

const makeFontStyles = (styles: CSSProperties = {}): SerializedStyles =>
  css({
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

const VARIANT_TAGS: Record<Variants, Variants> = {
  h1: 'h1',
  h3: 'h3',
  span: 'span',
  p: 'p',
  sup: 'sup',
  button: 'span',
};

const VARIANTS: Record<Variants, SerializedStyles> = {
  h1: title,
  h3: heading,
  span: body,
  p: body,
  sup,
  button,
};

const ALTS = {
  resume,
};
type Alts = keyof typeof ALTS;

export type { Variants, Alts };
export { VARIANTS, ALTS, VARIANT_TAGS };
