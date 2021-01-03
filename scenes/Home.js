import React from 'react';
import { Linking, Text, View, Image, Button } from 'react-native';
import styles from '../Styles'

export default function Home(props) {
  console.log();
  return (
    <View style={styles.container}>
      <Image style = {styles.logo}
        tintColor='#FFFFFF'
        source={require('../assets/logo.svg')}
      />

        <Button
          title="Add a run"
          onPress={()=>{props.navigation.navigate('AddRun')}}
        />

      <Text style = {styles.refText} onPress = {()=>{
        Linking.openURL("https://www.flaticon.com/authors/smashicons")
      }}>Icons made by Smashicons from www.flaticon.com</Text>

    </View>
  );
}


