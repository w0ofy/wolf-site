import { globalStyle, style } from '@vanilla-extract/css';

const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  marginBottom: '3rem',
});

const actionsGroup = style({
  display: 'flex',
});

globalStyle(`${actionsGroup} > a`, {
  marginRight: '1rem',
});

const actionLink = style({
  marginRight: '1rem',
});

export { actionLink, actionsGroup, container };
