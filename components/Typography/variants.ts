import type { Alts, Variants } from './fontStyles';

const VARIANT_TAGS: Record<Variants, Variants> = {
  h1: 'h1',
  h3: 'h3',
  span: 'span',
  p: 'p',
  sup: 'sup',
  button: 'span',
};

export type { Alts, Variants };
export { VARIANT_TAGS };
