import { LoginScreen } from './views/Login';
import { RootRoutes, AuthRoutes } from './common/constants/routes';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { HomeScreen } from './views/Home';
import { AuthLoadingScreen } from './views/Auth-loading';
import React from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import { GlobalProvider } from './context/context';
import { Provider as PaperProvider } from 'react-native-paper';
import { ViewJoke } from './views/View-joke';
import { JokesList } from './views/Jokes-list';
import { ProfileFormTabs } from './views/my-profile';
import { SuccessScreen } from './views/Success';
import { FailScreen } from './views/Fail';


const AppStack = createStackNavigator({
    [RootRoutes.Home]: { screen: HomeScreen, navigationOptions: { header: null } },
    [RootRoutes.ViewJoke]: { screen: ViewJoke, navigationOptions: { header: null } },
    [RootRoutes.JokesList]: { screen: JokesList, navigationOptions: { header: null } },
    [RootRoutes.MyProfile]: { screen: ProfileFormTabs, navigationOptions: { header: null } },
    [RootRoutes.Fail]: { screen: FailScreen, navigationOptions: { header: null, gesturesEnabled: false } },
    [RootRoutes.Success]: { screen: SuccessScreen, navigationOptions: { header: null, gesturesEnabled: false } },
});

const RootStack = createSwitchNavigator({
    [AuthRoutes.Loading]: { screen: AuthLoadingScreen, navigationOptions: { header: null } },
    [AuthRoutes.Login]: { screen: LoginScreen, navigationOptions: { header: null } },
    [AuthRoutes.App]: { screen: AppStack, navigationOptions: { header: null } },
});

const App = createAppContainer(RootStack);

function Main() {
    return (
        <AppearanceProvider>
            <PaperProvider>
                <GlobalProvider>
                    <App />
                </GlobalProvider>
            </PaperProvider>
        </AppearanceProvider>
    );
}

export default Main;
