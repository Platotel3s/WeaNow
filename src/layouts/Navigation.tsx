import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export default function Navigation(){
  return(
    <View style={styling.container}>
      <TouchableOpacity>
        <Ionicons name='home' size={28} color="#000000"/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name='heart' size={28} color="#000000"/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name='search' size={28} color="#000000"/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name='settings' size={28} color="#000000"/>
      </TouchableOpacity>
      </View>
  );
}

const styling=StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-around',
    gap:24,
    width:'100%'
  }
});
