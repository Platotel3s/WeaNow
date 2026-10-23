import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/Home";
import Welcome from "./src/Welcome";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Predict from "./src/screens/Predict";


export type RootNavigasi={
  Welcome:undefined;
  Home:undefined;
  City:undefined;
  Predict:undefined;
}

const Stack=createStackNavigator<RootNavigasi>();

export default function App(){
  return(
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerStyle:{backgroundColor:'#000'},
            headerTintColor:'#333',
            headerTitleStyle:{fontWeight:'bold'},
          }}
        >
        <Stack.Screen 
          name="Welcome"
          component={Welcome}
          options={{
            title:'Welcome',
            headerShown:false
          }}
        />
        <Stack.Screen 
          name="Home"
          component={Home}
          options={({navigation})=>({
            title:'Home',
            headerShown:true,
            headerTintColor:'#fff',
            headerTitleStyle:{
              color:'#fff'
            },
            headerRight:()=>(
              <TouchableOpacity
                onPress={()=>navigation.navigate("Predict")}
                style={{marginRight:16}}
                hitSlop={10}
              >
                <Ionicons name="search-circle" size={32} color="#fff"/>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Predict"
          component={Predict}
          options={{
            title:'Prediction of Weather',
            headerShown:true,
            headerTintColor:'#fff',
            headerTitleStyle:{
              color:'#fff',
              fontWeight:'bold',
              fontSize:20
            }
          }}
        />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

