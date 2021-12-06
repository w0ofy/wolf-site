import styled from '@emotion/styled';
import { Link } from 'components/Link';
import { ThemeSwitcher } from 'components/Theme';
import { ROUTES } from 'constants/routes';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 3rem;
`;

const ActionsGroup = styled.div`
  display: flex;
  > a {
    margin-right: 1rem;
  }
`;

const ActionLink = styled(Link)`
  margin-right: 1rem;
`;

type HeaderActionsProps = {
  rightAlignActions?: React.ReactNode;
};

const HeaderActions: React.FC<HeaderActionsProps> = ({
  rightAlignActions,
}: HeaderActionsProps) => {
  return (
    <Container>
      <ActionsGroup>
        <ActionLink icon="home" to={ROUTES.HOME} variant="button" />
      </ActionsGroup>
      <ActionsGroup>
        {rightAlignActions && rightAlignActions}
        <ThemeSwitcher />
      </ActionsGroup>
    </Container>
  );
};

export { HeaderActions };
