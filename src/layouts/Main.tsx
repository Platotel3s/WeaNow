import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navigation from "./Navigation";

interface Template{
  children:ReactNode;
}

export default function Main({children}:Template){
  return(
    <SafeAreaView style={styling.safeArea}>
      <View style={styling.body}>
        <View>
          {children}
        </View>
      </View>
      <View style={styling.footer}>
        <Navigation/>
      </View>
    </SafeAreaView>
  );
}

const styling=StyleSheet.create({
  safeArea:{
    flex:1,
    flexDirection:'column',
    justifyContent:'flex-start'
  },
  body:{
    flex:5,
    backgroundColor:'#EEEEEE',
  },
  footer:{
    flex:0.4,
    backgroundColor:'#FFF',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    shadowOffset:{
      width:0,
      height:-5,
    },
    shadowRadius:4,
    shadowOpacity:0.25,
    gap:1,
  }
});
