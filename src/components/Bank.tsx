import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

interface Props {
  age: number;
  bankName: string;
  description: string;
  index: number;
}

const  imageBank = [
  {url: require(`../assets/pagatodo.png`), height: 80, width: 180 },
  {url: require(`../assets/bbva.png`), height: 50, width: 180 },
  {url: require(`../assets/banamex.jpeg`), height: 45, width: 190 },
  {url: require(`../assets/santander.png`), height: 80, width: 180 },
  {url: require(`../assets/scotiabank.png`), height: 80, width: 180 },
  
]

const Bank = ({ age, bankName, description, index }: Props) => {
  return (
    <View style={styles.container} >
      <View style={styles.target}  >
        <Image
          source={ imageBank[index].url }
          style={{ height: imageBank[index].height, width: imageBank[index].width }}
        />
        <Text style={{ fontSize: 25, ...styles.styleText }} >  {bankName} </Text>
        <Text style={{ fontSize: 15, ...styles.styleText }} > A {age} años de servicio</Text>
        <Text style={{ fontSize: 15, ...styles.styleText }} >  {description} </Text>
      </View>
    </View>
  )
}

export default Bank;

const styles = StyleSheet.create({
  
  container: {
    alignItems: 'center',
    padding: 10,
    minHeight: 150,
    minWidth: 250,
  },

  styleText: {
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold'
  },

  target: {
    borderRadius: 15,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }

})