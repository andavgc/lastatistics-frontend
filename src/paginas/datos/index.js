import { useContext, useEffect, useState } from 'react';
import styles from './datos.module.css';
import axios from 'axios';
import { UserContext } from '../../common/context/user';
import Card from '../../components/card';

export default function ApiData() {

  const { user, period, limit, periodValue, methodValue } = useContext(UserContext);
  const [tracks, setTracks] = useState([]);


  useEffect(() => {

    axios.get(`https://lastatistics-api.vercel.app/api/music-info/${user}`)
        .then((resp) => {
        setTracks(resp.data.tracklist);
      })
      .catch((error) => console.log(error))
    

  }, [user, period, limit])


  return (
    <>
      <h1 className={styles.titulo}>{user}'s {limit} {method} {periodValue}</h1>
      <div className={styles.container}>
      {tracks?.map(track => <Card key={track.name} data={track}/>)}
      </div>
    </>
  )
}
