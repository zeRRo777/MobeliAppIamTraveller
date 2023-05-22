import styles from "./searchStoryAttraction.style";
import CardAttraction from "../../AttractionsComponents/CardAttraction/CardAttraction";
import {Component} from "react";
import {FlatList, Text, View} from "react-native";
import BackButton from "../../common/header/BackButton";
import SearchBarAttraction from "../searchAttraction/SearchBarAttraction/SearchBarAttraction";

const renderCard = ({item}) => (
    <CardAttraction
        image={item.image}
        city={item.city}
        name={item.name}
        id={item.id}
        preview={item.preview}
    />
)

class SearchStoryAttraction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: props.DATA,
            error: null,
            searchValue: "",
            Header: props.Header
        };
        this.arrayholder = this.state.data
    }


    searchFunction = (text) => {
        const updatedData = this.arrayholder.filter((item) =>{
            const item_data = `${item.name.toUpperCase()}`
            const text_data = text.toUpperCase();
            return item_data.indexOf(text_data) > -1;
        });
        this.setState({data: updatedData, searchValue: text});
    }

    renderHeader = () => {
        return (
            <View>
                <View style={styles.headerContainer}>
                    <SearchBarAttraction
                        searchValue={this.state.searchValue}
                        searchFunction={(text) => this.searchFunction(text)}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textAttractions}>{this.props.Header}</Text>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={{flex: 1, marginBottom: 20}}>
                {this.renderHeader()}
                <FlatList
                    data={this.state.data}
                    style={{flex: 1}}
                    renderItem={renderCard}
                    keyExtractor={(item) => item.id}
                />
            </View>
        )
    }
}

export default SearchStoryAttraction;
