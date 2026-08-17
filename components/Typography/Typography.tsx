import { isEqual } from 'utils/isEqual';
import { cx } from 'utils/cx';
import { Alts, VARIANT_TAGS, Variants } from './variants';
import { alts, variants } from './variants.css';

export type TypographyProps = {
  variant?: Variants;
  alt?: Alts;
  children: React.ReactNode;
  tag?: keyof React.JSX.IntrinsicElements;
  className?: string;
};

const Typography = ({
  alt,
  children,
  variant = 'p',
  tag,
  className,
  ...restProps
}: TypographyProps): React.ReactElement => {
  const Tag = tag || VARIANT_TAGS[variant];
  /**
   * `alt` replaces the variant styles rather than extending them — that is
   * what the Emotion implementation did, because it spread `SerializedStyles`
   * objects rather than the CSS they described.
   */
  const styles = isEqual<Alts>('resume', alt) ? alts.resume : variants[variant];

  return (
    <Tag className={cx(styles, className)} {...restProps}>
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
