import React, { Component } from 'react';
import {ScrollView, View, Text, ActivityIndicator, StyleSheet, FlatList, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import Axios from 'axios';
import { Colors } from './Colors';
import { Divider, CheckBox } from 'react-native-elements';
import Icon from "react-native-vector-icons/MaterialIcons";
import { color } from 'react-native-reanimated';

class API extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            dataSource: [],
            expanded:false,
            ADTexpanded:false,

          
        };
    }
    componentDidMount() {
        this.getAPI();
    }
    async getAPI() {
        let respon = await Axios.get("http://192.168.1.105/ProjectApi/api/Patient/Search?fname=saman");
        this.setState({ loading: false, dataSource: respon.data })
        console.warn(respon.data);
    }
    FlatListItemSeparator = () => {
        return (
            <View style={{
                height: .9,
                width: "100%",
                backgroundColor: "rgba(0,0,0,0.5)",
            }}
            />
        )
    }
    renderItem = (data) =>

        <TouchableOpacity style={styles.list}>
            <TouchableOpacity style={styles.row} onPress={() => this.toggleExpand()}>
                <Text style={[styles.title]}>PID</Text>
                <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color='white' />
            </TouchableOpacity>
            <View style={styles.parentHr} />
            {
                this.state.expanded &&
                <View style={{}}>
                    <View>
                        <TouchableOpacity style={[styles.childRow, styles.button, data.value ? styles.btnActive : styles.btnInActive]}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={[styles.font, styles.itemInActive]} >PID:</Text>
                                <Text style={[styles.font, styles.itemInActive]} >{data.item.id}</Text>
                            </View>
                            <CheckBox></CheckBox>
                            {/* <Icon name={'check-circle'} size={24} color={data.value ? Colors.Pink : Colors.LIGHTGRAY} /> */}
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.childRow, styles.button, data.value ? styles.btnActive : styles.btnInActive]}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={[styles.font, styles.itemInActive]} >First Name:</Text>
                                <Text style={[styles.font, styles.itemInActive]} >{data.item.fname}</Text>
                            </View>
                            <Icon name={'check-circle'} size={24} color={data.value ? Colors.Pink : Colors.LIGHTGRAY} />
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.childRow, styles.button, data.value ? styles.btnActive : styles.btnInActive]}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={[styles.font, styles.itemInActive]} >Last Name:</Text>
                                <Text style={[styles.font, styles.itemInActive]} >{data.item.lname}</Text>
                            </View>
                            <Icon name={'check-circle'} size={24} color={data.value ? Colors.Pink : Colors.LIGHTGRAY} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.childRow, styles.button, data.value ? styles.btnActive : styles.btnInActive]}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={[styles.font, styles.itemInActive]} >Contact:</Text>
                                <Text style={[styles.font, styles.itemInActive]} >{data.item.contact}</Text>
                            </View>
                            <Icon name={'check-circle'} size={24}
                                color={data.value ? Colors.Pink : Colors.LIGHTGRAY} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.row} onPress={() => this.toggleExpand()}>
                <Text style={[styles.title]}>ADT</Text>
                <Icon name={this.state.ADTexpanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color='white' />
            </TouchableOpacity>


                    </View>
                </View>
            }
        </TouchableOpacity>

    render() {

        if (this.state.loading) {
            return (

                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="default" />
                </View>
            )
        }
        return (
            <View style={styles.container}>
          
                <FlatList
                    data={this.state.dataSource}
                    numColumns={1}
                    scrollEnabled={false}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={item => this.renderItem(item)}
                    keyExtractor={item => item.id.toString()}
                />
                 <FlatList
                    data={this.state.MSH}
                    numColumns={1}
                    scrollEnabled={false}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={item => this.renderItem(item)}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        )
    }
    onClick = (index) => {
        const temp = this.state.item.slice()
        temp[index].value = !temp[index].value
        this.setState({ item: temp })
    }

    toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ expanded: !this.state.expanded })
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    list: {
        paddingVertical: 4,
        marginLeft: 20,
        margin: 5,
        backgroundColor: "#fff"
    },
    button: {
        width: '100%',
        height: 54,
        alignItems: 'center',
        paddingLeft: 35,
        paddingRight: 35,
        fontSize: 12,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
    },
    itemActive: {
        fontSize: 12,
        color: Colors.GREEN,
    },
    itemInActive: {
        fontSize: 12,
        color: Colors.DARKGRAY,
    },
    btnActive: {
        borderColor: Colors.GREEN,
    },
    btnInActive: {
        borderColor: Colors.DARKGRAY,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 56,
        paddingLeft: 25,
        paddingRight: 18,
        alignItems: 'center',
        backgroundColor: '#EA2755',
    },
    childRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.GRAY,
    },
    parentHr: {
        height: 3,
        color: Colors.WHITE,
        width: '100%'
    },
    childHr: {
        height: 1,
        backgroundColor: Colors.LIGHTGRAY,
        width: '100%',
    },
    colorActive: {
        borderColor: Colors.GREEN,
    },
    colorInActive: {
        borderColor: Colors.DARKGRAY,
    }
});
export default API;
