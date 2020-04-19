import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Resultado = (props) => {
    const { route } = props
    const resultado = route.params
    console.log(route.params.kml)
    return (
        <View style={styles.container}>
            <Text>Resultado: {resultado.kml} Km/l</Text>
            <Text>Indicação do veiculo: {resultado.indicacao}</Text>
        </View>
    )
}

export default Resultado

const styles = StyleSheet.create({
    container: {
        marginTop: "20%",
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        //justifyContent: 'center',
      },
})
