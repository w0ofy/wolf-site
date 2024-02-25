'use client';

import IonIcon from '@reacticons/ionicons';
import * as stylex from '@stylexjs/stylex';

const iconStyles = stylex.create({
  sm: {
    height: '2rem',
    width: '2rem',
  },
  md: {
    height: '3rem',
    width: '3rem',
  },
  lg: {
    height: '5rem',
    width: '5rem',
  },
});

type IonIconProps = {
  name: React.ComponentPropsWithoutRef<typeof IonIcon>['name'];
};

export type IconProps = {
  size?: 'sm' | 'md' | 'lg';
  icon: IonIconProps['name'];
};

const Icon: React.FC<IconProps> = ({ icon, size = 'sm' }) => {
  return <IonIcon name={icon} {...stylex.props(iconStyles[size])} />;
};

export { Icon };
