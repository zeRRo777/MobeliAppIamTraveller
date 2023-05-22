import styles from "./prizeInfo.style";
import {Text, View} from "react-native";
import {Button} from "@rneui/themed";
import {COLORS} from "../../../../constants";

const PrizeInfo = () => {

    return (
        <View style={styles.infoContainer}>
            <Text style={styles.textInfo}>
                Здесь вы можете подтвердить, что вы именно на этом месте и получить за это призовые баллы
            </Text>
            <Button
                title={'Get prize!'}
                containerStyle={styles.buttonWriteContainer}
                titleStyle={styles.buttonCheckTitleStyle}
                buttonStyle={styles.buttonWriteStyle}
                color={COLORS.beige}
            />
        </View>
    )
}

export default PrizeInfo;