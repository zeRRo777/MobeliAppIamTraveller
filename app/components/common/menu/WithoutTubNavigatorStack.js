import {createStackNavigator} from "@react-navigation/stack";
import Attractions from "../../../templates/Attractons/Attractions";
import Attraction from "../../../templates/Attraction/Attraction";


const WithoutTubNavigatorStack = () => {

    const Stack = createStackNavigator();

    const AttractionsScreen = () => {
        return <Attractions/>
    }

    const AttractionScreen = () => {
        return <Attraction/>;
    }

    return(
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='Attractions' component={AttractionsScreen} />
            <Stack.Screen name='Attraction' component={AttractionScreen}/>
        </Stack.Navigator>
    )
}

export default WithoutTubNavigatorStack;