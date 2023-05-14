import {View, Text} from "react-native";
import {COLORS} from "../../constants";

const Cities = () => {
    return (
        <View style={{alignItems:'center', justifyContent:'center', flex:1, backgroundColor: COLORS.lightWhite}}>
            <Text>This is the Cities Page</Text>
        </View>
    )
}

export default Cities;