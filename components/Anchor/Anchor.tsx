import React from "react";
import typography from 'components/Typography/Typography.module.scss';
import styles from './Anchor.module.scss';
import cx from 'classnames';

export type AnchorProps = {
  target?: React.HTMLAttributeAnchorTarget;
  href: string;
} & React.HTMLAttributes<HTMLAnchorElement>;

const Anchor = ({ target = '_blank', href, ...restProps}: AnchorProps) => {
  return (
    <a
      className={cx(typography.span, styles.anchor)}
      href={href}
      target={target}
      referrerPolicy="no-referrer"
      {...restProps}
    />
  )
}

export { Anchor };