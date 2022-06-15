import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: '#020203',
    secondary: '#020203',
    accent: '#FA3737',
    accentHover: '#FB6060',

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
    body: `'Roboto Slab', serif`,
    heading: `'Roboto Slab', serif`,
    mono: `'Roboto Mono', monospace`,
    app: `'Roboto', sans-serif`,
  },
  styles: {
    global: props => ({
      '#root': {
        overflow: 'hidden',
      },
      'html, body': {
        color: props.colorMode === 'dark' ? 'neutral.400' : 'neutral.700',
        bg: props.colorMode === 'dark' ? 'primary' : 'neutral.100',
      },
    }),
  },
});

export default theme;
