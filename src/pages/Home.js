import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Button } from 'react-native'

const Home = (props) => {
    const [km, setKm] = useState()
    const [litros, setLitros] = useState()

    const { navigation } = props

  
  const verificar = () => {
    var kml = km/litros
    var indicacao
    if(kml > 12) {
        indicacao = 'A'
    } else if ( kml > 10 && kml <= 12) {
        indicacao = 'B'
    }
    else if ( kml > 8 && kml <= 10) {
        indicacao = 'C'
    }
    else if( kml > 4 && kml <= 8) {
        indicacao = 'D'
    }
    else if ( kml > 0 && kml <= 4) {
        indicacao = 'E'
    }

    navigation.navigate('Resultado', {kml, indicacao})

    
}

    return (
        <View style={styles.container}>
            <TextInput style={styles.textinput} 
                placeholder = "KM rodados" 
                value = {km} 
                onChangeText = {(value)=> setKm(value)}
                keyboardType = "float"/>
        
        
            <TextInput style={styles.textinput} 
                placeholder = "Litros consumidos" 
                value = {litros} 
                onChangeText = {(value)=> setLitros(value)}
                keyboardType = "float"/>

            <View style={styles.botao}>
                <Button 
                title = "Verificar"
                onPress = {verificar}  />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        marginTop: "10%",
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        //justifyContent: 'center',
      },
    textinput : {
        width: "90%",
        marginTop: "5%",
        borderWidth: 1,
        borderColor: "#b9b9b9",
        padding: 3,
        borderRadius: 10
      },
      botao : {
        marginTop: 5,
        color: "#f73232"
      },
})
