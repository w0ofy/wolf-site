import { css, Global } from '@emotion/react';
import { normalizeStyles } from './normalizeStyles';

const styles = css`
  :root.light {
    --font-color: #0e0e0e;
    --bg-color: #fefefe;
    --link-color: #0e0e0e;
    --link-hover-color: #3341ff;
    --link-border-color: rgba(14, 14, 14, 0.2);
    --title-color: #0e0e0e;
    --subtitle-color: #3341ff;
    --btn-bg-color: #eaeaea;
    --btn-hover-bg-color: #c2c2c2;
    --btn-shadow: rgba(14, 14, 14, 0.05) 0px 1px 0px;
    --border-color: rgba(14, 14, 14, 0.05);
  }

  :root.dark {
    --font-color: #fefefe;
    --bg-color: #0e0e0e;
    --link-color: #fefefe;
    --link-hover-color: #6d77ff;
    --link-border-color: rgba(254, 254, 254, 0.2);
    --title-color: #fefefe;
    --subtitle-color: #6d77ff;
    --subtle-color: #5c5c5c;
    --btn-bg-color: #3e3e3e;
    --btn-hover-bg-color: #5c5c5c;
    --btn-shadow: rgba(234, 234, 234, 0.05) 0px 1px 0px;
    --border-color: rgba(234, 234, 234, 0.2);
  }

  ::selection {
    background: var(--font-color);
    color: var(--bg-color);
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    background: var(--bg-color);
    color: var(--font-color);
  }

  body {
    background: radial-gradient(
        circle at 15% 50%,
        #6d77ff1a,
        rgba(255, 255, 255, 0) 25%
      ),
      radial-gradient(
        circle at 85% 30%,
        rgba(204, 242, 246, 0.05),
        rgba(255, 255, 255, 0) 25%
      );
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    html {
      font-size: 0.5rem;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    html {
      font-size: 0.55rem;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    html {
      font-size: 0.625rem;
    }
  }
`;
export const globalStyles = (
  <>
    <Global styles={normalizeStyles} />
    <Global styles={styles} />
  </>
);
