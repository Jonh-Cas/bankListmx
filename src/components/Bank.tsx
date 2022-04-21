import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props{
    age: number;
    bankName: string;
    description: string;
}

const Bank = ({ age, bankName, description  }: Props ) => {
  return (
    <View>
      <Text>{ bankName } </Text>
      <Text>{ age } </Text>
      <Text>{ description } </Text>
    </View>
  )
}

export default Bank;

const styles = StyleSheet.create({})