import { Text as TextNative, StyleSheet, useWindowDimensions } from 'react-native';
import { getColor } from '../utils/pokemon-type-colors.js';
import { getFixedSize, getFixedSmallSize, getFixedSubTitleSize, getFixedTitleSize } from '../utils/responsiveness.js';

const styles = StyleSheet.create({
    title: {
        fontFamily: 'RadioCanada-Bold',
    },
    subtitle: {
        fontFamily: 'RadioCanada-SemiBold',
    },
    text: {
        fontFamily: 'RadioCanada',
    },
});

const weights = StyleSheet.create({
    bold: {
        fontFamily: 'RadioCanada-Bold',
    },
    light: {
        fontFamily: 'RadioCanada-Light',
    },
    medium: {
        fontFamily: 'RadioCanada-Medium',
    },
    semibold: {
        fontFamily: 'RadioCanada-SemiBold',
    },
});

const colors = StyleSheet.create({
    white: {
        color: '#fff',
    },
    slate: {
        color: '#303943',
    },
    gray: {
        color: '#b3b5b9',
    },
    complementary: {
        color: '#00a1ff',
    },
});

export const Text = ({ style, weight, small, title, subtitle, color, children, ...restOfProps }) => {
    const { height: h, width: w } = useWindowDimensions();

    const textStyles = [
        { ...styles.text, fontSize: getFixedSize(w) },
        title && { ...styles.title, fontSize: getFixedTitleSize(w) },
        subtitle && { ...styles.subtitle, fontSize: getFixedSubTitleSize(w) },
        small && { fontSize: getFixedSmallSize(w) },
        weight && weights[weight],
        (color && colors[color]) || { color: getColor(color) },
        style && style,
    ];

    return (
        <TextNative style={textStyles} {...restOfProps}>
            {children}
        </TextNative>
    );
};
