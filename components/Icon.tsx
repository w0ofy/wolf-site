import IonIcon from '@reacticons/ionicons';
import type { RenamePropType } from 'utils/RenamePropType';
import * as styles from './Icon.css';

type IonIconProps = Pick<React.ComponentProps<typeof IonIcon>, 'name'>;
type IconProp = RenamePropType<IonIconProps, 'name', 'icon'>;

export type IconProps = {
  size?: 'sm' | 'md' | 'lg';
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  IconProp;

const Icon: React.FC<IconProps> = ({ icon, size = 'sm' }) => {
  return <IonIcon name={icon} className={styles.size[size]} />;
};

export { Icon };
