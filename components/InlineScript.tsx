import React from 'react';

const InlineScript = ({ children }: { children: any }) => (
  <script dangerouslySetInnerHTML={{ __html: `(${children.toString()})();` }} /> // eslint-disable-line
);

export { InlineScript };
