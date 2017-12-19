import React, { Component } from 'react';
import { cssTabView } from '../styles/css';
import moment from 'moment';
import {
    Platform, StyleSheet, Text, Picker, View, Image, Button, Alert,
    I18nManager, AsyncStorage, PanResponder, Animated, ListView
} from 'react-native';
import { TabNavigator } from "react-navigation";

export class Today extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.Id !== r2.Id });

        this.state = {
            dataSource: ds.cloneWithRows([]),
        }

    }



    render() {
        var css = cssTabView;
        return (
            <View style={css.viewParent}>
             


            </View>
        )
    }
}