import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, AsyncStorage } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { NavigationStackProp } from 'react-navigation-stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Surface, Button, TextInput } from 'react-native-paper';
import { AuthRoutes } from '../common/constants/routes';
import { Spacing, Buttons, Common, Typography } from '../styles';

type Props = {
    navigation: NavigationStackProp;
};

export function LoginScreen(props: Props) {
    const { navigation } = props;

    const [email, setEmail] = useState();

    return (
        <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled={false}
            contentContainerStyle={styles.container}
        >
            <Text style={[styles.subtitleText, { ...Spacing.verticalMargin }]}>
                Login with your organization's email
                </Text>
            <Surface style={styles.loginCard}>
                <TextInput
                    style={{ width: '100%', marginTop: Spacing.base }}
                    theme={{ colors: { primary: 'grey' } }}
                    label='Email [foo@bar.org]'
                    mode='outlined'
                    autoCompleteType='email'
                    keyboardType='email-address'
                    onSubmitEditing={() => login()}
                    value={email}
                    onChangeText={(text: string) => setEmail(text)}
                />
                <Button uppercase={false} style={styles.continueButton} mode='contained' onPress={() => login()}>
                    <Text style={styles.continueButtonText}>Continue</Text>
                </Button>
            </Surface>
        </KeyboardAwareScrollView>
    );

    async function login(): Promise<void> {
        if (email !== 'foo@bar.org') {
            alert('Invalid email!');
            return;
        }
        await setUser({ accessToken: '12345', userId: 'foo@bar.org' });
        navigation.navigate(AuthRoutes.App);
    }

    async function setUser({ accessToken, userId }: { accessToken: string; userId: string }): Promise<void> {
        await AsyncStorage.setItem('accessToken', accessToken);
        await AsyncStorage.setItem('email', userId);
    }
}

const styles = StyleSheet.create({
    container: { flexDirection: 'column', alignItems: 'center' },
    subtitleText: {
        ...Typography.subtitleText,
        textAlign: 'center',
    },
    footerText: { width: 300, textAlign: 'center', marginTop: Spacing.base, marginBottom: Spacing.small },
    loginText: {
        ...Typography.loginTitle,
        textAlign: 'center',
    },
    loginCard: {
        marginTop: Spacing.base,
        width: wp(91),
        elevation: 10,
        ...Common.rounded,
        ...Spacing.horizontalPadding,
    },
    continueButton: {
        marginTop: hp(2),
        marginBottom: 15,
        ...Buttons.base,
    },
    continueButtonText: { ...Typography.button },
    logo: { marginTop: hp(5) },
});
