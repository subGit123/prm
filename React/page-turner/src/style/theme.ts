export type ThemeName = 'light' | 'dark';
export type ColorKey = 'primary' | 'background' | 'secondary' | 'third';

interface Theme {
  name: ThemeName;
  color: Record<ColorKey, string>;
}

export const light: Theme = {
  name: 'light',
  color: {
    primary: 'brown',
    background: 'lightgrey',
    secondary: 'blue',
    third: 'white',
  },
};

export const dark: Theme = {
  name: 'dark',
  color: {
    primary: 'coral',
    background: 'brown',
    secondary: 'blue',
    third: 'white',
  },
};

export const getTheme = (themeName: ThemeName): Theme => {
  switch (themeName) {
    case 'light':
      return light;
    case 'dark':
      return dark;
  }
};
