import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator} from '@react-navigation/stack';
import TabNavigator from "./components/common/TabNavigator";
import AttractionsScreen from "./templates/Attractions";

const Stack= createStackNavigator();


const App = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="root" component={TabNavigator}/>
                <Stack.Screen name="Attractions" component={AttractionsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;
