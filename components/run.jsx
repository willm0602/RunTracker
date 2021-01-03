import React from 'react';
import { Linking, StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import Section from '../utils/section'
import style from '../Styles'
import {scheme} from '../Styles'
import formatTime from "../utils/format_time";

class Run extends React.Component
{
    constructor(props)
    {
        super(props)
        this.list = props.list
        this.k = props.k
    }

    render(){
        var run = this.props.run
        return(
            <View style={{flexDirection:"row",includeFontPadding: false} }>
                <Text style={style.normalText}>
                    {run.speed.toFixed(2)} m/hr 
                </Text>
                <Text style={style.normalText}>
                    {formatTime(run.time)}
                </Text>
                <Text style={style.normalText}>
                    {run.distance.toFixed(2)} miles
                </Text>
            </View>
        )
    }
}

export default Run