import type { StyleRule } from '@vanilla-extract/css';
import { vars } from 'styles/vars.css';

/**
 * Raw declarations rather than a class, because `Link`'s `button` variant
 * layers these on top of the button typography variant in a single rule —
 * composing two classes would leave the winner up to CSS source order.
 */
const buttonStyles: StyleRule = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxHeight: 'auto',
  padding: '0.8rem 1.4rem',
  border: `0.5px solid ${vars.borderColor}`,
  borderRadius: '0.8rem',
  color: vars.fontColor,
  backgroundColor: vars.btnBgColor,
  boxShadow: vars.btnShadow,
  fontSize: '1.4rem',
  transition: 'all 0.1s ease-in-out',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: vars.btnHoverBgColor,
  },
  ':focus': {
    backgroundColor: vars.btnHoverBgColor,
  },
};

export { buttonStyles };
