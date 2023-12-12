
import styles from "./styles.module.scss";
import React from "react";

const Articles = () => {
    return(
        <div >
            <div className={styles.titulo}>VOLÚMENES</div>
            <div className={styles.container}>
                <div className={styles.article}>
                    <article className={styles.image}>
                        <a href=""><img src="images1.jpg" alt="" /></a>
                        <p className={styles.text}>Abril 15 | 2023</p>
                        <p className={styles.vol}>Vol.1</p>
                    </article>
                </div>
                <div className={styles.article}>
                    <article className={styles.image}>
                        <a href=""><img src="images2.jpg" alt="" /></a>
                        <p className={styles.text}>Abril 18 | 2023</p>
                        <p className={styles.vol}>Vol.2</p>
                    </article>
                </div>
                <div className={styles.article}>
                    <article className={styles.image}>
                        <a href=""><img src="images3.jpg" alt="" /></a>
                        <p className={styles.text}>Abril 22 | 2023</p>
                        <p className={styles.vol}>Vol.3</p>
                    </article>
                </div>
                <div className={styles.article}>
                    <article className={styles.image}>
                        <a href=""><img src="images1.jpg" alt="" /></a>
                        <p className={styles.text}>Abril 24 | 2023</p>
                        <p className={styles.vol}>Vol.4</p>
                    </article>
                </div>
                <div className={styles.article}>
                    <article className={styles.image}>
                        <a href=""><img src="images2.jpg" alt="" /></a>
                        <p className={styles.text}>Abril 25 | 2023</p>
                        <p className={styles.vol}>Vol.5</p>
                    </article>
                </div>
                <div className={styles.article}>
                    <article className={styles.image}>
                        <a href=""><img src="images3.jpg" alt="" /></a>
                        <p className={styles.text}>Abril 27 | 2023</p>
                        <p className={styles.vol}>Vol.6</p>
                    </article>
                </div>
                <div className={styles.article}>
                    <article className={styles.image}>
                        <a href=""><img src="images1.jpg" alt="" /></a>
                        <p className={styles.text}>Abril 28 | 2023</p>
                        <p className={styles.vol}>Vol.7</p>
                    </article>
                </div>
                <div className={styles.article}>
                    <article className={styles.image}>
                        <a href=""><img src="images2.jpg" alt="" /></a>
                        <p className={styles.text}>Abril 29 | 2023</p>
                        <p className={styles.vol}>Vol.8</p>
                    </article>
                </div>
                <div className={styles.article}>
                    <article className={styles.image}>
                        <a href=""><img src="images3.jpg" alt="" /></a>
                        <p className={styles.text}>Abril 30 | 2023</p>
                        <p className={styles.vol}>Vol.9</p>
                    </article>
                </div>
            </div>
        </div>
    )
}
export default Articles