import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View, TouchableOpacity, Text, FlatList, StyleSheet, LayoutAnimation, Platform, UIManager } from "react-native";
import { Colors } from './Colors';
import { Divider, CheckBox } from 'react-native-elements';
import Icon from "react-native-vector-icons/MaterialIcons";


export default class LabRequestEvents extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            dataSource: [],
            expanded: false,
            subexpanded: false,
            xyzexpanded: false,
            mshexpanded: false,
            pidexpanded: false,
            OBRexpanded: false,
            EVNexpanded: false,
            txtfile: ''
        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }

    }
    render() {
        return (

            <View style={{justifyContent:'center',alignSelf:'center'}}>
                <ScrollView>

                    <View style={{ flexDirection: "row", alignSelf: "center" }}>
                        <Text style={styles.text}>Event:</Text>
                        <Text style={[styles.text, styles.space]}>Request For a Lab</Text>
                    </View>

                    {/* //MSH */}

                    <View style={{ marginTop: '7%', justifyContent: "center" }}>
                        <TouchableOpacity style={styles.row} onPress={() => this.MSHtoggleExpand()}>
                            <Text style={[styles.title]}>MSH</Text>
                            <Icon name={this.state.mshexpanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color='white' />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.parentHr} />
                    {
                        this.state.mshexpanded &&
                        <View style={{}}>

                            <View>
                                <TouchableOpacity style={[styles.childRow, styles.button]}>
                                    <Text style={[styles.font, styles.itemInActive]} >Field Separator</Text>
                                    <CheckBox></CheckBox>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.childRow, styles.button]}>
                                    <Text style={[styles.font, styles.itemInActive]} >Encoding Characters</Text>
                                    <CheckBox></CheckBox>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.childRow, styles.button]}>
                                    <Text style={[styles.font, styles.itemInActive]} >Sending Application</Text>
                                    <CheckBox></CheckBox>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.childRow, styles.button]}>
                                    <Text style={[styles.font, styles.itemInActive]} >Receiving Application</Text>
                                    <CheckBox></CheckBox>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.childRow, styles.button]}>
                                    <Text style={[styles.font, styles.itemInActive]} >Date/Time Of Message</Text>
                                    <CheckBox></CheckBox>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.childRow, styles.button]}>
                                    <Text style={[styles.font, styles.itemInActive]} > Version ID</Text>
                                    <CheckBox></CheckBox>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.childRow, styles.button]}>
                                    <Text style={[styles.font, styles.itemInActive]} >Processing ID</Text>
                                    <CheckBox></CheckBox>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.childRow, styles.button]}>
                                    <Text style={[styles.font, styles.itemInActive]} >Country Code</Text>
                                    <CheckBox></CheckBox>
                                </TouchableOpacity>

                                <View style={styles.childHr}

                                />

                            </View>
                        </View>
                    }
                    {/* //PID */}
                    <TouchableOpacity style={styles.row} onPress={() => this.PIDtoggleExpand()}>
                        <Text style={[styles.title]}>PID</Text>
                        <Icon name={this.state.pidexpanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color='white' />
                    </TouchableOpacity>
                    <View style={styles.parentHr} />
                    {
                        this.state.pidexpanded &&
                        <View style={{}}>

                            <View>
                                <TouchableOpacity style={[styles.childRow, styles.button]}>
                                    <Text style={[styles.font, styles.itemInActive]} >Patient Id</Text>
                                    <CheckBox></CheckBox>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.childRow, styles.button]}>
                                    <Text style={[styles.font, styles.itemInActive]} >Patient Name</Text>
                                    <CheckBox></CheckBox>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.childRow, styles.button]}>
                                    <Text style={[styles.font, styles.itemInActive]} >Date/Time Of Birth</Text>
                                    <CheckBox></CheckBox>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.childRow, styles.button]}>
                                    <Text style={[styles.font, styles.itemInActive]} >Gender</Text>
                                    <CheckBox></CheckBox>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.childRow, styles.button]}>
                                    <Text style={[styles.font, styles.itemInActive]} >County</Text>
                                    <CheckBox></CheckBox>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.childRow, styles.button]}>
                                    <Text style={[styles.font, styles.itemInActive]} >Patient Address</Text>
                                    <CheckBox></CheckBox>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.childRow, styles.button]}>
                                    <Text style={[styles.font, styles.itemInActive]} >Phone Number</Text>
                                    <CheckBox></CheckBox>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.childRow, styles.button]}>
                                    <Text style={[styles.font, styles.itemInActive]} >Birth Place</Text>
                                    <CheckBox></CheckBox>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.childRow, styles.button]}>
                                    <Text style={[styles.font, styles.itemInActive]} >Citizenship</Text>
                                    <CheckBox></CheckBox>
                                </TouchableOpacity>

                                <View style={styles.childHr}

                                />

                            </View>
                        </View>
                    }


                    {/* //End */}

                    {/* //OBR */}
                    <TouchableOpacity style={styles.row} onPress={() => this.OBRtoggleExpand()}>
                        <Text style={[styles.title]}>OBR</Text>
                        <Icon name={this.state.OBRexpanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color='white' />
                    </TouchableOpacity>
                    <View style={styles.parentHr} />
                    {
                        this.state.OBRexpanded &&
                        <View style={{}}>

                            <View>
                                <TouchableOpacity style={[styles.childRow, styles.button]}>
                                    <Text style={[styles.font, styles.itemInActive]} >Order Id</Text>
                                    <CheckBox></CheckBox>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.childRow, styles.button]}>
                                    <Text style={[styles.font, styles.itemInActive]} >Requested Date/Time</Text>
                                    <CheckBox></CheckBox>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.childRow, styles.button]}>
                                    <Text style={[styles.font, styles.itemInActive]} >Result Status</Text>
                                    <CheckBox></CheckBox>
                                </TouchableOpacity>


                                <View style={styles.childHr}

                                />

                            </View>
                        </View>
                    }

                    {/* //OBR end */}
                    {/* //EVN */}
                    <TouchableOpacity style={styles.row} onPress={() => this.EVNtoggleExpand()}>
                        <Text style={[styles.title]}>EVN</Text>
                        <Icon name={this.state.EVNexpanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color='white' />
                    </TouchableOpacity>
                    <View style={styles.parentHr} />
                    {
                        this.state.EVNexpanded &&
                        <View style={{}}>

                            <View>
                                <TouchableOpacity style={[styles.childRow, styles.button]}>
                                    <Text style={[styles.font, styles.itemInActive]} >Event Type Code</Text>
                                    <CheckBox></CheckBox>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.childRow, styles.button]}>
                                    <Text style={[styles.font, styles.itemInActive]} >Date/Time of Event</Text>
                                    <CheckBox></CheckBox>
                                </TouchableOpacity>
                                <View style={styles.childHr}

                                />

                            </View>
                        </View>
                    }


                    {/* //EVN end */}

         {/* <TouchableOpacity style={styles.row} onPress={() => this.toggleExpand()}>
                        <Text style={[styles.title]}>PID</Text>
                        <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color='white' />
                    </TouchableOpacity>
                    <View style={styles.parentHr} />
                    {
                        this.state.expanded &&
                        <View style={{}}>

                            <View>
                                <TouchableOpacity style={[styles.childRow, styles.button]}>
                                    <Text style={[styles.font, styles.itemInActive]} >Fname</Text>
                                    <CheckBox></CheckBox>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.childRow, styles.button]}>
                                    <Text style={[styles.font, styles.itemInActive]} >lname</Text>
                                    <CheckBox></CheckBox>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: '#BA1E24', width: '90%', alignSelf: 'center' }} onPress={() => this.SubtoggleExpand()}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 15, color: 'white', paddingLeft: 2 }}>XYZ</Text>
                                        <Icon style={{ paddingLeft: '80%' }} name={this.state.subexpanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color='white' />
                                    </View>
                                    <View>

                                        <View >
                                            {
                                                this.state.subexpanded &&
                                                <View>
                                                    <View>
                                                        <TouchableOpacity style={[styles.childRow, styles.button]}>
                                                            <Text style={[styles.font, styles.itemInActive]} >lname</Text>
                                                            <CheckBox></CheckBox>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={[styles.childRow, styles.button]}>
                                                            <Text style={[styles.font, styles.itemInActive]} >fname</Text>
                                                            <CheckBox></CheckBox>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            }
                                        </View>
                                    </View>

                                </TouchableOpacity>


                                <View style={styles.childHr}

                                />

                            </View>
                        </View>
                    } */}

