import React, { forwardRef } from 'react';
import NextLink from 'next/link';
import styles from './Button.module.scss';
import { Typography } from 'components/Typography';
import { Icon, IconProps } from 'components/Icon/Icon';

export type ButtonProps = {
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<Pick<IconProps, 'icon'>>;

const Button = ({ icon, children, ...restProps }: ButtonProps) => {
  return (
    <button className={styles.btn} {...restProps}>
      {icon && <Icon icon={icon} />}
      {children && <Typography.Button>{children}</Typography.Button>}
    </button>
  );
};

const Link = ({ href, ...restProps }: { href: string } & ButtonProps) => {
  return (
    <NextLink href={href}>
      <Button {...restProps} />
    </NextLink>
  );
};

Button.Link = Link;

export { Button };
