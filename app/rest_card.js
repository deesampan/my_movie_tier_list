import styles from "./styles/restrank.module.css"
import Image from "next/image";

const RestCard = ({key,rank,movie_url,movie_name,movie_des}) =>{
    return(
        <div className={styles.content}>
            <h1 className={styles.index}>#{rank}</h1>
            <Image className={styles.image} src={movie_url} width={100} height={100} alt="" />
            <h1 className={styles.movie_name}>{movie_name}</h1>
            <h1 className={styles.des}>&quot;{movie_des}&quot;</h1>
            <div className={styles.hr}>
                <div className={styles.line}></div>
            </div>
        </div>
    )
}

export default RestCard;