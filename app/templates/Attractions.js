import {View, Text} from "react-native";
import {useRoute} from "@react-navigation/native";
import {COLORS} from "../../constants";

const Attractions = () => {

    const route = useRoute()
    const {id} = route.params

    return (
        <View style={{alignItems:'center', justifyContent:'center', flex:1, backgroundColor: COLORS.lightWhite}}>
            <Text>Ваш город с id равным {id}</Text>
        </View>
    )

}

const AttractionsScreen = (id) => {
    return (
        <Attractions id={id}/>
    )

}

export default AttractionsScreen;