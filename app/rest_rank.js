import styles from "./styles/restrank.module.css"
import Image from "next/image";

const RestRank = ({data}) => {
    const my_data = data.splice(3);
    return(
        <div className={styles.container}>
            {
                my_data.map((t)=>(
                    <div className={styles.content}>
                        <h1 className={styles.index}>#{t.rank}</h1>
                        <Image className={styles.image} src={t.movie_url} width={100} height={100} />
                        <h1 className={styles.movie_name}>{t.movie_name}</h1>
                        <h1 className={styles.des}>"{t.movie_des}"</h1>
                        <div className={styles.hr}>
                            <div className={styles.line}></div>
                        </div>
                    </div>
                ))
            }
            
            
        </div>
    )
}

export default RestRank;