import { Pressable, Text } from "react-native"
import { colors, styles } from "../config/theme/app-theme"

interface Props{
  label:string;
  color?:string;
  doubleSize?:boolean;
  blackText?:boolean;
}

export const CalculatorBotton = ({
  label,
  color= colors.darkGray,
  doubleSize=false,
  blackText = false,


}:Props) => {
  
  return (
    <Pressable style={({pressed})=>({
      ...styles.button,
      backgroundColor:color,
      width : (doubleSize) ? 180: 80,
      opacity:(pressed) ? 0.8 : 1,
    })}>
      {/*hacemos el spret de style ...styles.buttonText y sobre escribimos el color si el color deldel brackText en verdadero es black en caso contrario es white */}
      <Text style={{
        ...styles.buttonText,
       color: (blackText)?'black':'white'
      }}> {label} </Text>
    </Pressable>
    
    
  )
}
