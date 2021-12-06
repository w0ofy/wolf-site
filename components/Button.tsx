import styled from '@emotion/styled';
import { Typography } from 'components/Typography';
import { Icon, IconProps } from 'components/Icon';
import { css } from '@emotion/react';

const buttonStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: auto;
  padding: 0.8rem 1.4rem;
  border: 0.5px solid var(--border-color);
  border-radius: 0.8rem;
  color: var(--font-color);
  background-color: var(--btn-bg-color);
  box-shadow: var(--btn-shadow);
  font-size: 1.4rem;
  transition: all 0.25s ease-in-out;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: var(--btn-hover-bg-color);
  }
`;

const StyledButton = styled.button(buttonStyles);

export type ButtonProps = {
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<Pick<IconProps, 'icon'>>;

const Button: React.FC<ButtonProps> = ({ icon, children, ...restProps }) => {
  return (
    <StyledButton {...restProps}>
      {icon && <Icon icon={icon} />}
      {children && <Typography.Button>{children}</Typography.Button>}
    </StyledButton>
  );
};

export type ButtonLinkProps = { href: string } & ButtonProps;

export { Button, buttonStyles };
