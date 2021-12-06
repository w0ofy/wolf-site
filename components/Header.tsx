import styled from '@emotion/styled';
import { Logo } from 'components/Logo';
import { ThemeSwitcher } from './Theme';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 3rem 0;
  width: 100%;
  height: auto;
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Logo width={60} />
      <ThemeSwitcher style={{ alignSelf: 'flex-start' }} />
    </StyledHeader>
  );
};

export { Header };
