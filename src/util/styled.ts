import baseStyled, { ThemedStyledInterface } from 'styled-components';
import QixColor from 'color';

export class Color {
  private color: QixColor;

  constructor(colorValue: string) {
    this.color = QixColor(colorValue);
  }

  opacity = (percentage: number) => {
    return this.color.alpha(percentage).string();
  };

  toString() {
    return this.color.string();
  }
}

export const theme = {
  colors: {
    white: new Color('#FAFAFC'),
    primary: new Color('#1C1B24'),
    accent: new Color('#4B67FF'),
    danger: new Color('#EB4848'),
    black: new Color('#000')
  },
  devices: {
    mobileS: '320px',
    mobileL: '425px'
  }
};

export type Theme = typeof theme;

export default baseStyled as ThemedStyledInterface<Theme>;
