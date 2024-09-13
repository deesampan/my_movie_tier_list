import styles from "./styles/top3.module.css"
import CoverCard from "./cover_card";

const top3 = ({data}) =>{
    const top_data = data.slice(0,3);
    return(
        <div className={styles.container}>
            <div className={styles.top_card}>
                <h1>✨👑</h1>
                <CoverCard name={top_data[0].movie_name} index={top_data[0].rank} des={top_data[0].movie_des} url={top_data[0].movie_url}/>
                <h1>👑✨</h1>
            </div>
            <div className={styles.rest_card}>
                <CoverCard name={top_data[1].movie_name} index={top_data[1].rank} des={top_data[1].movie_des} url={top_data[1].movie_url}/>
            </div>
            <div className={styles.rest_card}>
                <CoverCard name={top_data[2].movie_name} index={top_data[2].rank} des={top_data[2].movie_des} url={top_data[2].movie_url}/>
            </div>
        </div>
    )
}

export default top3;