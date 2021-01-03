import {StyleSheet} from 'react-native'

const scheme = [
  "#011638",
  "#2E294E",
  "#9055A2",
  "#D499B9",
  "#E8C1C5"
]

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: scheme[0],
      alignItems: 'center',
      justifyContent: 'center',
    },
    header:{
      color: scheme[4],
      fontSize: 30
    },
    subHeader:{
      color:scheme[4],
      fontSize: 24,
      marginTop: 30
    },
    refText:{
        color: scheme[1],
        fontSize: 8,
        margin:20
    },
    logo:{
        resizeMode: "stretch",
        width: 160,
        height: 160,
    },
    normalText:{
      color: scheme[2],
      textAlign: "center",
      margin:20,
      includeFontPadding: false,
      fontSize: 10,
      maxWidth: 40
    },
    blackText:{
      color: "white",
      textAlign: "center",
      margin:20,
      includeFontPadding: false,
      fontSize: 20
    },
    xButton:{
      backgroundColor: scheme[3]
    },
    addSectBtn:{
      backgroundColor: scheme[3]
    }
  });

export default styles
export {scheme}