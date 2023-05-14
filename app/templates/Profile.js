import {View, Text} from "react-native";
import {COLORS} from "../../constants";

const Profile = () => {
    return (
        <View style={{alignItems:'center', justifyContent:'center', flex:1, backgroundColor: COLORS.lightWhite}}>
            <Text>This is the Profile Page</Text>
        </View>
    )
}

export default Profile;