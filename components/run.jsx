/**
 * JSX component to describe a run
 */
import React from 'react';
import {Text, View } from 'react-native';
import style from '../Styles'
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
                <Text style={style.normalText}> {/** Average speed ran */}
                    {run.speed.toFixed(2)} m/hr 
                </Text>

                <Text style={style.normalText}> {/** Time ran for */}
                    {formatTime(run.time)}
                </Text>
                <Text style={style.normalText}> {/**Distance traveled */}
                    {run.distance.toFixed(2)} miles
                </Text>
            </View>
        )
    }
}

export default Run