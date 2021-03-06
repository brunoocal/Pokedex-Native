import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Style = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
    },
    Heading: {
        width: '100%',
        height: hp(12.5),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: wp(5),
        position: 'relative',
        zIndex: 1,
    },
    HeadingTitle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: wp(2),
    },
    Types: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    Type: {
        paddingHorizontal: wp(4),
        paddingVertical: wp(1),
        paddingTop: 0,
        borderRadius: wp(20),
        backgroundColor: 'rgba(255,255,255,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        opacity: 0.7,
        marginRight: wp(2.5),
    },
    PokemonWrapper: {
        width: '100%',
        height: hp(25),
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: -1,
    },
    Image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    Swiper: {
        width: '100%',
        flex: 1,
        borderWidth: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: wp(7.5),
        borderTopRightRadius: wp(7.5),
        paddingTop: wp(12.5),
        paddingHorizontal: wp(5),
        position: 'relative',
        zIndex: 4,
    },
    GestureRoot: {
        width: '100%',
        flex: 1,
    },
});
