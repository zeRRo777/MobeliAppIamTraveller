import {View, Text} from "react-native";
import {COLORS} from "../../constants";

const Story = () => {
    return (
        <View style={{alignItems:'center', justifyContent:'center', flex:1, backgroundColor: COLORS.lightWhite}}>
            <Text>This is the Story Page</Text>
        </View>
    )
}

export default Story;