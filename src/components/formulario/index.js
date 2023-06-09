import React, { useContext } from 'react'
import styles from './formulario.module.css'
import axios from 'axios';
import { UserContext } from '../../common/context/user';
import { useNavigate } from 'react-router-dom';



export default function Formulario({ periods, period, methods, aoPeriodoAlterado, aoMetodoAlterado, setLoading }) {

    const navigate = useNavigate();
    const { user, setUser, limit, method, setLimit, periodValue, methodValue, setNoData } = useContext(UserContext);
    const url = 'https://lastatistics-api.vercel.app/api/music-info/'
    const addUserHandler = (user, period, limit, method) => {
        if (!user || !period || !limit || !method) {
            return alert("You need to fill all fields")
        } else if (Number(limit) > 50) {
            return alert("Max quantity is 50")
        } else {

            setLoading(true)
            axios.get(url + user)
                .then(() => axios.put(url, { user: user, period: period, limit: limit, method: `${Object.keys(methods[0])}.${method}` })
                    .then((resp) => console.log(resp))
                    .then((resp) => resp.data.infolist.length===0?setNoData(true):setNoData(false))
                    .then((resp) => setLoading(false))
                    .then((resp) => navigate("/dados")))
                .catch((e) =>
                    axios.post(url, { user: user, period: period, limit: limit, method: `${Object.keys(methods[0])}.${method}` })
                    .then((resp) => resp.data.infolist.length===0?setNoData(true):setNoData(false))
                    .then((resp) => setLoading(false))
                    .then((resp) => navigate("/dados"))
                    .catch((error) => console.log(error)))

        }

    }

    return (
        <div className={styles.form}>
            <div className={styles.method__selector}>
                <label className={styles.label}>Info:&emsp;</label>
                <select required={true} className={styles.select__method} value={methodValue} onChange={event => aoMetodoAlterado(event.target.value)}>
                    <option />
                    {methods[0].user.map((method) => <option className={styles.option} key={method.label}>{method.label}</option>)}
                </select>
            </div>
            <div className={styles.user}>
                <label className={styles.label}>User:&emsp;</label>
                <input required={true} type="user" id='user' className={styles.texto__user} value={user} onChange={(e) => setUser(e.target.value)}></input>
            </div>
            <div className={styles.params}>
                <div className={styles.period}>
                    <label className={styles.label}>Period:&emsp;</label>
                    <select required={true} className={styles.select__period} value={periodValue} onChange={event => aoPeriodoAlterado(event.target.value)}>
                        <option />
                        {periods.map((period) => <option className={styles.option} key={period.label}>{period.label}</option>)}
                    </select>
                </div>
                <div className={styles.limit}>
                    <label className={styles.label}>Quantity:&emsp;</label>
                    <input required={true} type="text" id='limit' className={styles.texto__limit} value={limit} onChange={(e) => setLimit(e.target.value)}></input>
                </div>
            </div>
            <button onClick={() => addUserHandler(user, period, limit, method)}>show</button>
        </div>
    )
}