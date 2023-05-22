import {View, ScrollView, KeyboardAvoidingView, Platform} from "react-native";
import styles from "./attraction.style";
import Header from "../../components/AttractionComponents/header/Header";
import About from "../../components/AttractionComponents/About/About";
import Review from "../../components/AttractionComponents/Review/Review";
import PrizeInfo from "../../components/AttractionComponents/PrizeInfo/PrizeInfo";
import MapComponent from "../../components/common/map/MapComponent";


const Attraction = () => {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.backgroundView}>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex: 1}}>
                    <ScrollView>
                        <Header/>
                        <About/>
                        <MapComponent/>
                        <Review/>
                        <PrizeInfo/>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </View>
    )
}

export default Attraction;