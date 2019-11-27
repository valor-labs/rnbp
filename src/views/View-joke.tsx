import React, { useEffect } from 'react';
import { useGlobalDispatch, State } from '../context/context';
import { RootRoutes } from '../common/constants/routes';
import { useFetchApi } from '../common/hooks/api';
import { Header } from '../components/Header';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { Loader } from '../components/shared/Loader';
import { Spacing, Typography } from '../styles';
import { ADD_JOKE } from '../context/actions/selected-jokes.actions';

type Props = {
  navigation: NavigationStackProp;
};

export function ViewJoke({ navigation }: Props) {
  const [{ data, isLoading }] = useFetchApi(`https://api.chucknorris.io/jokes/random`);
  const jokesDispatch = useGlobalDispatch(State.Jokes);

  useEffect(() => {
    if (!!data) {
      jokesDispatch({ type: ADD_JOKE, payload: data });
    }
  }, [data]);

  return (
    <View>
      <Header title="Joke for this moment" goBack={() => navigation.navigate(RootRoutes.Home)} />
      {isLoading ? (
        <Loader />
      ) : (
          <View>
            <Text style={styles.text}>{data.value}</Text>
          </View>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginBottom: Spacing.base,
    ...Typography.regular,
    ...Typography.largeFontSize,
    padding: 20,
    marginTop: 20,
    justifyContent: 'space-between'
  },
});
