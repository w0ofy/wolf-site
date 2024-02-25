'use client';

import { Typography } from 'components/Typography';
import { Icon, type IconProps } from 'components/Icon';
import * as stylex from '@stylexjs/stylex';

const buttonStyles = stylex.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 'auto',
    padding: '0.8rem 1.4rem',
    border: '0.5px solid',
    borderColor: 'var(--border-color)',
    borderRadius: '0.8rem',
    color: 'var(--font-color)',
    backgroundColor: {
      default: 'var(--btn-bg-color)',
      ':hover': 'var(--btn-hover-bg-color)',
      ':focus': 'var(--btn-hover-bg-color)',
    },
    boxShadow: 'var(--btn-shadow)',
    fontSize: '1.4rem',
    transition: 'all 0.25s ease-in-out',
    cursor: 'pointer',
  },
});

export type ButtonProps = {
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<Pick<IconProps, 'icon'>>;

const Button: React.FC<ButtonProps> = ({ icon, children, ...restProps }) => {
  return (
    <button {...stylex.props(buttonStyles.button)} {...restProps}>
      {icon && <Icon icon={icon} />}
      {children && <Typography.Button>{children}</Typography.Button>}
    </button>
  );
};

export type ButtonLinkProps = { href: string } & ButtonProps;

export { Button, buttonStyles };
