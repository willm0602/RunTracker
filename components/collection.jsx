import React from 'react';
import { Linking, StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import Section from '../utils/section'
import style from '../Styles'
import {scheme} from '../Styles'
import formatTime from "../utils/format_time";
import Run from './run'

class Collection extends React.Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        var runs = this.props.runs
        console.log(runs)
        var distance = 0
        var time = 0
        runs.forEach((e)=>{
            distance+=e.distance
            time+=e.time
        })
        var speed = distance/time*60
        if(time==0)
        {
            speed = 0
        }
        var total = new Section(speed,time)
        return(
            <Run run={total}/>
        )
    }
}

export default Collection;