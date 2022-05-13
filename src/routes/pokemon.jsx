import { useState, useEffect, useCallback } from 'react';
import { View, Image } from 'react-native';
import { Text } from '../custom/Text';
import { Style } from './Pokemon.styles';
import { capitalize } from '../utils/misc';
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    withSpring,
} from 'react-native-reanimated';
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';

const parseId = (id) => {
    return id.toString().padStart(3, '0');
};

const getSprite = (id) => {
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`;
};

const addKeys = (id) => {
    const parsedId = parseId(id);
    return {
        parsedId,
        sprite: getSprite(parsedId),
    };
};

export const Pokemon = ({ route }) => {
    const [pokemon] = useState({
        ...route.params.pokemon,
        ...addKeys(route.params.pokemon.id),
    });

    const translationY = useSharedValue(0);
    const updatesToConfirmMovement = useSharedValue(0);
    const movingUp = useSharedValue(false);
    const goingToAnimate = useSharedValue(false);

    const panGestureEvent = useAnimatedGestureHandler({
        onStart: (event, context) => {
            console.log('START', context);
            translationY.value = 0;
            updatesToConfirmMovement.value = 0;
            movingUp.value = context?.movingUp ?? false;
            goingToAnimate.value = context?.goingToAnimate ?? false;
            context.movingUp = false;
            context.goingToAnimate = false;
        },
        onActive: (event, context) => {
            translationY.value = event.translationY;
            if (!context.goingToAnimate) {
                if (updatesToConfirmMovement.value >= 5) {
                    goingToAnimate.value = true;
                    movingUp.value = context.movingUp;
                    context.goingToAnimate = true;
                } else {
                    context.movingUp = translationY.value < 0;
                    updatesToConfirmMovement.value++;
                }
            }

            console.log('ACTIVE', {
                translationY: translationY.value,
                updatesToConfirmMovement: updatesToConfirmMovement.value,
                movingUp: movingUp.value,
                goingToAnimate: goingToAnimate.value,
            });
        },
        onEnd: (event, context) => {
            console.log('END', context);
            context.goingToAnimate = goingToAnimate.value;
            context.movingUp = movingUp.value;
        },
    });

    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: withSpring(goingToAnimate.value && movingUp.value ? -100 : 0, {
                        damping: 20,
                        mass: 1,
                        stiffness: 100,
                    }),
                },
            ],
        };
    });

    return (
        <View style={[Style.Container, { backgroundColor: pokemon.color }]}>
            <View style={Style.Heading}>
                <View style={Style.HeadingTitle}>
                    <Text color="white" title>
                        {capitalize(pokemon.name)}
                    </Text>
                    <View style={Style.Types}>
                        {pokemon.types.map((type) => (
                            <Text key={type} weight="semibold" style={Style.Type}>
                                {capitalize(type)}
                            </Text>
                        ))}
                    </View>
                </View>
                <View>
                    <Text color="white" subtitle>
                        #{pokemon.parsedId}
                    </Text>
                </View>
            </View>
            <View style={Style.PokemonWrapper}>
                <Image style={Style.Image} source={{ uri: pokemon.sprite }} />
            </View>
            <GestureHandlerRootView style={Style.GestureRoot}>
                <PanGestureHandler maxPointers={1} onGestureEvent={panGestureEvent}>
                    <Animated.View style={[Style.Swiper, rStyle]}>
                        <Text>About</Text>
                    </Animated.View>
                </PanGestureHandler>
            </GestureHandlerRootView>
        </View>
    );
};
