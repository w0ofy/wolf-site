import type { StyleRule } from '@vanilla-extract/css';
import { styleVariants } from '@vanilla-extract/css';
import { buttonStyles } from 'components/Button.model';
import { FONT_STYLES } from 'components/Typography/fontStyles';
import { vars } from 'styles/vars.css';

const linkStyles: StyleRule = {
  ...FONT_STYLES.span,
  color: vars.linkColor,
  borderBottom: `2px solid ${vars.linkBorderColor}`,
  textDecoration: 'none',
  cursor: 'pointer',
  fontWeight: 500,
  letterSpacing: 'unset',
  transition: 'all 0.1s ease-in-out',
  ':hover': {
    color: vars.linkHoverColor,
    borderBottomColor: vars.linkHoverColor,
  },
};

/**
 * Each variant is flattened into a single rule so the declaration order —
 * and therefore which value wins — is fixed at build time, exactly as the
 * merged Emotion `css()` calls used to be.
 */
const variant = styleVariants({
  link: linkStyles,
  button: { ...FONT_STYLES.button, ...buttonStyles },
  heading: { ...linkStyles, ...FONT_STYLES.h3 },
});

export { variant };
