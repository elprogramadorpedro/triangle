import React from 'react'
import { Text, View } from 'react-native'
import { colors, styles } from '../config/theme/app-theme'
import { CalculatorBotton }   from '../components/CalculatorBotton'
import { useCalculator } from '../hook/useCalculator'

export const CalculatorScreen = () => {

  const {
    //properties
    prevNumber,
   number,
   
   buildNumber,tooggleSign,
   clean, deleteOperation, divideOperation,
   multiplyOperation,
   subTractOperation,
   addOperation,
   calculateResult,



//methods
  } = useCalculator();


  return (
    <View style={styles.calculatorContainer}>
       
<View style={{paddingHorizontal:30, paddingBottom:20}}>

        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={styles.mainResult}>{number}</Text>



        <Text 
        adjustsFontSizeToFit
        numberOfLines={1}
        style={styles.subResult}>
          {(prevNumber==='0')?'':prevNumber}
          </Text>
</View>
    


<View style={styles.row}>


<CalculatorBotton  onPress={clean} blackText label="C" color={colors.lightGray}/>
<CalculatorBotton onPress={tooggleSign}  blackText label="+/-" color={colors.lightGray}/>
{/*<CalculatorBotton onPress={()=> console.log('+/-')}  blackText label="+/-" color={colors.lightGray}/>*/}
<CalculatorBotton onPress={deleteOperation}  blackText label="del" color={colors.lightGray}/>
<CalculatorBotton onPress={divideOperation}  label="÷" color={colors.orange}/>
</View>
<View style={styles.row}>


<CalculatorBotton onPress={()=> buildNumber('7')}  label="7" />
<CalculatorBotton onPress={()=> buildNumber('8')}  label="8" />
<CalculatorBotton onPress={()=> buildNumber('9')}  label="9" />
<CalculatorBotton onPress={multiplyOperation}  label="x" color={colors.orange}/>


</View>
<View style={styles.row}>


<CalculatorBotton onPress={()=> buildNumber('4')}  label="4" />
<CalculatorBotton onPress={()=> buildNumber('5')}  label="5"/>
<CalculatorBotton onPress={()=> buildNumber('6')}  label="6" />
 {/* <CalculatorBotton onPress={()=> console.log('-')}  label="-" color={colors.orange} />*/}
 <CalculatorBotton onPress={subTractOperation}  label="-" color={colors.orange} />

</View>
<View style={styles.row}>


<CalculatorBotton onPress={()=> buildNumber('1')}  label="1"/>
<CalculatorBotton onPress={()=> buildNumber('2')}  label="2" />
<CalculatorBotton onPress={()=> buildNumber('3')}  label="3" />
<CalculatorBotton onPress={addOperation}  label="+" color={colors.orange}/>


</View>

<View style={styles.row}>



<CalculatorBotton onPress={()=> buildNumber('0')}  label="0" doubleSize/>
<CalculatorBotton onPress={()=> buildNumber('.')}  label="." />
<CalculatorBotton onPress={calculateResult}  label="=" color={colors.orange}/>


</View>




</View>


  )
}
