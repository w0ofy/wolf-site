type ClassName = string | false | null | undefined;

/**
 * Joins the class names that are actually present. Components own a
 * vanilla-extract class and still have to honour a `className` passed in
 * from a parent.
 */
const cx = (...classNames: ClassName[]): string =>
  classNames.filter(Boolean).join(' ');

export { cx };
