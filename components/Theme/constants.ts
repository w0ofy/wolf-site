const LOCAL_THEME_KEY = 'themikewolf-theme';
const DARK_CLASS = 'dark';
const LIGHT_CLASS = 'light';

type ThemeClasses = typeof DARK_CLASS | typeof LIGHT_CLASS;
type LocalThemeKey = typeof LOCAL_THEME_KEY;

export type { ThemeClasses, LocalThemeKey };
export { LOCAL_THEME_KEY, DARK_CLASS, LIGHT_CLASS };
