import cx from 'classnames';
import styles from './Typography.module.scss';
import { isEqual } from 'utils/isEqual';

const TAGS: Record<string, any> = {
  h1: 'h1',
  h3: 'h3',
  span: 'span',
  p: 'p',
  sup: 'sup',
  button: 'span',
};
const ALTERNATES = ['resume'] as const;

type Alt = typeof ALTERNATES[number];
type Variants = keyof typeof TAGS;
export type TypographyProps = {
  variant?: Variants;
  alt?: Alt;
  children: React.ReactNode;
};

const Typography = ({ alt, children, variant = 'p' }: TypographyProps) => {
  const Tag = TAGS[variant];
  return (
    <Tag
      className={cx(styles[variant], {
        [styles.resume]: isEqual<Alt>('resume', alt),
      })}
    >
      {children}
    </Tag>
  );
};

type TypographyComponentProps<T> = React.HTMLAttributes<T> &
  Pick<TypographyProps, 'children' | 'alt'>;

const Title = (props: TypographyComponentProps<HTMLDivElement>) => (
  <Typography variant="h1" {...props} />
);
const Heading = (props: TypographyComponentProps<HTMLHeadingElement>) => (
  <Typography variant="h3" {...props} />
);
const Span = (props: TypographyComponentProps<HTMLSpanElement>) => (
  <Typography variant="span" {...props} />
);
const Button = (props: TypographyComponentProps<HTMLSpanElement>) => (
  <Typography variant="button" {...props} />
);
const Sup = (props: TypographyComponentProps<HTMLElement>) => (
  <Typography variant="sup" {...props} />
);

Typography.Title = Title;
Typography.Heading = Heading;
Typography.Span = Span;
Typography.Sup = Sup;
Typography.Button = Button;

export { Typography };
