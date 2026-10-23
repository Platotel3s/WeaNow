import { ReactNode } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Template{
  children:ReactNode;
}

export default function Container({children}:Template){
  return(
    <SafeAreaView style={styling.safeArea}>
      <StatusBar barStyle="dark-content"/>
      <View style={styling.container}>
        <View style={styling.card}>
          {children}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styling=StyleSheet.create({
  safeArea:{
    flex:1,
    backgroundColor:'#f8f9fa'
  },
  container:{
    flex:1,
    paddingHorizontal:12,
    paddingVertical:16
  },
  card:{
    flex:1,
    backgroundColor:'#ffffff',
    borderRadius:15,
    shadowColor:'#000',
    shadowOffset:{
      width:0,
      height:0
    },
    shadowOpacity:0.06,
    shadowRadius:15,
    elevation:3,
  },
});
