import { Text, View, StyleSheet } from 'react-native';


export default function Balance({saldo,gastos}) {
  return (
    <View style={styles.container}>
      
      <View style={styles.item}>
          <Text style={styles.itemTitle}>Saldo</Text>
          <View style={styles.content}>
            <Text style={styles.currenceSymbol}>R$</Text>
            <Text style={styles.balance}>{saldo}</Text>
          </View>
        </View>
      <View style={styles.item}>
          <Text style={styles.itemTitle}>Gastos</Text>
          <View style={styles.content}>
            <Text style={styles.currenceSymbol}>R$</Text>
            <Text style={styles.expenses}>{gastos}</Text>
          </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
 container:{
   flexDirection:'row',
   backgroundColor:'#fff',
   justifyContent:'space-between',
   paddingStart:18,
   paddingEnd:18,
   marginTop:-24,
   marginStart:14,
   marginEnd:14,
   paddingTop:22,
   paddingBottom:22,
   borderRadius:4,
   zIndex:99
 },
 item:{

 },
 itemTitle:{
   fontSize:20,
   color:'#dadada'
 },
 content:{
   flexDirection:'row',
   alignItems:'center'
 },
 currenceSymbol:{
   color:'#dadada',
   marginEnd:6,
 },
 balance:{
   fontSize:22,
   color:'#2ecc71'
 },
 expenses:{
   fontSize:22,
   color:'#e74c3c'
 }
});

        