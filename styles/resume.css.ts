import { style } from '@vanilla-extract/css';
import { container } from 'components/common/Container.css';
import { main } from 'components/common/Main.css';

/**
 * Composed rather than standalone so vanilla-extract emits these rules
 * after the base ones and the padding/alignment overrides actually win.
 */
const resumeContainer = style([
  container,
  {
    padding: '3rem 3rem 0 3rem',
  },
]);

const resumeMain = style([
  main,
  {
    alignItems: 'center',
  },
]);

export { resumeContainer, resumeMain };
