import React, { useContext, useState } from 'react';
import styles from './inicio.module.css';
import Formulario from 'components/formulario';
import periods from 'json/periods.json';
import { UserContext } from 'common/context/user';
import ClipLoader from 'react-spinners/ClipLoader';
import logo from 'logo.png';

export default function Inicio() {

  // const [period, setPeriod] = useState("ola");
  const {periodValue, setPeriodValue, setPeriod, period} = useContext(UserContext)
  const [loading, setLoading] = useState(false)

  function takePeriod(periods, valor){
    
    const newValue = periods.filter(period => period.label===valor)[0]
    
    setPeriodValue(newValue.label)
    setPeriod(newValue.period)
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.titulo}>Enter the informations</h1>
      <Formulario 
      items={periods}
      period={period}
      value={periodValue}
      setLoading={setLoading}
      aoAlterado={(valor) => takePeriod(periods, valor)}
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
