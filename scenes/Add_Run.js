/**
 * Scene to add a section to the run
 */

import React from 'react';
import {Text, View,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles, { scheme } from '../Styles'
import section from '../utils/section'
import {Sect} from '../components/sect'
import Collection from '../components/collection'

class AddRun extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            "sects": [] //by default there are no sections to the run yet
        }

    }
    
    render()
    {    
        var currentSections = []
        for(var i = 0; i<this.state.sects.length; i++)
        {
            var run = <Sect k={i} list={this} run = {this.state.sects[i]}></Sect>
            currentSections.push(run)
        }


        return (
            <View style={styles.container}>
                <Text style = {styles.header}>Add a run</Text>
                {currentSections}
                <Text style={styles.subHeader}>
                        Total:
                </Text>
                <Collection runs={this.state.sects}/>

                <View style={{flexDirection:"row"}}>
                    <TextInput
                        id="speed"
                        ref={
                            e=>{
                                this.speedInput = e
                            }
                        }
                        placeholder="mph"
                        placeholderTextColor={scheme[2]}
                        style={styles.normalText}
                        onChangeText = {(e)=>{this.newSpeed =e}}
                    />
    
                    <TextInput
                        id="duration"
                        placeholder="min"
                        placeholderTextColor={scheme[2]}
                        style={styles.normalText}
                        onChangeText = {(e)=>{this.newTime = e}}
                        ref={
                            e=>{
                                this.timeInput = e
                            }
                        }
                    />
    
                    <TouchableOpacity 
                        style={styles.addSectBtn}
                        onPress={(e)=>{
                            this.speedInput.clear()
                            this.timeInput.clear()
                            var speed = parseFloat(this.newSpeed)
                            var dur = parseFloat(this.newTime)
                            var newSection = new section(speed,dur)  
                            var newRun = this.state.sects
                            newRun.push(newSection)
                            this.setState({'sects':newRun})
                            }
                        }    
                    >
                        <Text style={styles.blackText}>
                            Add Section
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default AddRun;


