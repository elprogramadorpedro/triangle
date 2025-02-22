import {useRef, useState} from 'react';

//enum de operaciones 
enum Operator{
  add,
  subtract,
  multiply,
  divide,
}




export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  const lastOperation = useRef<Operator>();

  //metodo para limpiar todos los numero y llevarlos a cero

  const clean = () => {
    setNumber('0');
    setPrevNumber('0');
  };

  //borrar ultimo numero

  const deleteOperation = () => {
    let currentSign = '';
    let temporalNumber = number;

    if (number.includes('-')) {
      currentSign = '-';
      temporalNumber = number.substring(1);
    }

    if (temporalNumber.length > 1) {
      return setNumber(currentSign + temporalNumber.slice(0, -1));
    }
    setNumber('0');
  };

  const tooggleSign = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''));
    }
    setNumber('-' + number);
  };

  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      //punto decimal
      if (numberString === '.') {
        return setNumber(number + numberString);
      }

      //Evaluar si es otro cero y no hay punto
      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }

      //Evaluar si es diferente de cero, no hay punto y es el primer numero
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }

      //Evitar 000000.00
      if (numberString === '0' && !number.includes('.')) {
        return;
      }
      return setNumber(number + numberString);
    }

    setNumber(number + numberString);
  };


//funcion setLasNumber


const setLastNumber = () =>{
    if(number.endsWith('.')){
       setPrevNumber(number.slice(0,-1));
    }else{
  setPrevNumber(number);
}
setNumber('0') 
}

const divideOperation = () =>{
  setLastNumber();
  lastOperation.current=Operator.divide
}
  
const multiplyOperation = () =>{
  setLastNumber();
  lastOperation.current=Operator.multiply
}
  
const subTractOperation = () =>{
  setLastNumber();
  lastOperation.current=Operator.subtract
}
  
const addOperation = () =>{
  setLastNumber();
  lastOperation.current=Operator.add
}
  


  return {
    //PROPIEDADES
    number,
    prevNumber,

    //METODOS
    buildNumber,
    tooggleSign,
    clean,
    deleteOperation,
    divideOperation,
multiplyOperation,
subTractOperation,
addOperation,
  };
};
