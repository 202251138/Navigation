import { StyleSheet, View, TouchableOpacity, Text, TextInput } from 'react-native';

export default function Signup() {
  return (
    <View style = {styles.container}>
      <Text style = {styles.textStyle}>Create new account</Text>
      <View style = {styles.content}>
        <TextInput style = {styles.inputStyle} placeholder="Fullname" />
        <TextInput style = {styles.inputStyle} placeholder="Phone Number" />
        <TextInput style = {styles.inputStyle} placeholder="E-mail Address" />
        <TextInput 
          style={styles.inputStyle} 
          placeholder="Password" 
          secureTextEntry={true} 
        />
        <View style={styles.buttonCon}>
          <TouchableOpacity 
            style={styles.logButton}
            onPress={() => console.log("Sign Up button pressed")}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'auto',
  },
  textStyle: {
    color: 'rgb(252,90,102)',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 15,
    textAlign: 'left',
    paddingRight: 90,
  },
  content: {
    width: '90%',
  },
  inputStyle: {
    borderWidth: 1,
    borderRadius: 18,
    height: 40,
    margin: 15,
    padding: 10,
  },
  buttonCon: {
    marginTop: 30,
    alignItems: 'center',
  },
  logButton: {
    backgroundColor: 'rgb(252,90,102)',
    width: 220,
    padding: 10,
    borderRadius: 18,
    alignItems: 'center',
    
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    alignItems: 'center',
  },
});