import React from 'react';
import NextLink from 'next/link';
import cx from 'classnames';
import typography from 'components/Typography/Typography.module.scss';
import styles from './Link.module.scss';

export type LinkProps = {
  href: string;
  isRoute?: boolean;
  target?: React.HTMLAttributeAnchorTarget;
} & React.HTMLAttributes<HTMLAnchorElement>;

const Link = ({ target, href, isRoute, children, ...restProps }: LinkProps) => {
  target = isRoute ? undefined : '_blank';

  return (
    <NextLink href={href} passHref>
      <a
        className={cx(typography.span, styles.link)}
        target={target}
        referrerPolicy="no-referrer"
        {...restProps}
      >
        {children}
      </a>
    </NextLink>
  );
};

export { Link };
