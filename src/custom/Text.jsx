import { Text as TextNative, StyleSheet } from 'react-native';
import { getColor } from '../utils/pokemon-type-colors.js';

const styles = StyleSheet.create({
    title: {
        fontFamily: 'RadioCanada-Bold',
        fontSize: 50,
    },
    subtitle: {
        fontFamily: 'RadioCanada-SemiBold',
        fontSize: 22.5,
    },
    text: {
        fontFamily: 'RadioCanada',
        fontSize: 18,
    },
    small: {
        fontFamily: 'RadioCanada',
        fontSize: 14,
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
    const textStyles = [
        styles.text,
        title && styles.title,
        subtitle && styles.subtitle,
        small && styles.small,
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
