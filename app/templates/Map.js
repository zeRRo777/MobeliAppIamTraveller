import {View, Text} from "react-native";
import {COLORS} from "../../constants";

const Map = () => {
    return (
        <View style={{alignItems:'center', justifyContent:'center', flex:1, backgroundColor: COLORS.lightWhite}}>
            <Text>This is the Map Page</Text>
        </View>
    )
}

export default Map;