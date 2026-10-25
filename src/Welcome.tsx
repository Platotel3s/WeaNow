import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootNavigasi } from "../App";
import { AntDesign } from "@expo/vector-icons";

const bg={uri:'https://i.pinimg.com/1200x/03/6d/32/036d3278f895ddaad292031982cabc32.jpg'};

export default function Welcome(){
const animValue=useRef(new Animated.Value(0)).current;
useEffect(()=>{
  Animated.loop(
    Animated.sequence([
      Animated.timing(animValue,{
        toValue:1,
        duration:1000,
        useNativeDriver:true
      }),
      Animated.timing(animValue,{
        toValue:0,
        duration:1000,
        useNativeDriver:true
      }),
    ])
  ).start();
},[animValue]);

const translateY=animValue.interpolate({
  inputRange:[0,1],
  outputRange:[0,-15]
});

type HomeScreenProp=StackNavigationProp<RootNavigasi,'Home'>;
const navigation=useNavigation<HomeScreenProp>();
const getStarted=()=>{
  navigation.navigate('Home');
}
const testing=()=>{
  navigation.navigate("Testing");
}

return(
  <View style={styling.canvas}>
    <Image source={bg} resizeMode="cover" style={styling.background}/>
    <SafeAreaView style={styling.container}>
      <View style={styling.contentBox}>
        <Animated.Image 
          source={require('./assets/SunCloud.png')} 
          resizeMode="contain" 
          style={[styling.sunCloud,{transform:[{translateY}]}]}
        />
        <Text style={styling.title}>WeaNow</Text>
        <Text style={styling.subTitle}>Cuaca selalu di genggaman</Text>
        <TouchableOpacity style={styling.getStarted} onPress={getStarted} activeOpacity={0.8}>
          <Text style={styling.subGet}>Get Started</Text>
          <AntDesign name="double-right" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styling.getStarted} onPress={testing} activeOpacity={0.8}>
          <Text style={styling.subGet}>Testing Page</Text>
          <AntDesign name="double-right" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  </View>
);
}

const styling=StyleSheet.create({
  canvas:{
    flex:1,
  },
  background:{
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  sunCloud:{
    height:140,
    width:140,
    marginBottom:20,
  },
  title:{
    fontSize:36,
    fontWeight:'bold',
    fontFamily:'Roboto',
    color:'#FFFFFF',
    marginBottom:8,
    textShadowColor:'rgba(0, 0, 0, 0.4)',
    textShadowOffset:{ width: 1, height: 2 },
    textShadowRadius:4,
  },
  subTitle:{
    fontSize:18,
    fontWeight:'500',
    color:'#FFFFFF',
    textAlign:'center',
    opacity:0.9,
    textShadowColor:'rgba(0, 0, 0, 0.3)',
    textShadowOffset:{
      width:1,
      height:1
    },
    textShadowRadius:3,
  },
  contentBox:{
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal:30,
  },
  getStarted:{
    width:'100%',
    height:54,
    backgroundColor:'rgba(255,255,255,0.5)',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:10,
    borderRadius:27,
    marginTop:40,
    elevation:4,
    shadowColor:'#000',
    shadowOffset:{ width:0, height:2 },
    shadowOpacity:0.25,
    shadowRadius:4,
    borderColor:'rgba(255,255,255,0.5)'
  },
  subGet:{
    fontWeight:'bold',
    color:'black',
    fontSize:18,
  },
});


