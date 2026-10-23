import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Welcome from '../Welcome';
import Home from '../Home';


const Tab=createMaterialTopTabNavigator();
export default function Navigation(){
  return(
    <Tab.Navigator
      initialRouteName='Welcome'
      screenOptions={{
        tabBarShowLabel:false,
        tabBarStyle:{
          height:0,
          elevation:0,
          shadowOpacity:0
        },
        swipeEnabled:true
      }}
    >
      <Tab.Screen name='Welcome' component={Welcome}/>
      <Tab.Screen name='Home' component={Home}/>
    </Tab.Navigator>
  );
}
