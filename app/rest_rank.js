import styles from "./styles/restrank.module.css"
import Image from "next/image";

const RestRank = () => {
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.index}>#4</h1>
                <Image className={styles.image} src="/rick_n_morty.jpg" width={100} height={100} />
                <h1 className={styles.movie_name}>Rick And Morty</h1>
                <h1 className={styles.des}>"so much fun to watch"</h1>
                <div className={styles.hr}>
                    <div className={styles.line}></div>
                </div>
            </div>
            <div className={styles.content}>
                <h1 className={styles.index}>#4</h1>
                <Image className={styles.image} src="/rick_n_morty.jpg" width={100} height={100} />
                <h1 className={styles.movie_name}>Rick And Morty</h1>
                <h1 className={styles.des}>"so much fun to watch"</h1>
                <div className={styles.hr}>
                    <div className={styles.line}></div>
                </div>
            </div>
            <div className={styles.content}>
                <h1 className={styles.index}>#4</h1>
                <Image className={styles.image} src="/rick_n_morty.jpg" width={100} height={100} />
                <h1 className={styles.movie_name}>Rick And Morty</h1>
                <h1 className={styles.des}>"so much fun to watchsssssssssssssssssssssssssssssss"</h1>
                <div className={styles.hr}>
                    <div className={styles.line}></div>
                </div>
            </div>
            
        </div>
    )
}

export default RestRank;