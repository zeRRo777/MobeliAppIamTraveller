import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
    btnContainer: {
        width: 45,
        height: 45,
        backgroundColor: COLORS.lightWhite,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    btnImg: {
        width: '70%',
        height: '70%',
        borderRadius: SIZES.small / 1.25,
    },
});

export default styles;