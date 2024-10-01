import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <>
    <StatusBar/>
    <View style={styles.main}>
      <View style={styles.box1}>
        <View style={styles.innerbox1}></View>
        <View style={styles.innerbox2}></View>
        <View style={styles.innerbox3}></View>
      </View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
   
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  box1: {
    flex: 2,
    backgroundColor: "red",
    flexDirection:"row",
   
  },
  box2: { 
    flex: 1,
    backgroundColor: "green"
   },
  box3: { 
    flex: 1,
     backgroundColor: "blue" 
    },
  txt: {
    fontSize: 22,
    paddingTop: 20,
  },
  innerbox1:{
    flex:1,
    backgroundColor:"skyblue",
    margin:10,
    
  }, innerbox2:{ flex:1,
    backgroundColor:"black",
    margin:10,
  }, innerbox3:{
    flex:1,
    backgroundColor:"yellow",
    margin:10,
  }
});
