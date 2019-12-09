import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { IconButton } from 'react-native-paper';
import { useColorScheme } from 'react-native-appearance';

type Props = {
    placeholder: string;
    onChange: (date: Date) => void;
    value?: Date;
    minimumDate?: Date;
    style?: { marginTop: number };
    // tslint:disable-next-line: no-any
    mode?: any;
};

export function DatePicker(props: Props) {
    const { placeholder, style, onChange, value, minimumDate, mode = 'date' } = props;

    const [showPicker, setShowPicker] = useState(false);
    const colorScheme = useColorScheme();
    return (
        <TouchableOpacity
            activeOpacity={1}
            style={[{ borderBottomColor: 'white', borderBottomWidth: 1 }, style]}
            onPress={() => {
                setShowPicker(!showPicker);
                if (!value) {
                    onChange(new Date());
                }
            }}
        >
            {value && (
                <Text style={{ fontSize: 12, paddingLeft: 10, lineHeight: 16, color: '#96a1a8' }}>{placeholder}</Text>
            )}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 30, alignItems: 'center' }}>
                <Text
                    style={{
                        marginBottom: 8,
                        paddingLeft: 10,
                        fontSize: 16,
                        lineHeight: 24,
                        color: !value ? '#96a1a8' : 'white',
                    }}
                >
                    {!value
                        ? placeholder
                        : mode === 'time'
                        ? value.toLocaleTimeString('en-GB').slice(0, 5)
                        : value.toLocaleDateString('en-US')}
                </Text>
                <IconButton icon={mode === 'time' ? 'clock' : 'calendar'} color='white' size={24} />
            </View>
            <DateTimePicker
                minimumDate={minimumDate || new Date()}
                isVisible={showPicker}
                onConfirm={handleDatePicked}
                onCancel={hideDateTimePicker}
                date={value}
                mode={mode}
                locale='en_GB'
                isDarkModeEnabled={colorScheme === 'dark'}
            />
        </TouchableOpacity>
    );

    function handleDatePicked(date: Date) {
        onChange(date);
        hideDateTimePicker();
    }

    function hideDateTimePicker() {
        setShowPicker(false);
    }
}
