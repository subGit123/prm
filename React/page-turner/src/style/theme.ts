import 'styled-components';
import {DefaultTheme} from 'styled-components';

export type ThemeName = 'light' | 'dark';
export type ColorKey =
  | 'primary'
  | 'background'
  | 'secondary'
  | 'third'
  | 'border'
  | 'text';
export type HeadingSize = 'large' | 'medium' | 'small';
export type ButtonSize = 'large' | 'medium' | 'small';
export type ButtonScheme = 'primary' | 'normal';
export type LayoutWidth = 'large' | 'medium' | 'small';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: ThemeName;
    color: Record<ColorKey, string>;
    heading: {
      [key in HeadingSize]: {
        fontSize: string;
      };
    };
    button: {
      [key in ButtonSize]: {
        fontSize: string;
        padding: string;
      };
    };
    buttonScheme: {
      [key in ButtonScheme]: {
        color: string;
        backgroundColor: string;
      };
    };
    borderRadius: {
      default: string;
    };
    layout: {
      width: {
        [key in LayoutWidth]: string;
      };
    };
  }
}

export const light: DefaultTheme = {
  name: 'light',
  color: {
    primary: '#1A237E',
    background: '#283593',
    secondary: 'lightgreen',
    third: 'green',
    border: 'grey',
    text: 'black',
  },
  heading: {
    large: {
      fontSize: '2rem',
    },
    medium: {
      fontSize: '1.5rem',
    },
    small: {
      fontSize: '1rem',
    },
  },
  button: {
    large: {
      fontSize: '1.5rem',
      padding: '1rem 2rem',
    },
    medium: {
      fontSize: '1.0rem',
      padding: '0.5rem 1rem',
    },
    small: {
      fontSize: '0.75rem',
      padding: '0.25rem 0.5rem',
    },
  },
  buttonScheme: {
    primary: {
      color: 'white',
      backgroundColor: 'midnightblue',
    },
    normal: {
      color: 'balck',
      backgroundColor: 'lightgrey',
    },
  },
  borderRadius: {
    default: '4px',
  },
  layout: {
    width: {
      large: '1020px',
      medium: '760px',
      small: '320px',
    },
  },
};

export const dark: DefaultTheme = {
  ...light,
  name: 'dark',
  color: {
    primary: 'coral',
    background: 'brown',
    secondary: 'blue',
    third: 'white',
    border: 'grey',
    text: 'black',
  },
};

export const getTheme = (themeName: ThemeName): DefaultTheme => {
  switch (themeName) {
    case 'light':
      return light;
    case 'dark':
      return dark;
  }
};
