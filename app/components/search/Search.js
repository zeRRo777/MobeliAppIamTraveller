import {View, FlatList} from "react-native";
import { SearchBar } from "react-native-elements";
import {Component} from "react";
import {COLORS} from "../../../constants";
import styles from "./search.style";
import CityData from "../../DATA/CityData";
import CardCity from "../CardCity/CardCity";

const renderCard = ({item}) => (
    <CardCity
        image={item.image}
        city={item.City}
        country={item.Country}
        id={item.id}
    />
)

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: CityData,
            error: null,
            searchValue: "",
        };
        this.arrayholder = CityData
    }


    searchFunction = (text) => {
        const updatedData = this.arrayholder.filter((item) =>{
            const item_data = `${item.City.toUpperCase()}`
            const text_data = text.toUpperCase();
            return item_data.indexOf(text_data) > -1;
        });
        this.setState({data: updatedData, searchValue: text});
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={renderCard}
                    keyExtractor={(item) => item.id}
                    ListHeaderComponent={
                        <View style={styles.searchBarContainer}>
                            <SearchBar
                                placeholder="Search here ..."
                                placeholderTextColor={COLORS.black}
                                round
                                value={this.state.searchValue}
                                onChangeText={(text) => this.searchFunction(text)}
                                autoCorrect={false}
                                containerStyle={[styles.searchBarContainerStyle]}
                                inputContainerStyle={[styles.searchBarInputContainerStyle]}
                                style={{color: COLORS.black}}
                                searchIcon={{color: COLORS.black}}
                            />
                        </View>
                    }
                    stickyHeaderIndices={[0]}
                />
            </View>
        )
    }
}

export default Search;
