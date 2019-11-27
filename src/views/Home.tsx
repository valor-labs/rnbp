import React from 'react';
import { useGlobalDispatch, State } from '../context/context';
import { RootRoutes } from '../common/constants/routes';
import { View, Button, StyleSheet, ScrollView } from 'react-native';
import { Spacing, Typography, Buttons } from '../styles';
import { NavigationStackProp } from 'react-navigation-stack';
import { AuthRoutes } from '../common/constants/routes';
import { HomeHeader } from '../components/Home-header';
import { REMOVE_JOKES } from '../context/actions/selected-jokes.actions';
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

type Props = {
    navigation: NavigationStackProp;
};

export function HomeScreen({ navigation }: Props) {
    const jokesDispatch = useGlobalDispatch(State.Jokes);

    return (
        <View>
            <HomeHeader navigate={() => navigation.navigate(AuthRoutes.Login)} />
            <ScrollView style={styles.content}>
                <Button
                    title="View random joke"
                    mode='text'
                    uppercase={false}
                    theme={{ colors: { primary: 'white' } }}
                    style={[styles.optionButton, { marginBottom: 16 }]}
                    onPress={() => navigation.navigate(RootRoutes.ViewJoke)}
                >
                </Button>
                <Button
                    title="My List of Jokes"
                    mode='text'
                    uppercase={false}
                    theme={{ colors: { primary: 'white' } }}
                    style={styles.optionButton}
                    onPress={() => navigation.navigate(RootRoutes.JokesList)}
                >
                </Button>
                <Button
                    title="Remove All Jokes"
                    mode='text'
                    uppercase={false}
                    theme={{ colors: { primary: 'white' } }}
                    style={styles.optionButton}
                    onPress={() => jokesDispatch({ type: REMOVE_JOKES })}
                >
                </Button>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    content: { padding: Spacing.base },
    title: { ...Typography.title, marginBottom: 24 },
    optionButton: {
        ...Buttons.base/*,
        margin: 5,
        width: wp(50),
        height: hp(50)*/
    },
});

