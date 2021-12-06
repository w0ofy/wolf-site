import IonIcon from '@reacticons/ionicons';
import { RenamePropType } from 'utils/RenamePropType';
import styled from '@emotion/styled';

const getSize = ({ size }: Pick<IconProps, 'size'>) => {
  if (size === 'sm') {
    return '2rem';
  } else if (size === 'md') {
    return '3rem';
  } else if (size === 'lg') {
    return '5rem';
  }
};

const StyledIonIcon = styled(IonIcon)<Omit<IconProps, 'icon'> & IonIconProps>`
  height: ${getSize} !important;
  width: ${getSize} !important;
`;

type IonIconProps = Pick<React.ComponentProps<typeof IonIcon>, 'name'>;
type IconProp = RenamePropType<IonIconProps, 'name', 'icon'>;

export type IconProps = {
  size?: 'sm' | 'md' | 'lg';
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  IconProp;

const Icon: React.FC<IconProps> = ({ icon, size = 'sm' }) => {
  return <StyledIonIcon name={icon} size={size} />;
};

export { Icon };
