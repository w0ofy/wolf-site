import { styleVariants } from '@vanilla-extract/css';
import { ALT_FONT_STYLES, FONT_STYLES } from './fontStyles';

const variants = styleVariants(FONT_STYLES);
const alts = styleVariants(ALT_FONT_STYLES);

export { variants, alts };
