/**
 * JSX component to represent a section of the run
 */

import React from 'react';
import  {Text, View, TouchableOpacity } from 'react-native';
import style from '../Styles'
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
                <Run run = {this.props.run} style={{width:120,alignText:"right"}}></Run>
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