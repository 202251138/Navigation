import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Homescreen() {
  const navigation = useNavigation();
  return (
    <View style = {styles.container}>
    <Text style = {styles.textstyle}> Say hello to your new {'\n'} app</Text>
    <TouchableOpacity style = {styles.logbutton}
        onPress = {() => navigation.navigate("SignIn")}
    >
    <Text style = {styles.buttontext}> Log In </Text>
    </TouchableOpacity>

    <TouchableOpacity style = {styles.signbutton}
        onPress = {() => navigation.navigate("SignUp")}
    >
    <Text style = {styles.buttontext2}> Sign Up </Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textstyle: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'rgb(252,90,102)',
    width: 255,
  },

  logbutton: {
    marginTop: 30, 
    borderRadius: 18,
    paddingVertical: 12,
    width: 255,
    backgroundColor: 'rgb(252,90,102)',
  },
  buttontext: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    borderRadius: 18,
    width: 255,
  },
  buttontext2: {
    textAlign: 'center',
    color: 'rgb(252,90,102)',
    borderRadius: 18,
    width: 255,
    backgroundColor: ''
  },
  signbutton: {
    marginTop: 20,
    color: 'rgb(252,90,102)',
    borderRadius: 18,
    fontWeight: 'bold',
    borderColor: 'rgb(252,90,102)',
    paddingVertical: 12,
    borderWidth: 2,
    marginBottom: 200,
  }
});