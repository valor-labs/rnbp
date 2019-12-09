import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, View, AsyncStorage, TouchableOpacity, Text } from 'react-native';
import { Spacing, Colors } from '../styles';
import LogOut from '../assets/icons/log_in.svg';
import { State, useGlobalState } from '../context/context';

export function HomeHeader({ navigate }: { navigate: Function }) {
    const user = useGlobalState(State.User);

    return (
        <Appbar.Header theme={{ colors: { primary: Colors.blue } }} style={{ elevation: 5 }}>
            <View style={styles.wrapper}>
                <View style={{ flexDirection: 'column', marginBottom: 10 }}>
                    <Text style={styles.powered}>Powered by Valor Software</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.label}>{user.name}</Text>
                        <Text style={styles.label}>{user.surname}</Text>
                        <Text style={styles.powered}>{user.birthday}</Text>
                        <TouchableOpacity onPress={() => logOut()}>
                            <LogOut />
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
    powered: { color: Colors.light, fontSize: 10, paddingBottom: 10, marginRight: 7 },
    label: { color: Colors.light, fontSize: 14, marginRight: 7 },
});
