import { useFonts } from 'expo-font';
import { NativeRouter } from 'react-router-native';
import { Main } from './src/Main';
import { LogBox } from 'react-native';

export default function App() {
    LogBox.ignoreLogs(['Setting a timer']);

    const [loaded] = useFonts({
        RadioCanada: require('./assets/fonts/RadioCanada-Regular.ttf'),
        'RadioCanada-Bold': require('./assets/fonts/RadioCanada-Bold.ttf'),
        'RadioCanada-Light': require('./assets/fonts/RadioCanada-Light.ttf'),
        'RadioCanada-Medium': require('./assets/fonts/RadioCanada-Medium.ttf'),
        'RadioCanada-SemiBold': require('./assets/fonts/RadioCanada-SemiBold.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <NativeRouter>
            <Main />
        </NativeRouter>
    );
}
