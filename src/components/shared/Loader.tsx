import { View, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Spacing } from '../../styles';

export function Loader() {
    return (
        <View style={style.wrapper}>
            <Image source={require('../../assets/preloader.gif')} />
        </View>
    );
}

const style = StyleSheet.create({
    wrapper: {
        ...Spacing.wrapper,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
});
