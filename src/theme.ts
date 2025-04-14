// src/theme.ts
import { createTheme } from '@aws-amplify/ui-react';

export const appTheme = createTheme({
  name: 'bar-ilan-theme',
  tokens: {
    fonts: {
      default: {
        variable: 'Arial, "Noto Sans Hebrew", sans-serif',
      },
    },
    colors: {
      brand: {
        primary: {
          10: '#e0f2f1',
          80: '#00796b',
        },
      },
    },
    components: {
      button: {
        primary: {
          backgroundColor: '{colors.brand.primary.80}',
          color: 'white',
          _hover: {
            backgroundColor: '{colors.brand.primary.10}',
          },
        },
      },
    },
  },
});