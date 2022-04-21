import React from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'



const SplashScreen = () => {
    return (
            <SafeAreaView style={styles.mainContainer} >
               
                <View style={ styles.viewShadow } >
                    <Image
                        source={require('../assets/logo.jpeg')}
                        style={{ height: 250, width: 300, borderRadius: 18,  }}
                    />
                </View>

                <Text style={ styles.title } >My Bank</Text>
            </SafeAreaView>

    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#11BB33'
    },

    viewShadow: {

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        
        elevation: 15,
    },

    title: {
        marginTop: 20, 
        fontSize: 25, 
        fontWeight: 'bold', 
        color: '#000' 
    }
})