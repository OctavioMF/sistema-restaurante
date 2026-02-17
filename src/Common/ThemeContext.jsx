import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function ThemeContext({ children }) {
    const [mode, setMode] = React.useState('dark');

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}