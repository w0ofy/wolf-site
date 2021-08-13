import NextLink from 'next/link';
import cx from 'classnames';
import typography from 'components/Typography/Typography.module.scss';
import styles from './Link.module.scss';
import buttonStyles from 'components/Button/Button.module.scss';
import { isEqual } from 'utils/isEqual';
import { Icon, IconProps } from 'components/Icon/Icon';

const VARIANTS = ['link', 'button'] as const;

type LinkVariant = typeof VARIANTS[number];
type LinkToProps = { href?: never; to: string } | { href: string; to?: never };

export type LinkProps = {
  target?: React.HTMLAttributeAnchorTarget;
  variant?: LinkVariant;
} & LinkToProps &
  React.HTMLAttributes<HTMLAnchorElement> &
  Partial<Pick<IconProps, 'icon'>>;

const Link = ({
  target,
  href,
  to,
  children,
  variant = 'link',
  icon,
  ...restProps
}: LinkProps) => {
  const linkTo = (to as string) || (href as string);
  const props = !!to
    ? restProps
    : { ...restProps, target: '_blank', rel: 'noopener noreferrer' };

  return (
    <NextLink href={linkTo} passHref>
      <a
        className={cx({
          [typography.span]: isEqual<LinkVariant>(variant, 'link'),
          [styles.link]: isEqual<LinkVariant>(variant, 'link'),
          [typography.button]: isEqual<LinkVariant>(variant, 'button'),
          [buttonStyles.btn]: isEqual<LinkVariant>(variant, 'button'),
        })}
        {...props}
      >
        {icon && <Icon icon={icon} />}
        {children && children}
      </a>
    </NextLink>
  );
};

export { Link };
