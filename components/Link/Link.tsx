import NextLink from 'next/link';
import cx from 'classnames';
import styles from './Link.module.scss';
import typographyStyles from 'components/Typography/Typography.module.scss';
import buttonStyles from 'components/Button/Button.module.scss';
import { isEqual } from 'utils/isEqual';
import { Icon, IconProps } from 'components/Icon/Icon';

const VARIANTS = ['link', 'button', 'heading'] as const;

type LinkVariant = typeof VARIANTS[number];
type LinkToProps = { href?: never; to: string } | { href: string; to?: never };

export type LinkProps = {
  target?: React.HTMLAttributeAnchorTarget;
  variant?: LinkVariant;
} & LinkToProps &
  React.HTMLAttributes<HTMLAnchorElement> &
  Partial<Pick<IconProps, 'icon'>>;

const variantIs = (variant: LinkVariant, given: any) =>
  isEqual<LinkVariant>(variant, given);

const Link = ({
  href,
  to,
  children,
  variant = 'link',
  icon,
  ...restProps
}: LinkProps): React.ReactElement => {
  const linkTo = (to as string) || (href as string);
  const props = !!to
    ? restProps
    : { ...restProps, target: '_blank', rel: 'noopener noreferrer' };

  return (
    <NextLink href={linkTo} passHref>
      <a
        className={cx({
          [typographyStyles.span]: variantIs(variant, 'link'),
          [styles.link]:
            variantIs(variant, 'link') || variantIs(variant, 'heading'),
          [styles.heading]: variantIs(variant, 'heading'),
          [typographyStyles.button]: variantIs(variant, 'button'),
          [buttonStyles.btn]: variantIs(variant, 'button'),
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
