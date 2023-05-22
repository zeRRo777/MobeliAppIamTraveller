import Modal from "react-native-modal";
import styles from "./profileModalWindow.style";
import {View, Button, Text} from "react-native";
import {useState} from "react";

const ProfileModalWindow = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleModal = () => setIsModalVisible(() =>!isModalVisible);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab One</Text>
            <View style={styles.separator} />
            <Button title="button" onPress={handleModal} />
            <Modal isVisible={isModalVisible}>
                <View style={{ flex: 1 }}>
                    <Text>Hello!</Text>
                    <Button title="Hide modal" onPress={handleModal} />
                </View>
            </Modal>
        </View>
    )
}

export default ProfileModalWindow;