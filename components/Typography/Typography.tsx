import { isEqual } from 'utils/isEqual';
import { Alts, VARIANT_TAGS, VARIANTS, Variants, ALTS } from './variants';

export type TypographyProps = {
  variant?: Variants;
  alt?: Alts;
  children: React.ReactNode;
  tag?: keyof JSX.IntrinsicElements;
};

const Typography = ({
  alt,
  children,
  variant = 'p',
  tag,
  ...restProps
}: TypographyProps): React.ReactElement => {
  const Tag = tag || VARIANT_TAGS[variant];
  let styles = VARIANTS[variant];
  if (isEqual<Alts>('resume', alt)) {
    styles = {
      ...styles,
      ...ALTS.resume,
    };
  }

  return (
    <Tag css={styles} {...restProps}>
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
