import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'


export default function Signin () {
       return (
        <View style = {styles.container}>
            <Text style = {styles.textStyle}> Sign in </Text>
        <View style = {styles.content}>
        <TextInput style = {styles.inputStyle} placeholder='E-mail or phone number' />
        <TextInput style = {styles.inputStyle} placeholder='Password' secureTextEntry={true} />

        <View style = {styles.buttonCon}>
        <TouchableOpacity style = {styles.logButton}
                     onPress={() => console.log ("Log In button pressed")}>
         <Text style = {styles.buttonText}> Log in</Text>
        </TouchableOpacity>

        <Text style = {styles.buttonText2}> OR </Text>
        <TouchableOpacity style = {styles.fbButton}
                     onPress={() => console.log ("Facebook button pressed")}>
        <Text style = {styles.buttonText}>Log in with Facebook</Text>
        </TouchableOpacity>
        </View>        
       </View>
      </View>
      )
}
const styles = StyleSheet.create({
   container: { 
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    marginBottom: 70,
    paddingRight: 250,
    fontWeight: 'bold',
    color: 'rgb(252,90,102)',
    fontSize: 30,
    textAlign: 'left',
    alignItems: 'flex-start,'
    
  },
  content: {
    width: '85%',
  },
  inputStyle: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 30,
    paddingHorizontal: 10,
    borderRadius: 18,
  },
  buttonCon: {
    marginTop: 20,
  },
  logButton: {
    backgroundColor: 'rgb(252,90,102)',
    padding: 10,
    borderRadius: 18,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
  },
  buttonText2: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'gray',
  },
  fbButton: {
    backgroundColor: 'rgb(66,102,178)',
    padding: 10,
    borderRadius: 18,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 300,
  },  
});