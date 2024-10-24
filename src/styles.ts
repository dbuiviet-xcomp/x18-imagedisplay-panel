import { css } from '@emotion/css';

/**
 * Styles
 * @returns 
 */
export const Styles = () => {
    return {
      wrapper: css`
        font-family: Open Sans;
        position: relative;
      `,
      img: css`
        position: absolute;
        top: 0;
        left: 0;
      `,
      textBox: css`
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 10px;
      `,
    };
  };