{/* //DGI */}
                    <TouchableOpacity style={styles.row} onPress={() => this.XYZtoggleExpand()}>
                        <Text style={[styles.title]}>DGI</Text>
                        <Icon name={this.state.xyzexpanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color='white' />
                    </TouchableOpacity>
                    <View style={styles.parentHr} />
                    {
                        this.state.xyzexpanded &&
                        <View style={{}}>

                            <View>
                                <TouchableOpacity style={[styles.childRow, styles.button]}>
                                    <Text style={[styles.font, styles.itemInActive]} >Diagnosis id</Text>
                                    <CheckBox></CheckBox>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.childRow, styles.button]}>
                                    <Text style={[styles.font, styles.itemInActive]} >Diagnosis Description</Text>
                                    <CheckBox></CheckBox>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.childRow, styles.button]}>
                                    <Text style={[styles.font, styles.itemInActive]} >Diagnosis Date/Time</Text>
                                    <CheckBox></CheckBox>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.childRow, styles.button]}>
                                    <Text style={[styles.font, styles.itemInActive]} >Diagnosis Type</Text>
                                    <CheckBox></CheckBox>
                                </TouchableOpacity>
                                <View style={styles.childHr}

                                />

                            </View>
                        </View>
                    }
            {/* //End DGI */}
                </ScrollView>

            </View>
        );
    }

    onClick = (index) => {
        const temp = this.state.data.slice()
        temp[index].value = !temp[index].value
        this.setState({ data: temp })
    }

    toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ expanded: !this.state.expanded })
    }
    XYZtoggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ xyzexpanded: !this.state.xyzexpanded })
    }
    SubtoggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ subexpanded: !this.state.subexpanded })
    }
    MSHtoggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ mshexpanded: !this.state.mshexpanded })
    }
    PIDtoggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ pidexpanded: !this.state.pidexpanded })
    }
    OBRtoggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ OBRexpanded: !this.state.OBRexpanded })
    }
    EVNtoggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ EVNexpanded: !this.state.EVNexpanded })
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
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
        fontSize: 15,
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
        alignSelf: 'center',
        width: '90%'
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
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: "#EA2755",
        marginTop: '3%',
        paddingLeft: '2%'
    },
    space: {
        paddingLeft: 5
    }

});
