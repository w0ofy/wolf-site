import { typographyStyles, type Alts, type Variants } from './variants';
import * as stylex from '@stylexjs/stylex';

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
  const Tag = tag || variant;

  return (
    <Tag
      {...restProps}
      {...stylex.props(
        typographyStyles.base,
        typographyStyles[variant],
        alt && typographyStyles[alt],
      )}
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

export { Typography, Title, Heading, Span, Sup, Button };
