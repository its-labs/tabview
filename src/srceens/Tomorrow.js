import React, { Component } from 'react';
import { cssTabView } from '../styles/css';
import {
    Platform, StyleSheet, Text, Picker, View, Image, Button, Alert,
    I18nManager, AsyncStorage
} from 'react-native';
import { TabNavigator } from "react-navigation";
import { MainScreenNavigator } from '../components/TabNavigator'

export class Tomorrow extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        var css = cssTabView;
        return (
            <View style={css.viewParent}>
                <Text>Tomorrow</Text>
            </View>
        )
    }
}