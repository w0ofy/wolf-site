/**
 * Utility for attaching static (components) to existing higher order component objects.
 *
 * Example:
 * ```typescript
 *
 * const Button: WithStatics<
 *  React.ForwardRefExoticComponent<ButtonProps>,
 *  { Link: typeof Link }> = () => forwardRef(
 *    (props, ref) => (<button ref={ref}/>)
 * )
 * const Link = () => <a ... />
 * Button.Link = Link
 * ```
 */
export type WithStatics<
  C extends React.ComponentType<any>,
  StaticCmps extends {
    [attachedComponents: string]: React.ComponentType<any>;
  } = {}
> = C & StaticCmps;
