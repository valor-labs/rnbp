import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Text } from 'react-native';
import { Typography, Colors } from '../styles';

type IProps = {
    title: string;
    goBack: Function;
};

export function Header(props: IProps) {
    const { goBack, title } = props;

    return (
        <Appbar.Header theme={{ colors: { primary: Colors.blue } }} style={{ elevation: 5 }}>
            <Appbar.BackAction onPress={() => goBack()} color='white' />
            <Text style={styles.title}>{title}</Text>
        </Appbar.Header>
    );
}

const styles = StyleSheet.create({
    title: Typography.headerTitle,
});
