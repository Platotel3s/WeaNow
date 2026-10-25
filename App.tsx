import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/Home";
import Welcome from "./src/Welcome";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Predict from "./src/screens/Predict";
import City from "./src/screens/City";
import Test from "./src/Test";


export type RootNavigasi={
  Welcome:undefined;
  Home:undefined;
  City:undefined;
  Predict:undefined;
  Testing:undefined;
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
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name="Predict"
          component={Predict}
          options={{
            headerShown:false,
          }}
        />
        <Stack.Screen
          name="City"
          component={City}
          options={{
            title:'Cari keterangan cuaca di kota tujuan',
            headerShown:true,
            headerTintColor:'#fff',
            headerTitleStyle:{
              color:'#fff',
              fontWeight:'bold',
              fontSize:20
            }
          }}
        />
        <Stack.Screen
          name="Testing"
          component={Test}
          options={{
            headerShown:false
          }}
        />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

