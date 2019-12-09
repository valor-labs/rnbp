import React from 'react';

import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { ProfileForm } from './Profile-form';
import { Close } from '../../components/shared/Close';
import { Colors } from '../../styles';
import { PersonalDataForm } from './Personal-data-form';

export const ProfileFormTabs = createMaterialTopTabNavigator(
  {
    ['Profile']: ProfileForm,
    ['Personal Data']: PersonalDataForm,
  },
  {
    tabBarOptions: {
      contentContainerStyle: {
        minHeight: 50,
      },
      activeTintColor: 'white',
      inactiveTintColor: 'white',
      indicatorStyle: { backgroundColor: 'white' },
      style: {
        backgroundColor: Colors.blue,
      },
    },
    navigationOptions: ({ navigation }) => ({
      title: 'My Profile',
      headerLeft: <Close onPress={navigation.goBack} />,
      headerStyle: {
        backgroundColor: Colors.blue,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
      headerTintColor: 'white',
    }),
  }
);
