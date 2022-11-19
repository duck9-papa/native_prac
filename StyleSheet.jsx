import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textinput: {
      borderBottomColor: 'grey',
      // paddingLeft: '10px',
      padding: '10px',
    },
    view: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    row: {
      flexDirection: 'row',
    },
    item:{
        backgroundColor:'gray',
        borderRadius:'10px',
        margin:'10px'
    }
  });