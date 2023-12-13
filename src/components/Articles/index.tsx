
import styles from './styles.module.scss';
import React from 'react';
import { volumesData } from './mockData';

const Articles: React.FC = () => {
    return(
        <div >
            <div className={styles.titulo}>VOLÚMENES</div>
            <div className={styles.container}>
                {volumesData && volumesData.map((volume) => (
                    <div key={volume.id} className={styles.article}>
                        <article className={styles.image}>
                            <a href=""><img src={volume.imageUrl} alt="" /></a>
                            <p className={styles.text}>{volume.date}</p>
                            <p className={styles.vol}>{volume.volumeNumber}</p>
                        </article>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Articles;