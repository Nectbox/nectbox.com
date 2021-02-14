const theme = {
  dimensions: {
    width: '1380px',
  },
  colors: {
    background: {
      light: '#f7fafc',
      lightGray: '#edf2f7',
      dark: '#1a202c',
      gray: '#e2e8f0',
      shadow: '#da3654',
    },
    text: {
      light: '#f7fafc',
      dark: '#1a202c',
      gray: '#4A5568',
      lightGray: '#718096',
    },
    accent: {
      red: '#da3654',
      darkPurple: '#44337a',
      purple: '#7F43AD',
    },
  },
  gradients: {
    purple: 'linear-gradient(180deg, #4C1BCF 0%, #7F43AD 85%)',
    purpleish: 'linear-gradient(180deg, #FF858F 7%, #F83C97 90%)',
    red: 'linear-gradient(180deg, #FF8D7E 0%, #FB5760 70%)',
    black: 'linear-gradient(180deg, #2D3748 0%, #1a202c 70%)',
  },
  fonts: {
    default: 'Poppins',
    heading: 'Mitr',
  },
  transitions: {
    curve: {
      /** No curve. Good for color/opacity fades */
      linear: `linear`,
      /** Slight curve. Good for subtle transitions */
      ease: `ease`,
      /** Starts fast and decelerates as it progresses */
      scaleIn: `cubic-bezier(0, 0.89, 0.44, 1)`,
      /** Starts slow and accelerates as it progresses */
      scaleOut: `cubic-bezier(0.165, 0.84, 0.44, 1)`,
      /** Springy feel. Good for drawing focus */
      scaleUp: `cubic-bezier(0.68, -0.55, 0.265, 1.55)`,
      default: `cubic-bezier(0.4, 0, 0.2, 1)`,
      decelerate: `cubic-bezier(0.1 , 0.9 , 0.2 , 1)`,
      accelerate: `cubic-bezier(0.7 , 0 , 1 , 0.5)`,
    },
    speed: {
      s: `80ms`,
      m: `150ms`,
      l: `300ms`,
      xl: `500ms`,
      xxl: `700ms`,
      default: `250ms`,
      fast: `150ms`,
      slow: `500ms`,
    },
  },
  shadows: {
    medium: '0 8px 30px rgba(0,0,0,0.12)',
  },
  breakpoints: {
    /** 480px */
    xs: '30em',
    /** 592px */
    sm: '37em',
    /** 768px */
    md: '48em',
    /** 992px */
    lg: '62em',
    /** 1280px */
    xl: '80em',
    /** 1536px */
    '2xl': '96em',
  },
};

export type Theme = typeof theme;

export const width = theme.dimensions.width;
export const colors = theme.colors;
export const gradients = theme.gradients;
export const fonts = theme.fonts;
export const transitions = theme.transitions;
export const shadows = theme.shadows;
export const breakpoints = theme.breakpoints;

export default theme;
