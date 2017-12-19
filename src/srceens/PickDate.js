import React, { Component } from 'react';
import { cssTabView } from '../styles/css';
import DatePicker from 'react-native-datepicker'
import {
    Platform, StyleSheet, Text, Picker, View, Image, Button, Alert,
    I18nManager, AsyncStorage
} from 'react-native';
import { TabNavigator } from "react-navigation";
import { MainScreenNavigator } from '../components/TabNavigator'
this.myDatepicker && this.myDatepicker.onPressDate()
export class PickDate extends Component {
    constructor(props) {

        super(props);

        this.state = {
            date: "2016-05-15"
        }
    }

    componentDidMount() {
        
    }
    render() {
        var css = cssTabView;
        return (
            <View style={css.viewParent}>
                <DatePicker
                    date={this.state.date}
                    mode="date"
                    format="YYYY-MM-DD"
                    showIcon={false}
                    hideText={true}
                    ref={(datepicker) => this.myDatepicker = datepicker}
                    onDateChange={(date) => { this.updateSelectedDate(date) }}
                />
                <Button
                    title='btnSelectDate'
                    onPress={() => this.myDatepicker && this.myDatepicker.onPressDate()}
                />
            </View>
        )
    }
}