import React from 'react';

const InlineScript: React.FC<{ children: any }> = ({ children }) => (
  <script dangerouslySetInnerHTML={{ __html: `(${children.toString()})();` }} /> // eslint-disable-line
);

export { InlineScript };
