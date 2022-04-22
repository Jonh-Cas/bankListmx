import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useGetBanks from '../hooks/useGetBanks';
import Bank from '../components/Bank';

const BankListScreen = () => {

  const { bankList } = useGetBanks()

  return (
  
      <FlatList 
        data={bankList}
        keyExtractor={ (element, index ) => element.bankName.toString() + index.toString() }
        ListHeaderComponent={ () => (
          <SafeAreaView>
            <Text style={styles.title }  > Bancos  </Text>
          </SafeAreaView>
        )  }
        renderItem={ ({ item, index }) => (
          <Bank 
          age={ item.age  }
          bankName={item.bankName }
          description={ item.description }
          index={ index }
        />
        
        )}
        scrollEnabled
        style={{ backgroundColor: '#6D0082' }}
      />


  )
}

export default BankListScreen

const styles = StyleSheet.create({
  title:{
    textAlign: 'center', 
    fontSize: 30, 
    fontWeight: 'bold', 
    color: '#fff'
  }
})