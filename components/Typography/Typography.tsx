import React from 'react';
import styles from './Typography.module.scss';


type TypographyProps = {
  tag?: 'h1' | 'h2' | 'h3' | 'span' | 'p' | 'sup';
  children: React.ReactNode;
}

const Typography = ({ children, tag = 'p' }: TypographyProps) => {
  const Tag = tag;
  return (
    <Tag className={styles[tag]}>{children}</Tag>
  )
};

type TypographyComponentProps<T> = React.HTMLAttributes<T> & Pick<TypographyProps, 'children'>;

const Title = (props: TypographyComponentProps<HTMLDivElement>) => <Typography tag="h1" {...props} />;
const Heading = (props: TypographyComponentProps<HTMLHeadingElement>) => <Typography tag="h3" {...props} />;
const Span = (props: TypographyComponentProps<HTMLSpanElement>) => <Typography tag="span" {...props} />;
const Sup = (props: TypographyComponentProps<HTMLElement>) => <Typography tag="sup" {...props} />;

Typography.Title = Title;
Typography.Heading = Heading;
Typography.Span = Span;
Typography.Sup = Sup;

export { Typography };