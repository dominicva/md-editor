import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    // primary: '#020203',
    primary: '#0d1117',
    secondary: '#19252e',
    // accent: '#FA3737',
    accent: '#f9826c',
    // accentHover: '#FB6060',
    accentHover: '#f9826c',
    javascript: '#ffa657',

    neutral: {
      100: '#ffffff',
      200: '#f5f5f5',
      300: '#e4e4e4',
      400: '#c1c4cb',
      500: '#7c8187',
      600: '#5A6069',
      700: '#35393F',
      800: '#2B2D31',
      900: '#1D1F22',
      1000: '#151619',
    },
    orange: '#E46643',
    orangeHover: '#F39765',
  },
  fonts: {
    body: `'Nunito', sans-serif`,
    heading: `'Nunito Sans', monospace`,
    mono: `'Roboto Mono', monospace`,
    app: `'Roboto', sans-serif`,
  },
  styles: {
    global: props => ({
      '#root': {
        overflow: 'hidden',
      },
      'html, body': {
        color: props.colorMode === 'dark' ? 'neutral.300' : 'neutral.700',
        bg: props.colorMode === 'dark' ? 'primary' : 'neutral.100',
        fontSize: '18px',
      },
      h1: {
        letterSpacing: '2px',
        fontSize: '40px !important',
      },
      h2: {
        letterSpacing: '1px',
        fontSize: '32px !important',
      },
      h3: {
        fontSize: '26px !important',
      },
      h4: {
        fontSize: '22px !important',
      },
      h5: {
        fontSize: '20px !important',
      },
    }),
  },
});

export default theme;
