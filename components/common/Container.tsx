import { cx } from 'utils/cx';
import * as styles from './Container.css';

export type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

const Container: React.FC<ContainerProps> = ({
  className,
  children,
  ...restProps
}) => {
  return (
    <div className={cx(styles.container, className)} {...restProps}>
      {children}
    </div>
  );
};

export { Container };
