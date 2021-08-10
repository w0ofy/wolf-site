import React from "react";
import IonIcon from '@reacticons/ionicons';
import { RenamePropType } from 'utils/RenamePropType';
import styles from './Button.module.scss';

type IonIconProps = Pick<React.ComponentProps<typeof IonIcon>, 'name'>;
type Icon = RenamePropType<IonIconProps, 'name', 'icon'>;

export type ButtonProps = {
  children?: React.ReactNode;
} &  React.ButtonHTMLAttributes<HTMLButtonElement> & Icon;

/**
 * This is just an Icon Button, for now
 */
const Button = ({ icon, ...restProps}: ButtonProps) => {
  return (
    <button className={styles.btn} {...restProps} >
      {/** @ts-ignore Icon type should work just fine - @todo investigate why throws a type error */ }
      {icon && <IonIcon name={icon} />}
    </button>
  )
};

export { Button };