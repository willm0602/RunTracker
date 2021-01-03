/**
 * Styles for JSX components
 */

import {StyleSheet} from 'react-native'

const scheme = [ //color scheme used
  "#011638",
  "#2E294E",
  "#9055A2",
  "#D499B9",
  "#E8C1C5"
]

const styles = StyleSheet.create({
    container: { //style for the main component
      flex: 1,
      backgroundColor: scheme[0],
      alignItems: 'center',
      justifyContent: 'center',
    },

    header:{ //style for main title
      color: scheme[4],
      fontSize: 30
    },

    subHeader:{ //style for secondary titles
      color:scheme[4],
      fontSize: 24,
      marginTop: 30
    },


    refText:{ //style for link to icon source
        color: scheme[1],
        fontSize: 8,
        margin:20
    },

    logo:{ //style for logo image
        resizeMode: "stretch",
        width: 160,
        height: 160,
    },

    normalText:{ //style for most text
      color: scheme[2],
      textAlign: "center",
      margin:20,
      includeFontPadding: false,
      fontSize: 10,
      maxWidth: 40
    },

    blackText:{ //like normalText but black
      color: "white",
      textAlign: "center",
      margin:20,
      includeFontPadding: false,
      fontSize: 20
    },
    xButton:{ //style for x buttons
      backgroundColor: scheme[3]
    },
    addSectBtn:{ //style for buttons to add a section of the run
      backgroundColor: scheme[3]
    }
  });

export default styles
export {scheme}