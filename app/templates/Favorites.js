import {View, Text, FlatList, SafeAreaView} from "react-native";
import CardCity from "../components/CardCity/CardCity";
import {images} from "../../constants";


const Data = [
    {
        id: "1",
        City: "Moscow",
        Country: "Russia",
        image: images.moscow
    },
    {
        id: "2",
        City: "Kovrov",
        Country: "Russia",
        image: images.moscow
    },
    {
        id: "3",
        City: "Vladimir",
        Country: "Russia",
        image: images.moscow
    },
    {
        id: "4",
        City: "Leningrad",
        Country: "Russia",
        image: images.moscow
    }
]


const Favorites = () => {

    const renderCard = ({item}) => (
        <CardCity city={item.City} country={item.Country} image={item.image}/>
    )

    return (
        <SafeAreaView>
            <FlatList
                data={Data}
                renderItem={renderCard}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    )
}

export default Favorites;