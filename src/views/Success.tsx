import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Footer } from '../components/shared/Footer';
import { Button } from 'react-native-paper';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Check from '../assets/icons/check_circle.svg';
import { NavigationStackProp } from 'react-navigation-stack';
import { RootRoutes } from '../common/constants/routes';
import { Spacing, Typography, Colors, Common } from '../styles';
type Props = {
    navigation: NavigationStackProp;
};
export function SuccessScreen({ navigation }: Props) {
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Check width={56} height={56} />
                <Text style={styles.message}>Your data was successfully saved</Text>
            </View>
            <Footer>
                <Button style={styles.confirmButton} mode='contained' onPress={handlePress}>
                    <Text style={styles.buttonText}>Ok</Text>
                </Button>
            </Footer>
        </View>
    );

    function handlePress() {
        navigation.navigate(RootRoutes.Home);
    }
}
const styles = StyleSheet.create({
    wrapper: Spacing.wrapper,
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    subtitle: {
        ...Typography.baseText,
        color: 'white',
        width: 269,
        textAlign: 'center',
        marginTop: Spacing.small,
    },

    buttonText: { ...Typography.button, color: 'white' },
    confirmButton: {
        ...Common.rounded,
        borderColor: 'white',
        backgroundColor: Colors.green,
        width: wp(93),
    },
    message: {
        ...Typography.categoryTitle,
        width: 173,
        textAlign: 'center',
        marginTop: Spacing.large,
    },
});
