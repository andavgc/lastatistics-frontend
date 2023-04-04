import React, { useContext } from 'react'
import styles from './formulario.module.css'
import axios from 'axios';
import { UserContext } from '../../common/context/user';
import { useNavigate } from 'react-router-dom';



export default function Formulario({ items, period, aoAlterado, setLoading }) {

    const navigate = useNavigate();
    const { user, setUser, limit, setLimit, periodValue } = useContext(UserContext);

    const addUserHandler = (user, period, limit) => {
        if (!user || !period || !limit) {
            return alert("You need to fill all fields")
        } else {

            setLoading(true)
            axios.get(`https://music-app-backend-psi.vercel.app/api/music-info/${user}`)
            .then(() => axios.put('https://music-app-backend-psi.vercel.app/api/music-info', { user: user, period: period, limit: limit })
            .then((resp) => setLoading(false))
            .then((resp) => navigate("/dados")))
            .catch(() =>
                axios.post('https://music-app-backend-psi.vercel.app/api/music-info', { user: user, period: period, limit: limit })
                    .then((resp) => console.log(resp))
                    .catch((error) => console.log(error)))      
            
            
            
        }
        
    }

    return (
        <div className={styles.form}>
            <div className={styles.user}>
                <label className={styles.label}>User</label>
                <input required={true} type="user" id='user' className={styles.texto} value={user} onChange={(e) => setUser(e.target.value)}></input>
            </div>
            <div className={styles.params}>
                <div className={styles.period}>
                    <label className={styles.label}>Period</label>
                    <select required={true} className={styles.select} value={periodValue} onChange={event => aoAlterado(event.target.value)}>
                        <option />
                        {items.map((period) => <option className={styles.option} key={period.label}>{period.label}</option>)}
                    </select>
                </div>
                <div className={styles.limit}>
                    <label className={styles.label}>Limit</label>
                    <input required={true} type="text" id='limit' className={styles.texto} value={limit} onChange={(e) => setLimit(e.target.value)}></input>
                </div>
            </div>
            <button onClick={() => addUserHandler(user, period, limit)}>show</button>
        </div>
    )
}