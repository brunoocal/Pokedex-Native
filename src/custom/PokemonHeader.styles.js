import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Style = StyleSheet.create({
    Header: {
        width: '100%',
        height: hp('10%'),
        paddingHorizontal: wp('5%'),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    Icon: {
        width: wp('7%'),
        height: wp('7%'),
        color: '#fff',
    },
});
