import React, { useContext, useState } from 'react';
import styles from './inicio.module.css';
import Formulario from 'components/formulario';
import periods from 'json/periods.json';
import methods from 'json/methods.json';
import { UserContext } from 'common/context/user';
import ClipLoader from 'react-spinners/ClipLoader';
import logo from 'logo.png';

export default function Inicio() {

  const {period, method, setPeriodValue, setPeriod, setMethod, setMethodValue} = useContext(UserContext)
  const [loading, setLoading] = useState(false)

  function takePeriod(periods, valor){
    
    const newValue = periods.filter(obj => obj.label===valor)[0]
    
    setPeriodValue(newValue.label)
    setPeriod(newValue.period)
  }

  function takeMethod(methodsArray, valor){
    
    const newValue = methodsArray.filter(obj => obj.label===valor)[0]
    
    setMethodValue(newValue.label)
    setMethod(newValue.method)
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.titulo}>Enter the informations</h1>
      <Formulario 
      periods={periods}
      methods={methods}
      period={period}
      method={method}
      setLoading={setLoading}
      aoPeriodoAlterado={(valor) => takePeriod(periods, valor)}
      aoMetodoAlterado={(valor) => takeMethod(methods[0].user, valor)}
      />
      <div className={styles.loading}>
      {loading ? 
      <ClipLoader
        color={"#3663d6"}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />: <></>}
      </div>
      <img className={styles.logo} src={logo} alt='logo' />
    </main>
  )
}
