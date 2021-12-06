import styled from '@emotion/styled';

const StyledNav = styled.nav`
  display: flex;
  padding: 3rem 0;
`;

export type NavProps = {
  children: React.ReactNode;
};

const Nav = ({ children }: NavProps): React.ReactElement => {
  return <StyledNav>{children}</StyledNav>;
};

export { Nav };
