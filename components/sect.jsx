import React from 'react';
import { Linking, StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import Section from '../utils/section'
import style from '../Styles'
import {scheme} from '../Styles'
import formatTime from "../utils/format_time";
import Run from './run'

class Sect extends React.Component
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
            <View style={{flexDirection:"row"}}>
                <Run run = {this.props.run}></Run>
                <TouchableOpacity
                    onPress = {
                        (e)=>{
                            var newList = this.list.state.sects
                            newList.splice(this.props.k,1)
                            this.list.setState({'sects':newList})
                        }
                    }
                >
                    <Text style={style.blackText}>X</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export {Sect}