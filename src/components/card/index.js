import React from 'react';
import styles from './card.module.css';

export default function card(track) {
    return (
        <nav className={styles.card} key={track.data.name}>
            <h3 className={styles.song__title}>{track.data.rank}. {track.data.name}</h3>
            <h4 className={styles.artist}>{track.data.artist}</h4>
            <img src={track.data.cover} width={150} alt="cover" />
            <h5 className={styles.playcount}>plays: {track.data.playcount}</h5>
        </nav>
    )
}
