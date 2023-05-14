import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Image} from "react-native";
import {COLORS, icons} from "../../../constants";
import Cities from "../../templates/Cities";
import Favorites from "../../templates/Favorites";
import Map from "../../templates/Map";
import Profile from "../../templates/Profile";
import Story from "../../templates/Story";


const TabNavigator = () => {

    const Tab = createBottomTabNavigator();

    const CitiesScreen = () => {
        return <Cities/>;
    }
    const FavoritesScreen = () => {
        return <Favorites/>;
    }
    const MapScreen = () => {
        return <Map/>;
    }
    const ProfileScreen = () => {
        return <Profile/>;
    }
    const StoryScreen = () => {
        return <Story/>;
    }

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: COLORS.black,
                tabBarInactiveTintColor: COLORS.gray,
                tabBarStyle: {
                    height: 60,
                    backgroundColor: COLORS.lightWhite,
                    borderTopWidth: 0,
                    elevation: 0
                },


        }}
            initialRouteName={'Cities'}
        >
            <Tab.Screen name='Cities'  component={CitiesScreen} options={{
                tabBarIcon: ({focused}) => {
                    return (
                        <Image source={icons.cities}/>
                    )
                }
            }}
            />
            <Tab.Screen name='Favorites' component={FavoritesScreen} options={{
                tabBarIcon: ({focused}) => {
                    return (
                        <Image source={icons.loves}/>
                    )
                }
            }}
            />
            <Tab.Screen name='Story' component={StoryScreen} options={{
                tabBarIcon: ({focused}) => {
                    return (
                        <Image source={icons.story}/>
                    )
                }
            }}
            />
            <Tab.Screen name='Map' component={MapScreen} options={{
                tabBarIcon: ({focused}) => {
                    return (
                        <Image source={icons.map}/>
                    )
                }
            }}
            />
            <Tab.Screen name='Profile' component={ProfileScreen} options={{
                tabBarIcon: ({focused}) => {
                    return (
                        <Image source={icons.profile}/>
                    )
                }
            }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator;