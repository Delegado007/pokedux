import { css } from 'styled-components';
import Knewave from './fonts/knewave-v14-latin-regular.woff2';

export const FontKnewave = css`
  /* knewave-regular - latin */
  @font-face {
  font-family: 'Knewave';
  font-style: normal;
  font-weight: 400;
  src: url(${Knewave}); /* IE9 Compat Modes */
}
`