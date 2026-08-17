import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css';

/**
 * The theme is exposed as plain custom properties on `:root.light` /
 * `:root.dark`. The class on <html> is set by the inline script in
 * `pages/_document.tsx` and flipped by `components/Theme/ThemeSwitcher`,
 * so the property names have to stay exactly as they were.
 */
const vars = createGlobalThemeContract({
  fontColor: 'font-color',
  bgColor: 'bg-color',
  linkColor: 'link-color',
  linkHoverColor: 'link-hover-color',
  linkBorderColor: 'link-border-color',
  titleColor: 'title-color',
  subtitleColor: 'subtitle-color',
  btnBgColor: 'btn-bg-color',
  btnHoverBgColor: 'btn-hover-bg-color',
  btnShadow: 'btn-shadow',
  borderColor: 'border-color',
});

createGlobalTheme(':root.light', vars, {
  fontColor: '#0e0e0e',
  bgColor: '#fefefe',
  linkColor: '#0e0e0e',
  linkHoverColor: '#3341ff',
  linkBorderColor: 'rgba(14, 14, 14, 0.2)',
  titleColor: '#0e0e0e',
  subtitleColor: '#3341ff',
  btnBgColor: '#eaeaea',
  btnHoverBgColor: '#c2c2c2',
  btnShadow: 'rgba(14, 14, 14, 0.05) 0px 1px 0px',
  borderColor: 'rgba(14, 14, 14, 0.05)',
});

createGlobalTheme(':root.dark', vars, {
  fontColor: '#fefefe',
  bgColor: '#0e0e0e',
  linkColor: '#fefefe',
  linkHoverColor: '#6d77ff',
  linkBorderColor: 'rgba(254, 254, 254, 0.2)',
  titleColor: '#fefefe',
  subtitleColor: '#6d77ff',
  btnBgColor: '#3e3e3e',
  btnHoverBgColor: '#5c5c5c',
  btnShadow: 'rgba(234, 234, 234, 0.05) 0px 1px 0px',
  borderColor: 'rgba(234, 234, 234, 0.2)',
});

export { vars };
