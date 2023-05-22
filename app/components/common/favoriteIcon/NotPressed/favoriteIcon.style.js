import { StyleSheet } from "react-native";

import { COLORS} from "../../../../../constants";

const styles = StyleSheet.create({
    iconContainer: {
        width: 45,
        height: 45,
        backgroundColor: COLORS.littleTransparent,
        justifyContent: "center",
        borderRadius: 50,
        alignItems: "center",
    },
    iconImg: {
        width: '70%',
        height: '70%',
    },
});

export default styles;