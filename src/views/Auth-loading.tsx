import React, { useEffect } from 'react';
import { View, AsyncStorage } from 'react-native';
import { Colors } from '../styles';
import { AuthRoutes } from '../common/constants/routes';
import { NavigationStackProp } from 'react-navigation-stack';
import { Loader } from '../components/shared/Loader';

type Props = {
    navigation: NavigationStackProp;
};

export function AuthLoadingScreen({ navigation }: Props) {
    useEffect(() => {
        bootstrapAsync();
    }, []);

    async function bootstrapAsync() {
        const accessToken = await AsyncStorage.getItem('accessToken');
        navigation.navigate(accessToken ? AuthRoutes.App : AuthRoutes.Login);
    }

    return (
        <View style={{ backgroundColor: Colors.background, flex: 1 }}>
            <Loader />
        </View>
    );
}
