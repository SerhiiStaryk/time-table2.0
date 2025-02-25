import { Fragment, ReactNode, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';
import { inputsCustomizations } from './customizations/inputs';
import { dataDisplayCustomizations } from './customizations/dataDisplay';
import { feedbackCustomizations } from './customizations/feedback';
import { navigationCustomizations } from './customizations/navigation';
import { surfacesCustomizations } from './customizations/surfaces';
import { colorSchemes, typography, shadows, shape } from './themePrimitives';

interface AppThemeProps {
  children: ReactNode;
  disableCustomTheme?: boolean;
  themeComponents?: ThemeOptions['components'];
}

export default function AppTheme(props: AppThemeProps) {
  const { children, disableCustomTheme, themeComponents } = props;
  const theme = useMemo(() => {
    return disableCustomTheme
      ? {}
      : createTheme({
          cssVariables: {
            cssVarPrefix: 'template',
            colorSchemeSelector: 'data-mui-color-scheme',
          },
          shape,
          shadows,
          typography,
          colorSchemes,
          components: {
            ...themeComponents,
            ...inputsCustomizations,
            ...feedbackCustomizations,
            ...surfacesCustomizations,
            ...navigationCustomizations,
            ...dataDisplayCustomizations,
          },
        });
  }, [disableCustomTheme, themeComponents]);

  if (disableCustomTheme) return <Fragment>{children}</Fragment>;

  return (
    <ThemeProvider
      theme={theme}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
