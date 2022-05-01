import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Style = StyleSheet.create({
    Card: {
        justifyContent: 'flex-start',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        width: wp(38.8),
        height: hp(13.8),
        marginVertical: hp(0.8912),
        marginHorizontal: wp(1.8518),
        borderRadius: wp(1.8518),
        paddingVertical: hp(2.2281),
        paddingHorizontal: wp(4.6296),
    },
    Name: {
        marginBottom: wp(0.25),
        position: 'relative',
        zIndex: 2,
    },
    Type: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        color: 'rgba(255, 255, 255, 0.8)',
        alignSelf: 'flex-start',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2,
        paddingVertical: hp(0.22),
        paddingHorizontal: wp(2.77),
        borderRadius: wp(4.6296),
        marginBottom: wp(1.8518),
    },
    AbsoluteContainer: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp(0.8912),
        marginLeft: wp(1.8518),
    },
    Sprite: {
        bottom: '-20%',
        right: '-35%',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        zIndex: 1,
        position: 'absolute',
    },
    PokeballBackground: {
        bottom: '-50%',
        right: '-60%',
        width: '140%',
        height: '140%',
        resizeMode: 'contain',
        zIndex: 1,
        position: 'absolute',
        opacity: 0.6,
    },
});