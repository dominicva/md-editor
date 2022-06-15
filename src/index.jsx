import React from 'react';
import ReactDOM from 'react-dom/client';

import { ChakraProvider } from '@chakra-ui/react';
import theme from './lib/theme';

import '@fontsource/roboto';
import '@fontsource/roboto-mono';
import '@fontsource/roboto-slab';

import App from './App';

console.log('theme:', theme);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
