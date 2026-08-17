import { styleVariants } from '@vanilla-extract/css';

/**
 * `!important` is required: `@reacticons/ionicons` sets `height`/`width`
 * as inline styles on the element it renders.
 */
const size = styleVariants({
  sm: { height: '2rem !important', width: '2rem !important' },
  md: { height: '3rem !important', width: '3rem !important' },
  lg: { height: '5rem !important', width: '5rem !important' },
});

export { size };
