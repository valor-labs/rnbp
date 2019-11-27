import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, View, AsyncStorage, TouchableOpacity, Text } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { Spacing, Colors, Typography } from '../styles';

export function HomeHeader({ navigate }: { navigate: Function }) {
    return (
        <Appbar.Header theme={{ colors: { primary: Colors.blue } }} style={{ elevation: 5 }}>
            <View style={styles.wrapper}>
                <View style={{ flexDirection: 'column', marginBottom: 10 }}>
                    <Text style={styles.powered}>Powered by Valor Software</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => logOut()}>
                            <SvgUri source={require('../assets/icons/log_in.svg')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Appbar.Header>
    );

    async function logOut() {
        await clearUser();
        navigate();
    }

    async function clearUser() {
        await AsyncStorage.clear();
    }
}

const styles = StyleSheet.create({
    wrapper: { flexDirection: 'row', alignItems: 'center', padding: Spacing.base },
    powered: { color: Colors.light, fontSize: 10, paddingBottom: 10 },
});
