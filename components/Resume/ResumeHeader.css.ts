import { style } from '@vanilla-extract/css';

const container = style({
  display: 'flex',
  width: '100%',
  maxWidth: '82rem',
  height: '60px',
  margin: '0 auto 1rem',
});

const titleGroup = style({
  flex: 'auto',
});

const contactInfo = style({
  display: 'flex',
  justifyContent: 'flex-end',
  fontSize: '1rem',
  flex: 'auto',
  textAlign: 'left',
});

const ul = style({
  listStyleType: 'none',
});

const li = style({
  marginBottom: '1rem',
});

export { contactInfo, container, li, titleGroup, ul };
