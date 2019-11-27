import React, { useState } from 'react';
import { RootRoutes } from '../common/constants/routes';
import { Header } from '../components/Header';
import { View, Text, StyleSheet, ScrollView, FlatList, Image, Platform } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { useGlobalState, State } from '../context/context';
import { Spacing } from '../styles';

type Props = {
  navigation: NavigationStackProp;
};

export function JokesList({ navigation }: Props) {
  const jokesList = useGlobalState(State.Jokes);
  const [listForRender] = useState(jokesList);

  return (
    <View>
      <Header title="Jokes List" goBack={() => navigation.navigate(RootRoutes.Home)} />
      <ScrollView style={styles.content}>
        <FlatList
          contentContainerStyle={{
            marginTop: 15,
          }}
          data={listForRender}
          keyExtractor={(_, index) => index.toString()}
          // tslint:disable-next-line: no-any
          renderItem={({ item }: { item: any }) => (
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Image source={{ uri: item.icon_url }} style={styles.imageView} />
              <Text style={styles.textView}>{item.value}</Text>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: { padding: Spacing.base },
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 5,
    marginTop: (Platform.OS === 'ios') ? 20 : 0,
  },
  imageView: {
    width: '50%',
    height: 100,
    margin: 7,
    borderRadius: 7
  },
  textView: {
    width: '50%',
    textAlignVertical: 'center',
    padding: 10,
    color: '#000'
  }
});

