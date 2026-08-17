import { Icon, type IconProps } from 'components/Icon';
import { Typography } from 'components/Typography';
import { cx } from 'utils/cx';
import * as styles from './Button.css';

export type ButtonProps = {
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<Pick<IconProps, 'icon'>>;

const Button: React.FC<ButtonProps> = ({
  icon,
  children,
  className,
  ...restProps
}) => {
  return (
    <button className={cx(styles.button, className)} {...restProps}>
      {icon && <Icon icon={icon} />}
      {children && <Typography.Button>{children}</Typography.Button>}
    </button>
  );
};

export type ButtonLinkProps = { href: string } & ButtonProps;

export { Button };
