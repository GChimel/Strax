import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native'
import theme from './src/theme/index';

import { Goals } from './src/screens/Goals';
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        style='light'
        translucent
        backgroundColor='transparent'
      />
      <Goals/>
    </ThemeProvider>
  );
}