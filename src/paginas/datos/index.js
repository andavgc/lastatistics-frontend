import { useContext, useEffect, useState } from 'react';
import styles from './datos.module.css';
import axios from 'axios';
import { UserContext } from '../../common/context/user';
import Card from '../../components/card';

export default function ApiData() {

  const { user, period, limit, periodValue, methodValue, noData, setNoData } = useContext(UserContext);
  const [tracks, setTracks] = useState([]);


  useEffect(() => {

    axios.get(`https://lastatistics-api.vercel.app/api/music-info/${user}`)
      .then((resp) => {
        setTracks(resp.data.infolist)
      })
      .catch((error) => {
        console.log(error)
        setNoData(true)
      })
      

  }, [user, period, limit, setNoData])


  return (
      <>
      <>
        {user? <h1 className={styles.titulo}>{user}'s top {limit} {methodValue.substr(3)} ({periodValue})</h1>:<></>}
      </>
        
        <div className={styles.container}>
          {noData? <h2 className={styles.error__message}>Oops... looks like there's no data to show here :(</h2>:<>{tracks.map(track => <Card key={track.name} data={track} />)}</>}
        </div>
      </>
  )
}
