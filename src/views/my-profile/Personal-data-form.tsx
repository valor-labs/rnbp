import React, { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, TextInput, Text } from 'react-native-paper';
import { Footer } from '../../components/shared/Footer';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { NavigationStackProp } from 'react-navigation-stack';
import { RootRoutes } from '../../common/constants/routes';
import { Buttons, Typography, Spacing, Colors } from '../../styles';
import { Formik } from 'formik';
import { validateDate, validate, PersonalDataSchema } from '../../common/utils/validation';
import { DatePicker } from '../../components/Date-picker';
import { Loader } from '../../components/shared/Loader';
import { State, useGlobalState, useGlobalDispatch } from '../../context/context';
import { UPDATE_USER } from '../../context/actions/user.actions';

type Props = {
  navigation: NavigationStackProp<{ facilityId: number }>;
};
export function PersonalDataForm({ navigation }: Props) {
  const user = useGlobalState(State.User);
  const userDispatch = useGlobalDispatch(State.User);
  const [birthday, setBirthday] = useState<Date>(user.birthday ? new Date(user.birthday): new Date());
  const [isLoading, setIsLoading] = useState<boolean>();

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{
          name: user.name,
          surname: user.surname
        }}
        validationSchema={PersonalDataSchema}
        onSubmit={submit}
      >
        {({ handleChange, handleSubmit, values, validateForm, errors, touched }) => (
          <>
            <ScrollView
              contentContainerStyle={{
                alignItems: 'center',
                paddingBottom: 20,
                flex: isLoading ? 1 : 0,
              }}
            >
              {isLoading ? (
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                  <Loader />
                </View>
              ) : (
                  <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled={false}>
                    <Text style={[Typography.title, { paddingTop: 24 }]}>Guest information</Text>
                    <TextInput
                      error={validate(touched.name, errors.name)}
                      onChangeText={handleChange('name')}
                      value={values.name}
                      label='Name'
                      autoCompleteType='name'
                      theme={inputTheme}
                      style={styles.input}
                    />
                    <TextInput
                      onChangeText={handleChange('surname')}
                      value={values.surname}
                      error={validate(touched.surname, errors.surname)}
                      label='Surname'
                      autoCompleteType='name'
                      theme={inputTheme}
                      style={styles.input}
                    />
                    <DatePicker
                      value={birthday}
                      onChange={setBirthday}
                      placeholder='Birthday'
                      style={{ marginTop: 21 }}
                    />
                  </KeyboardAwareScrollView>
                )}
            </ScrollView>
            <Footer>
              <Button
                uppercase={false}
                style={styles.confirmButton}
                mode='contained'
                onPress={() => {
                  validateForm();
                  handleSubmit();
                }}
              >
                <Text style={styles.buttonText}>Save</Text>
              </Button>
            </Footer>
          </>
        )}
      </Formik>
    </View>
  );

  // tslint:disable-next-line: no-any
  async function submit(values: any): Promise<void> {
    if (validateDate(birthday)) {
      try {
        setIsLoading(true);
        // tslint:disable-next-line: no-any
        userDispatch({
          type: UPDATE_USER,
          payload: {
            name: values.name,
            surname: values.surname,
            birthday: birthday.toString()
          }
        });
        setIsLoading(false);
        navigation.replace(RootRoutes.Success);
      } catch {
        setIsLoading(false);
        navigation.navigate(RootRoutes.Fail);
      }
    }
  }
}

const styles = StyleSheet.create({
  wrapper: Spacing.wrapper,
  input: { backgroundColor: Colors.background, color: 'white' },
  buttonText: { ...Typography.button, color: 'white' },
  confirmButton: {
    ...Buttons.base,
    width: wp(93),
  },
  button: {
    borderRadius: 4,
    borderColor: 'white',
    width: wp(93),
    marginTop: 24,
  },
});

const inputTheme = {
  colors: {
    primary: 'white',
    disabled: '#96a1a8',
    placeholder: '#96a1a8',
    text: 'white',
    error: '#FF5454',
  },
};
