import { Text, View, StyleSheet,FlatList } from 'react-native';

import Header from '../../components/Header'
import Balance from '../../components/Balance'
import Moviments from '../../components/Moviments'
import Actions from '../../components/Actions'

const list = [
  {
    id:1,
    label:'Boleto Conta de Luz',
    value:'R$300,00',
    date: '17/09/2022',
    type : 0
  },
  {
    id:2,
    label:'PIX cliente x',
    value:'R$2.500,00',
    date: '21/02/2022',
    type : 1
  },
  {
    id:3,
    label:'Salario',
    value:'R$4.200,00',
    date: '25/12/2022',
    type : 1
  },
  
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header 
      name='Mairon Duarte'
      />

      <Balance saldo='9.250,90' gastos='-527,00'/>

      <Actions/>

      <Text style={styles.title}>Ultimas movimentacoes</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=> <Moviments data={item} />}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fafafa'
  },title:{
    fontSize:18,
    fontWeight:'bold',
    margin:14,
  },
  list:{
    marginStart:14,
    marginEnd:14,
  }
});
