import { View } from 'react-native';
import * as React from 'react';

type Props = {
    flex?: number;
};
export function Spacer(props: Props) {
    const { flex } = props;
    return <View style={{ flex: flex || 1 }} />;
}
