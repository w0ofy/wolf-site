import { HeaderActions } from 'components/common';
import { Link } from 'components/Link';

const ResumeActions: React.FC = () => {
  return (
    <HeaderActions
      rightAlignActions={
        <Link
          href="/michael-wolf-resume.pdf"
          icon="download"
          variant="button"
        />
      }
    />
  );
};

export { ResumeActions };
