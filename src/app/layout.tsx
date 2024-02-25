import 'styles/global.scss';

import type { Metadata } from 'next';
import Script from 'next/script';
import { PageContainer } from 'components/common';

type RootLayoutProps = {
  children: React.ReactNode;
};

function HomeLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <Script
          id="init-theme"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function () {
              const html = document?.querySelector("html")?.classList;
              const initialPreset =
                window.localStorage.getItem('themikewolf-theme') || 'dark';
              html?.add(initialPreset);
            })();`,
          }}
        />
      </head>
      <body>
        <PageContainer>{children}</PageContainer>
        <Script
          noModule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        />
      </body>
    </html>
  );
}

const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: 'Engineering Dude | Mike Wolf',
    description:
      'Mike Wolf | Staff Software Engineer, Frontend based in New Jersey',
  };
};

export { generateMetadata };
export default HomeLayout;
