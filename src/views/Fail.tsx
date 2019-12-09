import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Footer } from '../components/shared/Footer';
import { Button } from 'react-native-paper';
import Refresh from '../assets/icons/refresh_cw.svg';
import { NavigationStackProp } from 'react-navigation-stack';
import { RootRoutes } from '../common/constants/routes';
import { Spacing, Common, Colors, Typography } from '../styles';
type Props = {
    navigation: NavigationStackProp;
};
export function FailScreen({ navigation }: Props) {
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Refresh width={56} height={56} />
                <Text style={styles.message}>No connection</Text>
                <Text style={styles.subtitle}>
                    Your request will be sent automatically as soon as internet connection will be available
                </Text>
            </View>
            <Footer>
                <View
                    style={{
                        flexDirection: 'row',
                        flex: 1,
                        justifyContent: 'space-between',
                        paddingLeft: 16,
                        paddingRight: 16,
                    }}
                >
                    <Button
                        uppercase={false}
                        theme={{ colors: { primary: '#0d841a' } }}
                        style={styles.retryButton}
                        mode='outlined'
                        onPress={handleRetry}
                    >
                        <Text style={styles.buttonText}>Retry</Text>
                    </Button>
                    <Button style={styles.confirmButton} mode='contained' onPress={handleOK}>
                        <Text style={styles.buttonText}>Ok</Text>
                    </Button>
                </View>
            </Footer>
        </View>
    );

    function handleOK() {
        navigation.replace(RootRoutes.Home);
    }
    function handleRetry() {
        navigation.goBack();
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
        width: 156,
    },
    retryButton: {
        ...Common.rounded,
        borderColor: Colors.green,
        width: 156,
    },
    message: {
        ...Typography.categoryTitle,
        width: 173,
        textAlign: 'center',
        marginTop: Spacing.large,
    },
});
