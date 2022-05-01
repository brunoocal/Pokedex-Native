import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Style = StyleSheet.create({
    Home: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    Wrapper: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: wp(7.407),
    },
    Icons: {
        width: '100%',
        height: wp(3),
        marginTop: wp(3),
        marginBottom: wp(1.1),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    Icon: {
        width: wp(3),
        height: wp(3),
    },
    PokemonsWrapper: {
        flex: 1,
        width: '100%',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Heading: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        marginBottom: wp(3.25),
    },
});
