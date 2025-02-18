import React from 'react'
import { Text, View } from 'react-native'
import { colors, styles } from '../config/theme/app-theme'
import { CalculatorBotton }   from '../components/CalculatorBotton'

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
       
<View style={{paddingHorizontal:30, paddingBottom:20}}>
        <Text style={styles.mainResult}>1500</Text>
        <Text style={styles.subResult}>15</Text>
</View>
    


<View style={styles.row}>


<CalculatorBotton  onPress={()=> console.log('C')} blackText label="C" color={colors.lightGray}/>
<CalculatorBotton onPress={()=> console.log('+/-')}  blackText label="+/-" color={colors.lightGray}/>
<CalculatorBotton onPress={()=> console.log('%')}  blackText label="%" color={colors.lightGray}/>
<CalculatorBotton onPress={()=> console.log('÷')}  label="÷" color={colors.orange}/>


</View>
<View style={styles.row}>


<CalculatorBotton onPress={()=> console.log('7')}  label="7" />
<CalculatorBotton onPress={()=> console.log('8')}  label="8" />
<CalculatorBotton onPress={()=> console.log('9')}  label="9" />
<CalculatorBotton onPress={()=> console.log('X')}  label="X" color={colors.orange}/>


</View>
<View style={styles.row}>


<CalculatorBotton onPress={()=> console.log('4')}  label="4" />
<CalculatorBotton onPress={()=> console.log('5')}  label="5"/>
<CalculatorBotton onPress={()=> console.log('6')}  label="6" />
<CalculatorBotton onPress={()=> console.log('-')}  label="-" color={colors.orange} />


</View>
<View style={styles.row}>


<CalculatorBotton onPress={()=> console.log('1')}  label="1"/>
<CalculatorBotton onPress={()=> console.log('2')}  label="2" />
<CalculatorBotton onPress={()=> console.log('3')}  label="3" />
<CalculatorBotton onPress={()=> console.log('+')}  label="+" color={colors.orange}/>


</View>

<View style={styles.row}>



<CalculatorBotton onPress={()=> console.log('0')}  label="0" doubleSize/>
<CalculatorBotton onPress={()=> console.log('.')}  label="." />
<CalculatorBotton onPress={()=> console.log('=')}  label="=" color={colors.orange}/>


</View>




</View>


  )
}
