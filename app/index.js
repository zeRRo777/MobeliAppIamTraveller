import {NavigationContainer} from "@react-navigation/native";
import TabNavigator from "./components/common/menu/TabNavigator";
import {createStackNavigator} from "@react-navigation/stack";
import WithoutTubNavigatorStack from "./components/common/menu/WithoutTubNavigatorStack";

const App = () => {

    const Stack= createStackNavigator();

    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name='root' component={TabNavigator} />
                <Stack.Screen name='WithoutTabNavigator' component={WithoutTubNavigatorStack}/>
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default App;
