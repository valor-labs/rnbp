import React from 'react';
import { Platform, View } from 'react-native';
import { Colors } from '../../styles';

// tslint:disable-next-line: no-any
export function Footer({ children }: any) {
    return (
        <View
            style={{
                backgroundColor: Platform.OS === 'android' ? 'transparent' : Colors.background,
                height: 90,
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 5,
                shadowColor: 'black',
                shadowOffset: { width: 0, height: -2 },
                shadowOpacity: 0.5,
                shadowRadius: 4,
            }}
        >
            {children}
        </View>
    );
}
