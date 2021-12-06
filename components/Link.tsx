import NextLink from 'next/link';
import { VARIANTS as TYPOGRAPHY } from 'components/Typography/variants';
import { isEqual } from 'utils/isEqual';
import { Icon, IconProps } from 'components/Icon';
import { buttonStyles } from 'components/Button';
import { css } from '@emotion/react';

const variantIs = (variant: LinkVariant, given: any) =>
  isEqual<LinkVariant>(variant, given);

const linkStyles = css(
  TYPOGRAPHY.span,
  {
    color: 'var(--link-color)',
    borderBottom: '2px solid var(--link-border-color)',
    textDecoration: 'none',
    cursor: 'pointer',
    fontWeight: 500,
    letterSpacing: 'unset',
    transition: 'all 0.2s ease-in-out',
  },
  css({
    '&:hover': {
      color: 'var(--link-hover-color)',
      borderBottomColor: 'var(--link-hover-color)',
    },
  })
);

const variantStyles = ({ variant = 'link' }: Pick<LinkProps, 'variant'>) => {
  if (variantIs(variant, 'button')) {
    return css(TYPOGRAPHY.button, buttonStyles);
  }
  if (variantIs(variant, 'heading')) {
    return css(linkStyles, TYPOGRAPHY.h3);
  }
  return linkStyles;
};

const VARIANTS = ['link', 'button', 'heading'] as const;

type LinkVariant = typeof VARIANTS[number];
type LinkToProps = { href?: never; to: string } | { href: string; to?: never };

export type LinkProps = {
  target?: React.HTMLAttributeAnchorTarget;
  variant?: LinkVariant;
} & LinkToProps &
  React.HTMLAttributes<HTMLAnchorElement> &
  Partial<Pick<IconProps, 'icon'>>;

const Link = ({
  href,
  to,
  children,
  variant = 'link',
  icon,
  ...moreProps
}: LinkProps): React.ReactElement => {
  const linkTo = (to as string) || (href as string);
  const restProps = !!to
    ? moreProps
    : { ...moreProps, target: '_blank', rel: 'noopener noreferrer' };

  return (
    <NextLink href={linkTo} passHref>
      <a css={variantStyles({ variant })} {...restProps}>
        {icon && <Icon icon={icon} />}
        {children && children}
      </a>
    </NextLink>
  );
};

export { Link };
