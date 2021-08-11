import React from 'react';
import cx from 'classnames';
import IonIcon from '@reacticons/ionicons';
import { RenamePropType } from 'utils/RenamePropType';
import styles from './Icon.module.scss';
import { Typography, TypographyProps } from 'components/Typography';

type IonIconProps = Pick<React.ComponentProps<typeof IonIcon>, 'name'>;
type IconProp = RenamePropType<IonIconProps, 'name', 'icon'>;

export type IconProps = {
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  IconProp;

const Icon = ({ icon, children, size = 'sm', ...restProps }: IconProps) => {
  return <IonIcon name={icon} className={cx(styles.icon, styles[size])} />;
};

export { Icon };
