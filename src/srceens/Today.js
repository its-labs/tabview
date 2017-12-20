import React, { Component } from 'react';
import { cssTabView } from '../styles/css';
import moment from 'moment';
import {
    Platform, StyleSheet, Text, Picker, View, Image, Button, Alert,
    I18nManager, AsyncStorage, PanResponder, Animated, FlatList,
    TouchableHighlight
} from 'react-native';
import { TabNavigator } from "react-navigation";
import 'moment-timezone';
const ROUND_DATE_TO = 15;
export class Today extends Component {
    constructor(props) {
        super(props)
        this.state = {
            updateTimes: []
        }
        this.checkTime()
        this.upDateCurrentTimes()

    }

    checkTime() {
        var quarterHours = ["00"];
        for (var i = 0; i < 24; i++) {
            for (var j = 0; j < 1; j++) {
                var valuesTime = +i + ":" + quarterHours[j];
                this.state.updateTimes.push({ hours: valuesTime, selectedList: false });
            }
        }

    }
    upDateCurrentTimes() {

        var today = new Date();

        let resultgetHours = today.getHours().toString();
        let resultMinutes = today.getMinutes().toString();
        let currentTime = resultgetHours + ":" + resultMinutes;
        var timeHours = this.state.updateTimes;

        //Start Current time and pervious difference for 24Hours.
        for (let i = 0; i < timeHours.length; i++) {

            const element = timeHours[i].hours;
            console.log("upDateCurrentTime : " + element)


            if (element.indexOf(resultgetHours) !== -1) {

                for (i; i < timeHours.length; i++) {

                    var dataTimeHours = this.state.updateTimes;
                    var selectedObject = dataTimeHours[i];
                    // facilitiesIconsSH set true using this ! Operators
                    selectedObject.selectedList = true
                    dataTimeHours[i] = selectedObject;
                    this.setState({ updateTimes: dataTimeHours });
                }
            }

        }
        //End Current time and pervious difference for 24Hours.

    }

    render() {
        var css = cssTabView;
        return (
            <View style={{ flex: 1, marginTop: 10}}>
                <View style={{ flex: 1, marginTop: 10}}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        removeClippedSubviews={false}
                        extraData={this.state}
                        keyExtractor={(item, index) => index}
                        horizontal
                        data={this.state.updateTimes}
                        renderItem={({ item }) =>
                            <View style={!item.selectedList ? css.viewParentSelectStartTime : css.selectedList} >
                                <View style={!item.selectedList ? css.viewParentSelectStartTime : css.selectedList} >
                                    <View style={css.viewParentTimeLine}>
                                        <View style={{ flex: 2, backgroundColor: !item.selectedList ? "#eee" : "#FFF", borderColor: "#000", borderBottomWidth: 1, }}>
                                           
                                            <View style={{ flex: 1, paddingLeft: 5 }} >
                                                <Text tyle={{ fontSize: 6 }}>{item.hours}</Text>
                                            </View>

                                            <View style={{ flex: 1}} >
                                                <View style={{ flex: 1, flexDirection: 'row',width:65 }}>
                                                    <View style={{ flex: 1, borderColor: "#000", borderRightWidth: 1 }} />
                                                    <View style={{ flex: 1, }} />
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        }
                    />
                </View>
                <View style={{ flex: 5, marginTop: 10, backgroundColor: "#FFF" }}></View>


            </View>
        )
    }
}