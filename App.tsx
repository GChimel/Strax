import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native'
import theme from './src/theme/index';
import { Loading } from './src/components/Loading';

import { useFonts, Inter_400Regular, Inter_700Bold} from '@expo-google-fonts/inter'

import { Goals } from './src/screens/Goals';
export default function App() {

  // Garantir que será carregado as fontes
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        style='light'
        translucent
        backgroundColor='transparent'
      />
      {fontsLoaded ? <Goals/> : <Loading/>}
    </ThemeProvider>
  );
}