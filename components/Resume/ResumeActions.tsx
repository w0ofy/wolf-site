import { Link } from 'components/Link';
import { HeaderActions } from 'components/common';

const ResumeActions: React.FC = () => {
  return (
    <HeaderActions
      rightAlignActions={
        <Link href="/michael-wolf-resume.pdf" icon="download" variant="button" />
      }
    />
  );
};

export { ResumeActions };
