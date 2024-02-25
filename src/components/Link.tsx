'use client';

import NextLink from 'next/link';
import { Icon, type IconProps } from 'components/Icon';
import stylex from '@stylexjs/stylex';

const linkStyles = stylex.create({
  link: {
    fontSize: '2rem',
    lineHeight: '2rem',
    margin: 0,
    padding: 0,
    color: {
      default: 'var(--link-color)',
      ':hover': 'var(--link-hover-color)',
    },
    borderBottom: '2px solid',
    borderBottomColor: {
      default: 'var(--link-border-color)',
      ':hover': 'var(--link-hover-color)',
    },
    textDecoration: 'none',
    cursor: 'pointer',
    fontWeight: 500,
    letterSpacing: 'unset',
    transition: 'all 0.2s ease-in-out',
  },
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
    lineHeight: '2rem',
    fontWeight: 500,
  },
  heading: {
    fontSize: '3rem',
    lineHeight: '5rem',
    margin: 0,
    padding: 0,
    color: {
      default: 'var(--link-color)',
      ':hover': 'var(--link-hover-color)',
    },
    borderBottom: '2px solid',
    borderBottomColor: {
      default: 'var(--link-border-color)',
      ':hover': 'var(--link-hover-color)',
    },
    textDecoration: 'none',
    cursor: 'pointer',
    fontWeight: 500,
    letterSpacing: 'unset',
    transition: 'all 0.2s ease-in-out',
  },
});

type LinkVariant = 'link' | 'button' | 'heading';
type LinkToProps = { href?: never; to: string } | { href: string; to?: never };

export type LinkProps = {
  target?: React.HTMLAttributeAnchorTarget;
  variant?: LinkVariant;
} & LinkToProps &
  React.HTMLAttributes<HTMLAnchorElement> &
  Partial<Pick<IconProps, 'icon'>>;

const Link: React.FC<LinkProps> = ({
  href,
  to,
  children,
  variant = 'link',
  icon,
  ...moreProps
}) => {
  const linkTo = (to as string) || (href as string);
  const restProps = !!to
    ? moreProps
    : { ...moreProps, target: '_blank', rel: 'noopener noreferrer' };

  return (
    <NextLink href={linkTo} passHref legacyBehavior>
      <a {...stylex.props(linkStyles[variant])} {...restProps}>
        {icon && <Icon icon={icon} />}
        {children && children}
      </a>
    </NextLink>
  );
};

export { Link };
