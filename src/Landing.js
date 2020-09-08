import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {Button} from 'native-base';

var MyBackground = require('../assets/icons/landing.jpg');

class Landing extends React.Component{
    render(){
        return(
            <View style={{flex: 1}}>
                <ImageBackground source={MyBackground} style={styles.backgroundImage}>
                    <View style={styles.viewStyle}>
                        <Text style={styles.titleStyles}>
                        Welcome to PokeSearch
                        </Text>
                        <Button 
                        block={true}
                        style={styles.buttonStyle}
                        onPress={()=> this.props.switchScreen("search")}
                        >
                        <Text style={styles.buttonText}>Start Searching</Text>
                        </Button>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = {
    backgroundImage: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      flexDirection: "column"
    },
  
    viewStyle: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    titleStyles: {
      fontSize: 30,
      color: 'blue',
      alignItems: 'center'
    },
  
    buttonStyle: {
      margin: 10
    },
  
    buttonText: {
      color: 'white'
    }
  }

export default Landing;