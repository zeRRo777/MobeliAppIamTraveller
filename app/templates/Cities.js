import {View, Text} from "react-native";
import Search from "../components/search/Search";
import {COLORS} from "../../constants";

const Cities = () => {
    return (
        <View style={{backgroundColor: COLORS.lightWhite}}>
            <View>
                <Search/>
            </View>
        </View>
    )
}

export default Cities;